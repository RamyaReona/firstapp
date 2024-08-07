const ButtonComponent = ({buttonText, text, settext}) => {
return(<button className={text == buttonText ? "bgcolor" : null} onClick={() => settext(buttonText)}>{buttonText}</button>)
}

export default ButtonComponent;