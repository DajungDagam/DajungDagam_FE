import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../../../components/Nav';
import Styles from './Writing.module.css';
import Button from '../../../components/Button';
import { TbCameraPlus } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function GroupWriting() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [recruitmentPeriod, setRecruitmentPeriod] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);
    const navigate = useNavigate();

    const handleRecruitmentPeriodChange = (event) => {
        setRecruitmentPeriod(event.target.value);
    };
    
    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    const handleDescriptionChange = (event) => {
    setProductDescription(event.target.value);
    };

    const handleWritingComplete = () => {
        navigate('/groupcontent', { from: 'GroupWriting' });
    };

    const handlePhotoChange = async (event) => {
        const file = event.target.files[0];
    
        if (file) {
            try {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const img = new Image();
                    img.src = reader.result;
    
                    img.onload = () => {
                        const originalImageUrl = reader.result;
    
                        // 업로드된 이미지 배열에 추가
                        setUploadedImages([...uploadedImages, originalImageUrl]);
    
                        // 선택한 이미지를 현재 표시 이미지로 설정
                        setSelectedImage(originalImageUrl);
                    };
                };
    
                reader.readAsDataURL(file);
            } catch (error) {
                console.error('Error reading image:', error);
            }
        }
    };

    const handlePhotoClick = () => {
        if (uploadedImages.length >= 5) {
            alert('사진은 최대 5개까지 업로드 가능합니다.');
        } else {
            document.getElementById('fileInput').click();
        }
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const categories = [
        '미개봉 가공음식',
        '가전용품',
        '도서',
        '생필품',
        '옷',
        '기타',
    ];
    
    const [selectedCategory, setSelectedCategory] = useState('');
    
    const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    };

    return (   
        <div className={Styles.pageContainer}>
            <Nav />
            <div className={Styles.photo} onClick={handlePhotoClick}>
                <TbCameraPlus />
                <span>{uploadedImages.length}/5</span>
            </div>
            <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handlePhotoChange}
            />
                <div className={Styles.upload}>
                    {uploadedImages.map((image, index) => (
                        <img key={index} src={image} alt={`Uploaded ${index + 1}`} />
                    ))}
                </div>
            <div className={Styles.title}>
                <input 
                    type='text'
                    placeholder='제목'
                    value={title}
                    onChange={handleTitleChange}
                />
            </div>
            <div className={Styles.category}>
                <span className={Styles.label}>카테고리 선택</span>
                <div className={Styles.categoryList}>
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`${Styles.categoryItem} ${selectedCategory === category ? Styles.selectedCategory : ''}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </div>
                        ))}
                </div>
            </div>
            <div className={Styles.price}>
                <input 
                    type='text'
                    placeholder='가격'
                    value={price}
                    onChange={handlePriceChange}
                />
            </div>
            <div className={Styles.description}>
                <textarea
                    placeholder="상품에 대해 자세히 설명해주세요. (상품명, 구매 시기, 상품 상태 등)"
                    value={productDescription}
                    onChange={handleDescriptionChange}
                />
            </div>
            <div className={Styles.selectGu}>
                <span className={Styles.label}>거래 희망 구 선택</span>
            </div>
            <div className={Styles.period}>
                <span className={Styles.label}>모집 기간</span>
                <div className={Styles.recruitment}>
                    <span
                        className={Styles.datePlaceholder}
                        onClick={toggleCalendar}
                    >
                        {recruitmentPeriod ? recruitmentPeriod : '캘린더에서 선택'}
                    </span>
                    <FaCalendarAlt onClick={toggleCalendar} />
                    {showCalendar && (
                        <Calendar onChange={(date) => setRecruitmentPeriod(date.toDateString())} />
                    )}
                </div>
            </div>
            <div className={Styles.button}>
            <Button 
                type="button"
                title="작성완료"
                onClick={handleWritingComplete}
            />
            <br /><br /><br /><br /><br />
            </div>
        </div>
    );
}

export default GroupWriting;
