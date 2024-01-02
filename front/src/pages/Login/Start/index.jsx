import styles from "./Start.module.css";
import Button2 from "../../../components/Button2";
import characterImage from "../../../assets/girl.png";

const Start = () => {
return (
    <div className={styles.div}>
    <div className={styles.leftContent}>
        <img src={characterImage} alt="캐릭터" className={styles.characterImage} />
        <div className={styles.textContent}>
            <span className={styles.span}>가입을 축하합니다 !</span>
            <span className={styles.span1}><strong>다정다감</strong>에서 추억을 쌓아보세요 !</span>
            {/* <span className={styles.span}>
                가입을 축하합니다 !<br /><br />
                <strong>다정다감</strong>에서 추억을 쌓아보세요 !</span> */}
        </div>
    </div>
        <div className={styles.div3}>
            <Button2 label="이전" to="/loginaddr" />
            <Button2 label="시작" to="/" />
            </div>
    </div>
);
};

export default Start;
