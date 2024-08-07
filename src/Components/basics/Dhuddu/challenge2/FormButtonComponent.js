import ButtonComponent from "./ButtonComponent";

const FormButtonComponent = ({text,settext}) => {
return(
    <form onClick={(e) => e.preventDefault()}> 
        <ButtonComponent text={text} settext={settext} buttonText="users"/>
        <ButtonComponent text={text} settext={settext} buttonText="posts"/>
        <ButtonComponent text={text} settext={settext} buttonText="comments"/>
        </form>
)
}
export default FormButtonComponent;