import React, { useState } from "react";

function Myform(){
    const [input, setinputs] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
       console.log("formvalues..", input)
       if(input != ''){
        alert('Please fill evrything fill')
       }
       else{
        alert('validated...')
       }
//   setinputs((prevstate) => {return {...prevstate, [name]:value }})
    }
    const handlechange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
  setinputs((prevstate) => {return {...prevstate, [name]:value }})
    }
return(
    <form onSubmit={handleSubmit}>
        <label>Enter Name: <input type="text" name="name" onChange={handlechange} /></label><br/>
        <label>Enter Age: <input type="text" name="age" onChange={handlechange} /></label><br/>
        <label>Enter Gmail: <input type="text"name="gmail" onChange={handlechange} /></label><br/>
        <label>Enter Phone: <input type="text" name="phone" onChange={handlechange} /></label><br/>
        <button type="submit">submit</button>
    </form>
)
}

export default Myform;



// <label>Enter Name: <input type="text" onChange={handlechange} /></label>
// <label>Enter Age: <input type="text" onChange={(e) => setinputs((prevState) => {return {...prevState,age : e.target.value}})} /></label>
// <label>Enter Gmail: <input type="text" onChange={(e) => setinputs((prevState) => {return {...prevState , gmail : e.target.value}})} /></label>
// <label>Enter Phone: <input type="text" onChange={(e) => setinputs((prevState) => {return {...prevState, phone : e.target.value}})} /></label>
// <button type="submit">submit</button>