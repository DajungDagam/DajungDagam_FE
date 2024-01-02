import styles from "./Login.module.css";
import { RiKakaoTalkFill } from "react-icons/ri";

const Login = () => {
return (
    <div className={styles.div}>
    <div className={styles.kakaoIcon}>
        <RiKakaoTalkFill />
    </div>

    <div className={styles.kakao}>Kakao 로그인</div>
    <div className={styles.div2}>
        <span className={styles.span}><strong>다정다감</strong>에 오신것을 환영합니다 !</span>
    </div>
    </div>
);
};

export default Login;
