const ListItem = ({item,setitem}) => {
    console.log("itemssssss..", item)
    return(
    <ul>
        {item.map((itms,ind) => 
        <li>{JSON.stringify(itms)}</li>)}
    </ul>)
}
export default ListItem;