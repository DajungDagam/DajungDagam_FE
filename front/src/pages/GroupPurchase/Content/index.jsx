import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../../../components/Nav';
import { FaRegCopy } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Text from '../../../components/Text';
import styles from "./Content.module.css";

function GroupContent() {
    const location = useLocation();
    const tradeData = location.state;

    const [gallery, setGallery] = useState(["rabbit1.png", "rabbit2.png", "rabbit3.png", "girl.png"]);  
    const [currentIndex, setCurrentIndex] = useState(0);
    const [open, setOpen] = useState("https://example.com");  
    const [period, setPeriod] = useState("");
    const [description, setDescription] = useState("");
    const [people, setPeople] = useState("");
    const [price, setPrice] = useState("");
    const [state, setState] = useState("");
    const [profileImage, setProfileImage] = useState("profile.png");
    const [userName, setUserName] = useState("토깽이");
    const [userLocation, setUserLocation] = useState("성북구 종암동");
    const [isHeartFilled, setIsHeartFilled] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    //const [title, setTitle] = useState("");

    const handleCopyOpen = () => {
        navigator.clipboard.writeText(open);
        alert("링크가 복사되었습니다.");
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    };
    
    const handleHeartClick = () => {
        setIsHeartFilled((prev) => !prev);
    };

    const handleJoinClick = () => {
        setIsClicked((prev) => !prev);
    };

    return (   
    <div className={styles.pageContainer}>
        <Nav />
        <div className={styles.title}>
            <span className={styles.label2}>{tradeData.title}</span>
        </div>
        <div className={styles.gallery}>
        <img src={require(`../../../assets/${gallery[currentIndex]}`)} alt={`Image ${currentIndex + 1}`} />
            <div className={styles.arrows}>
                <IoIosArrowBack onClick={handlePrevClick} className={styles.arrowIcon} />
                <IoIosArrowForward onClick={handleNextClick} className={styles.arrowIcon} />
            </div>
        </div>
        <div className={styles.profile}>
            <CgProfile className={styles.profileimg} />
            <div className={styles.profileInfo}>
                <span className={styles.userName}>{userName}</span>
                <span className={styles.userLocation}>{userLocation}</span>
            </div>
            <div className={styles.profileActions}>
                <FaRegEdit className={styles.editIcon} />
                <RiDeleteBin6Line className={styles.deleteIcon} />
                {isHeartFilled ? (
                <FaHeart
                    className={`${styles.heartIcon} ${styles.filledHeart}`}
                    onClick={handleHeartClick}
                />
                ) : (
                <FaRegHeart
                    className={`${styles.heartIcon}`}
                    onClick={handleHeartClick}
                />
            )}
            </div>
        </div>        
        <div className={styles.open}>
            <div className={styles.labelContainer}>
                <span className={styles.label}>오픈채팅 링크</span>
                <Text value={tradeData.openChatLink} readOnly /> 
                <FaRegCopy className={styles.copyIcon} onClick={handleCopyOpen} />
            </div>
        </div>
        <div className={styles.period}>
            <div className={styles.labelContainer}>
                <span className={styles.label}>시작일~마감일</span>
                <Text value={tradeData.recruitmentPeriod} readOnly />
            </div>
        </div>
        <div className={styles.people}>
            <div className={styles.labelContainer}>
                <span className={styles.label}>모집인원</span>
                <Text value={tradeData.selectedPeople.toString()} readOnly />
            </div>
        </div>
        <div className={styles.price}>
            <div className={styles.labelContainer}>
                <span className={styles.label}>가격/인당 가격</span>
                <Text value={tradeData.price} readOnly />
            </div>
        </div>
        <div className={styles.description}>
            <div className={styles.labelContainer}>
                <span className={styles.label}>상품 설명</span>
                <textarea
                    value={tradeData.productDescription}
                    readOnly
                />
            </div>
        </div>
        <div className={styles.location}>
            <div className={styles.labelContainer}>
                <span className={styles.label}>거래 장소</span>
                <Text value={`${tradeData.selectedGu} ${tradeData.selectedDong}`} readOnly />
            </div>
        </div>
        <div className={styles.state}>
            <div className={styles.labelContainer}>
                <span className={styles.label}>거래 상태</span>
                <Text value={state} onChange={(value) => setState(value)} />
            </div>
        </div>
        <div className={styles.button}>
            <button
                className={`${styles.joinButton} ${isClicked ? styles.clickedButton : ""}`}
                onClick={handleJoinClick}
            >
                참여하기
            </button>
        </div>
        <br /><br/><br/>
    </div>
    );
}

export default GroupContent;
