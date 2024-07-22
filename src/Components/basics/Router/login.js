import React from "react";
import { BrowserRouter,Routes, Route, Link, useNavigate} from "react-router-dom";
import HomeRoute from "./HomeRoute.js";
import AboutRoute from "./AboutRoute.js";
import ContactRoute from "./ContactRoute.js";
import Myform from "../Myform.js";

const loginpage = () =>{ 
const {page} = useNavigate();
function clickme(){
page('/Myform');
}
return(<div>
Login page 
<button onClick={clickme}>Click me</button>
</div>
        )
    
}

export default loginpage;