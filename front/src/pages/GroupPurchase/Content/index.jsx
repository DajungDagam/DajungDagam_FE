import React, { useState, useEffect } from 'react';
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
    const uploadedImages = tradeData ? tradeData.uploadedImages : [];

    const [gallery, setGallery] = useState(uploadedImages);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [openChatLink, setOpenChatLink] = useState('');
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
    const [totalPrice, setTotalPrice] = useState(0);
    const [pricePerPerson, setPricePerPerson] = useState(0);
    const [combinedPriceText, setCombinedPriceText] = useState("");
    const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] = useState(false);

    useEffect(() => {
        const totalPriceValue = tradeData.price;
        const pricePerPersonValue =
            tradeData.selectedPeople > 0 ? tradeData.price / tradeData.selectedPeople : 0;

        setTotalPrice(totalPriceValue);
        setPricePerPerson(pricePerPersonValue);

        const combinedText = `${totalPriceValue} / ${pricePerPersonValue}`;
        setCombinedPriceText(combinedText);
    }, [tradeData.price, tradeData.selectedPeople]);

    useEffect(() => {
        console.log('Current Index after update:', currentIndex);
    }, [currentIndex]);

    const handleCopyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(tradeData.openChatLink);
            alert('링크가 복사되었습니다.');
        } catch (err) {
            console.error('복사 중 오류 발생:', err);
            alert('링크 복사에 실패했습니다.');
        }
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

    const handleDeleteClick = () => {
        const isConfirmed = window.confirm('게시물을 정말 삭제하시겠습니까?');

        if (isConfirmed) {
            setIsDeleteConfirmationVisible(false);
        }
    };

    return (   
    <div className={styles.pageContainer}>
        <Nav />
        <div className={styles.title}>
            <span className={styles.label2}>{tradeData.title}</span>
        </div>
        <div className={styles.gallery}>
            {gallery.length > 0 && (
            <>
                <img src={gallery[currentIndex]} alt={`Images ${currentIndex + 1}`} />
                {gallery.length > 1 && (
                    <div className={styles.arrows}>
                        <IoIosArrowBack onClick={handlePrevClick} className={styles.arrowIcon} />
                        <IoIosArrowForward onClick={handleNextClick} className={styles.arrowIcon} />
                    </div>
                )}
            </>
            )}
        </div>
        <div className={styles.profile}>
            <CgProfile className={styles.profileimg} />
            <div className={styles.profileInfo}>
                <span className={styles.userName}>{userName}</span>
                <span className={styles.userLocation}>{userLocation}</span>
            </div>
            <div className={styles.profileActions}>
                <FaRegEdit className={styles.editIcon} />
                <RiDeleteBin6Line className={styles.deleteIcon} onClick={handleDeleteClick} />
                {isHeartFilled ? (
                    <FaHeart
                    className={`${styles.heartIcon} ${styles.filledHeart}`}
                    style={{ color: isHeartFilled ? '#e74c3c' : 'inherit' }}
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
                <FaRegCopy className={styles.copyIcon} onClick={handleCopyToClipboard} />
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
                <Text value={combinedPriceText} readOnly />
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
            <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className={styles.selectBar}
            >
                <option value="진행 중">진행 중</option>
                <option value="거래 완료">거래 완료</option>
            </select>
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
