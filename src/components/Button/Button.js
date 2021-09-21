import "./Button.css"

const Button = (props) => {
    return (
        <button className="button" onClick={props.handleClick}  value={props.label}>
            {props.label}
        </button>
    )

}

export default Button