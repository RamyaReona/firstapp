import colornames from 'colornames';

const Formcomponent = ({color,setColor,sethexsColor, textcolor, settextcolor}) => {
   return( <form onSubmit={(e)=> e.preventDefault()}>
            <input type="text" value={color} onChange={(e) => {setColor(e.target.value)
            sethexsColor(colornames(e.target.value))}} />
        <button type="button" onClick={() => {settextcolor(!textcolor)}
        }>toggle text color</button>

    </form>)
}
export default Formcomponent;