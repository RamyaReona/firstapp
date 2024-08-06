const ButtonComponent = ({handlebuttonData}) => {
    const clickedone = (e) => {
            console.log("buttoncompinent e,", e.target.value)
    }
    return(
    <div>
    <button onClick={clickedone}>Users</button>
    <button  onClick={clickedone}>Posts</button>
    <button  onClick={clickedone}>Comments</button>
    </div>)
}

export default ButtonComponent;