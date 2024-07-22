import React, { useEffect, useState } from "react";
import loginpage from "../Router/login";


const Signin  = () =>{
    const [email, setemail] = useState('');   
    const [pwd, setpwd] = useState('');  
    const[message,setmessage] = useState('')
   
    const SignIn = (e) => {
        e.preventDefault();
        alert("signedin..");
        setmessage('loading....')
        if( email && pwd){
            setTimeout(()=>{            
                setmessage('loginsucessfully....');
            }, 1000)
        }
        else{
            setTimeout(()=>{            
                setmessage('login failed....');
            }, 1000)
        }
    }
 return(
    <div>
        <h2>Login</h2>
        <form>
            <input type="text" placeholder="email" value={email} onChange={(e)=> setemail(e.target.value)} />
            <input type="text" placeholder="pwd" value={pwd} onChange={(e)=> setpwd(e.target.value)} />
            <button onClick={SignIn}>Sign In</button>
            <p>{message}</p>
        </form>        
        </div>)
 
}
export default Signin;