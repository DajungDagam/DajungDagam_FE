import { useState } from "react";
import styles from "./NickName.module.css";
import Button2 from '../../../components/Button2';
import { setNickNameAtBack } from "../../../api/apiTester";

// 입력한 별명 서버로 보냄

function sendNickName(nickName) {
    setNickNameAtBack(nickName);
}

const NickName = () => {
    const [nickname, setNickname] = useState(""); // 닉네임을 저장할 상태 추가

    const handleInputChange = (e) => {
        setNickname(e.target.value); // 입력된 닉네임을 상태에 업데이트
    };
    return (
        <div className={styles.div}>
            <span className={styles.span}><strong>다정다감</strong>에 처음 오셨군요 !</span>
            <span className={styles.span2}><strong>닉네임</strong> 먼저 설정해주세요</span>
            <div className={styles.div2}>
                <span className={styles.label}>닉네임</span>
                <input
                    type="text"
                    value={nickname}
                    onChange={handleInputChange}
                    className={styles.input}
                />
            </div>
            <div className={styles.div3}>
            <Button2 label="이전" to="/login" />
            <Button2 label="다음" to="/loginaddr" />

            
            <button onClick={() => sendNickName(nickname)}>닉네임 정보 전송</button>
            </div>
    </div>
    );
};

export default NickName;
