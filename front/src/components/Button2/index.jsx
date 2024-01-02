import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Button2.module.css";

const Button2 = ({ to, label }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(to); // 클릭 시 페이지 이동
    };

    return (
        <div className={styles.button} onClick={handleButtonClick}>
            {label}
        </div>
    );
};

export default Button2;
