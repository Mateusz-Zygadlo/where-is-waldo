import React, { useState } from 'react';
import firebaseConfig from './firebase';
import { getFirestore, collection, getDocs, orderBy, query, } from 'firebase/firestore';

const app = firebaseConfig;
const db = getFirestore(app);

const Results = () => {
    const [resultArr, setResultArr] = useState([]);
    let newArr = [];

    const loadResults = async (db) => {
        newArr.length = 0;
        const resultCollection = query(collection(db, 'gameNickname'), orderBy('time', 'asc'))
        const resultSnapshot = await getDocs(resultCollection)
        const results = resultSnapshot.docs.map(doc => {
            const name = doc.data().name;
            const time = doc.data().time;
            newArr.push({
                name,
                time
            })
        })

        setResultArr([...newArr]);
        
        return newArr;
    }

    loadResults(db);


    return(
        <div>
            {resultArr.length ? 
            <div>
                <h1 className="resultH1">Results</h1>
                <div className="result">
                    <div className="resultUser">
                        <div className="nickname">name</div>
                        <div className="time">time</div>
                    </div>
                    {resultArr.map((item, i) => (
                        <div key={i} className="resultUser">
                            <div className="nickname">{item.name}</div>
                            <div className="time">{item.time}</div>
                        </div>
                    ))}
                </div>
            </div> 
            : <div className="noResults">No results. Play to appear in the list</div>}
        </div>
    )
}

export default Results;