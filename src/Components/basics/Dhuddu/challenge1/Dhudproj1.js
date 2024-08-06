import { useState } from "react";
import Square from "./Square";
import Formcomponent from "./Formcomponent";
const Dhudproj1 = () => {
    const [color, setColor] = useState("");
    const [hexcolor, sethexsColor] = useState("");
    const[textcolor, settextcolor] = useState(false);
    console.log("colors", color);
    return(
    <div className="container">
        <Square color={color} setColor={setColor} hexcolor={hexcolor} 
        textcolor={textcolor} settextcolor={settextcolor} />
        <Formcomponent color={color} setColor={setColor} 
        textcolor={textcolor} settextcolor={settextcolor}
        hexcolor={hexcolor} sethexsColor={sethexsColor} />
    </div>
)
}

export default Dhudproj1;