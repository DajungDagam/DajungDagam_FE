import classes from "./Button.module.css";

function Button (props) {
    return (
        <div>
            <button type={props?.type} 
            className={`${classes.button} ${props.btn}`} 
            onClick={props.onClick}>
                <div className={classes.font}>{props.title}</div>
            </button>
        </div>
    )
}

export default Button;