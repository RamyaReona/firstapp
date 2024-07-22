import React, { useEffect, useState } from "react";
import Result from "./Result";


const RandomNumber = () => {
const [state, setState] = useState();
const [message, setMessage] = useState("");
//const[checkrandom,setcheckrandom] = useState(null);
let checkrandom = Math.floor(Math.random() *10 + 1);
const handlechange = (e) => {
    const value = e.target.value;
    setState(e.target.value);
    console.log("checkrandom", checkrandom, value);
}
useEffect(()=>{
    //setcheckrandom(Math.floor(Math.random() *10 + 1));
}, [state])
const guess=()=>{
    const getvalue = parseInt(state, 10);
    if(!isNaN(getvalue) && getvalue > 0 && getvalue < 9){
        console.log("state enters..");
        console.log("state enters..check state > 0 && state < 9", state > 0 && state < 9);
    if(checkrandom == getvalue){
        setMessage("You are right");
        console.log("state enters..check state == checkrandom", checkrandom == state);
    }
    else if(checkrandom > getvalue){
        setMessage("You are lower than randmnumber");
        console.log("state enters..check checkrandom > state", checkrandom > state);
    }    
    else{
        console.log("checkrandom less than state")
        setMessage("You are higher than randmnumber");
    }
}
    else{
        setMessage("please enter avalid value");
    }
    // setMessage('');
    setState('');
}
return(
    <div className="box">
        <h3>Enter a range between 0 and 9 {checkrandom}</h3>
        <input type="text" value={state} onChange={handlechange} />
        {/* <button onClick={guess}>Guess</button>
        <p>You Guessed: {message}</p> */}
         <Result state={state} checkrandom={checkrandom} />
    </div>
)
}

export default RandomNumber;