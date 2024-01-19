import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Nav from '../../../components/Nav';
import { IoMdArrowRoundBack } from "react-icons/io";
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

function BarterContent() {
    const location = useLocation();
    const navigate = useNavigate();
    
    const [gallery, setGallery] = useState(["rabbit1.png", "rabbit2.png", "rabbit3.png", "girl.png"]);  
    const [currentIndex, setCurrentIndex] = useState(0);
    const [open, setOpen] = useState("https://example.com");  
    const [period, setPeriod] = useState("");
    const [description, setDescription] = useState("");
    const [dealLocation, setDealLocation] = useState("");
    const [state, setState] = useState("");
    const [profileImage, setProfileImage] = useState("profile.png");
    const [userName, setUserName] = useState("토깽이");
    const [userLocation, setUserLocation] = useState("성북구 종암동");
    const [isHeartFilled, setIsHeartFilled] = useState(false);

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

    return (   
    <div className={styles.pageContainer}>
        <Nav />
        {/* <IoMdArrowRoundBack className={styles.back}/> */}
        <div className={styles.title}>
            <span className={styles.label2}>전신거울 필요하신 분</span>
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
                <Text value={dealLocation} onChange={(value) => setDealLocation(value)} />
            </div>
        </div>
        <div className={styles.state}>
            <div className={styles.labelContainer}>
                <span className={styles.label}>거래 상태</span>
                <Text value={state} onChange={(value) => setState(value)} />
            </div>
        </div>
        <br/><br/>
    </div>
    );
}

export default BarterContent;
