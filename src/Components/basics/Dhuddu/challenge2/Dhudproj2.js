import { useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import FormButtonComponent from "./FormButtonComponent";
import ListItem from "./ListItem";

const Dhudropj2 = () => {
    const[item,setitem] = useState([]);
    const[text, settext] = useState("users");
    let url= `https://jsonplaceholder.typicode.com/${text}`
    useEffect(() => {
        const fetitems = async () => {
           let urlset =  await fetch(url);
           const data = await urlset.json()
         setitem(data);
        }
        fetitems();
        }, [text])
    return(<>
    <FormButtonComponent text={text} settext={settext} />
    <ListItem item={item} setitem={setitem}/>
    </>)
}

export default Dhudropj2;