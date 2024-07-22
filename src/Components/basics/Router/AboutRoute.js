import React from "react";
import { useParams } from "react-router-dom";


const AboutRoute = () =>{ 
const {id} = useParams();

return(
    <div>
        <p>About Page.</p>
        <p>The id id {id}</p>
    </div>
 )
    
}

export default AboutRoute;