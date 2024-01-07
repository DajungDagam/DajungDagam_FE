import classes from "./Text.module.css";

function Text(props) {
    return (
        <div className={classes.text}>
            <input
                type="text"
                value={props.value}  // 동적으로 전달받은 값으로 설정
                className={classes.inputBox}
                onChange={(e) => props.onChange(e.target.value)}  // 입력 값이 변경될 때 호출되는 콜백 함수
            />
        </div>
    );
}

export default Text;
