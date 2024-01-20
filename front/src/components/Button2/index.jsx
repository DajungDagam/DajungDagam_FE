// Button2 컴포넌트
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Button2.module.css";

const Button2 = ({ to, label, onClick }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (onClick) {
            onClick(); // 클릭 시 onClick 함수 호출
        }
        
        // 페이지 이동 처리
        navigate(to);
    };

    return (
        <div className={styles.button} onClick={handleButtonClick}>
            {label}
        </div>
    );
};

export default Button2;
