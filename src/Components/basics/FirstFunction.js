import React, { useEffect } from "react";

function FirstFunction(props){
    const {all,color,info,fruits} = props;
    const [favColor, setfavColor] = React.useState("green");
    const [list, setList] = React.useState([]);
    const [count, setcount] = React.useState(0);
    const [arr, setArr] = React.useState(
        {names: "car" , color: "green" ,price: "1500"})
    const changearray = () =>{
        setArr(prevState => ({...prevState, names: "newcar"}))
    }
    const addItem = () => {
        const currencount = "item " + count;
        setList(prevlist => ([...prevlist, currencount]));
        setcount((prevstate) => {return prevstate+1})
    }
    useEffect(() => {
console.log("rendered useeffect");
//      
//setTimeout(()=>{setcount((prevstate) => {return prevstate+1})}, 1000)
        }, [count])
        function limitcount(){
            if(count > 10){
                setcount(1)
            }
        }
return(
    <div>
        <h2>Firstfunction page ishere</h2>
        <p>{all} and color is {color} {info.item1} and {info.item2}</p>
        <p>My favourite color is {favColor}</p>
        <button onClick={(e) => {setfavColor("red")}}>change color</button>
        <p>{arr.names} {arr.color}{arr.price}</p>
        <button onClick={() => changearray()}>change array</button>
        <ul>{list.map((items,ind) => <li>{items}</li>)}</ul>
        <button onClick={() => addItem()}>addItem</button>
        <p>addedItem itemuseeffectis {count}</p>

    </div>
)

}

export default FirstFunction;