import "./Button.css"

const Button = (props) => {
    return (
        <button className="button" onClick={props.handleClick}>
            {props.label}
        </button>
    )

}

export default Button