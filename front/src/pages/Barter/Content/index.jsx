import React, { useState } from 'react';
import Nav from '../../../components/Nav';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";
import Text from '../../../components/Text';
import styles from "./Content.module.css";

function BarterContent() {
    const [open, setOpen] = useState("https://example.com");  
    const [period, setPeriod] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [state, setState] = useState("");
    //const [title, setTitle] = useState("");

    const handleCopyOpen = () => {
        navigator.clipboard.writeText(open);
        alert("링크가 복사되었습니다.");
    };

    return (   
    <div className={styles.pageContainer}>
        <Nav />
        <IoMdArrowRoundBack className={styles.back}/>
        <div className={styles.title}>
            <span className={styles.label2}>전신거울 필요하신 분</span>
        </div>
        <div className={styles.photo}></div>
        <div className={styles.profile}></div>
        <div className={styles.open}>
            <div className={styles.labelContainer}>
                <span className={styles.label}>오픈채팅 링크</span>
                <Text value={open} onChange={(value) => setOpen(value)} /> 
                <FaRegCopy className={styles.copyIcon} onClick={handleCopyOpen} />
            </div>
        </div>
        <div className={styles.period}>
            <div className={styles.labelContainer}>
                <span className={styles.label}>시작일~마감일</span>
                <Text value={period} onChange={(value) => setPeriod(value)} />
            </div>
        </div>
        <div className={styles.description}>
            <div className={styles.labelContainer}>
                <span className={styles.label}>상품 설명</span>
                <textarea
                    placeholder='상품 설명 내용'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={styles.textarea}
                />
            </div>
        </div>
        <div className={styles.location}>
            <div className={styles.labelContainer}>
                <span className={styles.label}>거래 장소</span>
                <Text value={location} onChange={(value) => setLocation(value)} />
            </div>
        </div>
        <div className={styles.state}>
            <div className={styles.labelContainer}>
                <span className={styles.label}>거래 상태</span>
                <Text value={state} onChange={(value) => setState(value)} />
            </div>
        </div>
    </div>
    );
}

export default BarterContent;
