import React, { useState } from "react";

const Result = ({state,checkrandom}) => {
//const [message, setMessage] = useState('');
console.log("state is",state , checkrandom);
let res;
if(state > checkrandom){
    res = "higher"
}
else if(state < checkrandom){
    res= "lower"
}
else if(state === checkrandom){ 
    res = "you aresame"
}
else{
    res = " enter validinput"
}
return(
    <p>you Guessed: {res}</p>)
}

export default Result;