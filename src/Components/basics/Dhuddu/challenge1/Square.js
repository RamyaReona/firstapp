const Square = ({color,textcolor,settextcolor, hexcolor}) =>{
    return(
        <div className="box" style={{backgroundColor: color,
        color: textcolor ? "black" : "white", height: "200px"}}>
            <p>{color}<br/> {hexcolor}</p>
        </div>
    )
}
export default Square;