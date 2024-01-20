import React from "react";
import styles from "./Login.module.css";
import { RiKakaoTalkFill } from "react-icons/ri";
import { loginSocialKakao } from "../../../api/AuthenticationService";

const Login = () => {
  function socialLoginKakao() {
    loginSocialKakao();
  }

  return (
    <div className={styles.div}>
      {/* 카카오톡 로고를 클릭할 수 있는 버튼으로 감싸기 */}
      <div className={styles.kakaoIcon}>
        <button onClick={socialLoginKakao} className={styles.kakaoButton}>
          <RiKakaoTalkFill />
        </button>
      </div>

      <div className={styles.kakao}>Kakao 로그인</div>
      <div className={styles.div2}>
        <span className={styles.span}><strong>다정다감</strong>에 오신 것을 환영합니다!</span>
      </div>
    </div>
  );
};

export default Login;
