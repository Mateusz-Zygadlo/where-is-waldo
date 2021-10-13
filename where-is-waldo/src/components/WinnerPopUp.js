import React from 'react';

const WinnerPopUp = (props) => {
    const checkNick = (e) => {
        const inputValue = e.target.parentElement.children[2].value;
        const pIncorrect = e.target.parentElement.children[3];
        const parentElement = e.target.parentElement;

        if(inputValue){
            props.setWinnerNicknameFunc(inputValue);
            parentElement.classList.add('closeVisibility');
        }else{
            pIncorrect.classList.remove('incorrectVisibility');
        }
    }

    return(
        <div className="winnerPopUp">
            <span className="material-icons close" onClick={(e)=>{e.target.parentElement.classList.add('closeVisibility')}}>
                close
            </span>
            <h1>Enter your nickname</h1>
            <input type="text" placeholder="nickname" />
            <p className="incorrect incorrectVisibility">incorrect</p>
            <button className="submit" type="submit" onClick={(e)=>{checkNick(e)}}>submit</button>
        </div>
    )
}

export default WinnerPopUp;