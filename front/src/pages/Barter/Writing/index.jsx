import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../../../components/Nav';
import Styles from './Writing.module.css';
import Button from '../../../components/Button';
import { TbCameraPlus } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { sendTradePost } from '../../../api/apiTester';
import moment from 'moment';

function BarterWriting() {
    const allGus = [
        "강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구",
        "노원구", "동대문구", "도봉구", "동작구", "마포구", "서대문구", "성동구", "성북구",
        "서초구", "송파구", "영등포구", "용산구", "양천구", "은평구", "종로구", "중구", "중랑구", 
        ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [title, setTitle] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [recruitmentPeriod, setRecruitmentPeriod] = useState('');
    const [selectedGu, setSelectedGu] = useState(allGus[0]);
    const [selectedDong, setSelectedDong] = useState("");
    const [showCalendar, setShowCalendar] = useState(false);
    const [openChatLink, setOpenChatLink] = useState('');

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
        sendTradePost(uploadedImages, title, productDescription, recruitmentPeriod, showCalendar, selectedGu, selectedDong, openChatLink, selectedCategory);

        navigate('/bartercontent', { from: 'BarterWriting' });
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
                        console.log(selectedImage);
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

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const categories = [
        '디지털기기',
    '가구/인테리어',
    '여성의류',
    '여성잡화',
    '남성의류',
    '남성잡화',
    '생활가전',
    '생활/주방',
    '가공식품',
    '스포츠/레저',
    '취미/게임/음반',
    '뷰티/미용',
    '식물',
    '반려동물용품',
    '티켓/교환권',
    '도서',
    '기타 물품'
    ];
    
    const [selectedCategory, setSelectedCategory] = useState('');
    
    const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    };

    const handleGuChange = (e) => {
        const selectedGuValue = e.target.value;
        setSelectedGu(selectedGuValue);
    };
    
    const handleDongChange = (e) => {
        const selectedDongValue = e.target.value;
        setSelectedDong(selectedDongValue);
    };

    const getDongsForSelectedGu = (selectedGu) => {
        switch (selectedGu) {
            case "강남구":
                return [
                    "신사동", "논현제1동", "논현제2동", "압구정동", "청담동", "삼성제1동",
                    "삼성제2동", "대치제1동", "대치제2동", "대치제4동", "역삼제1동", "역삼제2동",
                    "도곡제1동", "도곡제2동", "개포제1동", "개포제2동", "개포제4동", "일원본동",
                    "일원제1동", "일원제2동", "수서동", "세곡동",
                ];
            case "강동구":
                return [
                    "강일동", "상일1동", "상일2동", "명일제1동", "명일제2동", "고덕제1동",
                    "고덕제2동", "암사제1동", "암사제2동", "암사제3동", "천호제1동", "천호제2동",
                    "천호제3동", "성내제1동", "성내제2동", "성내제3동", "길동", "둔촌제1동", "둔촌제2동"
                ];
            case "강북구":
                return [
                    "삼양동", "미아동", "송중동", "송천동", "삼각산동", 
                    "번제1동", "번제2동", "번제3동", "수유제1동", "수유제2동", 
                    "수유제3동", "우이동", "인수동"
                ];
            case "강서구":
                return [
                    "염창동", "등촌제1동", "등촌제2동", "등촌제3동", "화곡본동",
                    "화곡제1동", "화곡제2동", "화곡제3동", "화곡제4동", "화곡제6동",
                    "화곡제8동", "우장산동", "가양제1동", "가양제2동", "가양제3동",
                    "발산제1동", "공항동", "방화제1동", "방화제2동", "방화제3동"
                ];
            case "관악구":
                return [
                    "은천동", "성현동", "청룡동", "보라매동", "청림동",
                    "행운동", "낙성대동", "중앙동", "인헌동", "남현동",
                    "서원동", "신원동", "서림동", "난곡동", "신사동",
                    "신림동", "삼성동", "난향동", "조원동", "대학동", "미성동"
                ];
            case "광진구":
                return [
                    "중곡제1동", "중곡제2동", "중곡제3동", "중곡제4동", "능동",
                    "구의제1동", "구의제2동", "구의제3동", "광장동", "자양제1동",
                    "자양제2동", "자양제3동", "자양제4동", "화양동", "군자동"
                ];
            case "구로구":
                return [
                    "신도림동", "구로제1동", "구로제2동", "구로제3동", "구로제4동",
                    "구로제5동", "가리봉동", "고척제1동", "고척제2동", "개봉제1동",
                    "개봉제2동", "개봉제3동", "오류제1동", "오류제2동", "항동", "수궁동"
                ];
            case "금천구":
                return [
                    "가산동", "독산제1동", "독산제2동", "독산제3동", "독산제4동",
                    "시흥제1동", "시흥제2동", "시흥제3동", "시흥제4동", "시흥제5동"
                ];
            case "노원구":
                return [
                    "월계제1동", "월계제2동", "월계제3동", "공릉제1,3동", "공릉제2동",
                    "하계제1동", "하계제2동", "중계본동", "중계제1동", "중계제2,3동",
                    "중계제4동", "상계제1동", "상계제2동", "상계제3,4동", "상계제5동",
                    "상계제6,7동", "상계제8동", "상계제9동", "상계제10동"
                ];
            case "도봉구":
                return [
                    "쌍문제1동", "쌍문제2동", "쌍문제3동", "쌍문제4동", "방학제1동",
                    "방학제2동", "방학제3동", "창제1동", "창제2동", "창제3동",
                    "창제4동", "창제5동", "도봉제1동", "도봉제2동"
                ];
            case "동대문구":
                return [
                    "용신동", "제기동", "전농제1동", "전농제2동", "답십리제1동",
                    "답십리제2동", "장안제1동", "장안제2동", "청량리동", "회기동",
                    "휘경제1동", "휘경제2동", "이문제1동", "이문제2동"
                ];            
            case "동작구":
                return [
                    "노량진제1동", "노량진제2동", "상도제1동", "상도제2동", "상도제3동",
                    "상도제4동", "흑석동", "사당제1동", "사당제2동", "사당제3동",
                    "사당제4동", "사당제5동", "대방동", "신대방제1동", "신대방제2동"
                ]; 
            case "마포구":
                return [
                    "아현동", "공덕동", "도화동", "용강동", "대흥동", "염리동", "신수동",
                    "서강동", "서교동", "합정동", "망원제1동", "망원제2동", "연남동", "성산제1동",
                    "성산제2동", "상암동"
                ];
            case "서대문구":
                return [
                    "충현동", "천연동", "북아현동", "신촌동", "연희동", "홍제제1동", "홍제제2동",
                    "홍제제3동", "홍은제1동", "홍은제2동", "남가좌제1동", "남가좌제2동", "북가좌제1동", "북가좌제2동"
                ];
            case "서초구":
                return [
                    "서초제1동", "서초제2동", "서초제3동", "서초제4동", "잠원동", "반포본동", "반포제1동",
                    "반포제2동", "반포제3동", "반포제4동", "방배본동", "방배제1동", "방배제2동", "방배제3동",
                    "방배제4동", "양재제1동", "양재제2동", "내곡동"
                ];
            case "성동구":
                return [
                    "왕십리제2동", "왕십리도선동", "마장동", "사근동", "행당제1동", "행당제2동", "응봉동",
                    "금호1가동", "금호2,3가동", "금호4동", "옥수동", "성수1가제1동", "성수1가제2동", "성수2가제1동",
                    "성수2가제2동", "송정동", "용답동"
                ];
            case "성북구":
                return [
                    "성북동", "삼선동", "동선동", "돈암제1동", "돈암제2동", "안암동", "보문동", "정릉제1동",
                    "정릉제2동", "정릉제3동", "정릉제4동", "길음제1동", "길음제2동", "종암동", "월곡제1동",
                    "월곡제2동", "장위제1동", "장위제2동", "장위제3동", "석관동"
                ];
            case "송파구":
                return [
                    "풍납제1동", "풍납제2동", "거여제1동", "거여제2동", "마천제1동", "마천제2동", "방이제1동",
                    "방이제2동", "오륜동", "오금동", "송파제1동", "송파제2동", "석촌동", "삼전동", "가락본동",
                    "가락제1동", "가락제2동", "문정제1동", "문정제2동", "장지동", "위례동", "잠실본동", "잠실제2동",
                    "잠실제3동", "잠실제4동", "잠실제6동", "잠실제7동"
                ];
            case "양천구":
                return [
                    "목제1동", "목제2동", "목제3동", "목제4동", "목제5동", "신월제1동", "신월제2동", "신월제3동",
                    "신월제4동", "신월제5동", "신월제6동", "신월제7동", "신정제1동", "신정제2동", "신정제3동", "신정제4동",
                    "신정제6동", "신정제7동"
                ];
            case "영등포구":
                return [
                    "영등포본동", "영등포동", "여의동", "당산제1동", "당산제2동", "도림동", "문래동", "양평제1동",
                    "양평제2동", "신길제1동", "신길제3동", "신길제4동", "신길제5동", "신길제6동", "신길제7동", "대림제1동",
                    "대림제2동", "대림제3동"
                ];
            case "용산구":
                return [
                    "후암동", "용산2가동", "남영동", "청파동", "원효로제1동", "원효로제2동", "효창동", "용문동",
                    "한강로동", "이촌제1동", "이촌제2동", "이태원제1동", "이태원제2동", "한남동", "서빙고동", "보광동"
                ];
            case "은평구":
                return [
                    "녹번동", "불광제1동", "불광제2동", "갈현제1동", "갈현제2동", "구산동", "대조동", "응암제1동",
                    "응암제2동", "응암제3동", "역촌동", "신사제1동", "신사제2동", "증산동", "수색동", "진관동"
                ];             
            case "종로구":
                return [
                    "청운효자동", "사직동", "삼청동", "부암동", "평창동", "무악동", "교남동", "가회동", "종로1,2,3,4가동",
                    "종로5,6가동", "이화동", "혜화동", "창신제1동", "창신제2동", "창신제3동", "숭인제1동", "숭인제2동"
                ];          
            case "중구":
                return [
                    "소공동", "회현동", "명동", "필동", "장충동", "광희동", "을지로동", "신당동", "다산동", "약수동",
                    "청구동", "신당5동", "동화동", "황학동", "중림동"
                ];
            case "중랑구":
                return [
                    "면목본동", "면목제2동", "면목제3,8동", "면목제4동", "면목제5동", "면목제7동", "상봉제1동", "상봉제2동",
                    "중화제1동", "중화제2동", "묵제1동", "묵제2동", "망우본동", "망우제3동", "신내제1동", "신내제2동"
                ];
            default:
                return ["서울시 동 선택"];
            }
        };

    const handleOpenChatLinkChange = (event) => {
        setOpenChatLink(event.target.value);
    };

    const handleCopyToClipboard = async () => {
        const input = document.getElementById('openChat');
        if (input) {
            input.select();
            document.execCommand('copy');
        }
        try {
            await navigator.clipboard.writeText(openChatLink);
            alert('링크가 복사되었습니다.');
        } catch (err) {
            console.error('복사 중 오류 발생:', err);
            alert('링크 복사에 실패했습니다.');
        }
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
            <div className={Styles.description}>
                <textarea
                    placeholder="상품에 대해 자세히 설명해주세요. (상품명, 구매 시기, 상품 상태 등)"
                    value={productDescription}
                    onChange={handleDescriptionChange}
                />
            </div>

            <div className={Styles.location}>
            <span className={Styles.label}>거래 희망 장소 선택</span>
            <table>
                <thead>
                    <tr className={Styles.selectBox}>
                        <td className={Styles.label}>구 선택</td>
                        <td className={Styles.label}>동 선택</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={Styles.leftDistrict}>
                            <select
                                id="guSelect"
                                value={selectedGu}
                                onChange={handleGuChange}
                                className={Styles.select}
                            >
                                <option value="" disabled>서울시 구 선택</option>
                                {allGus.map((gu) => (
                                    <option key={gu} value={gu}>
                                        {gu}
                                    </option>
                                ))}
                                </select>
                            </div>
                        </td>
                        <td>
                            <div className={Styles.rightDistrict}>
                            <select
                                id="dongSelect"
                                value={selectedDong}
                                onChange={handleDongChange}
                                className={Styles.select}
                            >
                                <option value="" disabled>서울시 동 선택</option>
                                {getDongsForSelectedGu(selectedGu).map((dong) => (
                                <option key={dong} value={dong}>
                                    {dong}
                                </option>
                                ))}
                            </select>
                        </div>
                        </td>
                    </tr>
                </tbody>
            </table>
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
                    {/* {showCalendar && (
                        <Calendar onChange={(date) => setRecruitmentPeriod(date.toDateString())}  />
                    )} */}

                        {showCalendar && (
                        <Calendar onChange={(date) => setRecruitmentPeriod(moment(date).format('yyyy-MM-DD'))}  />
                         )}
                </div>
            </div>
            <div className={Styles.link}>
                <span className={Styles.label}>오픈 채팅 링크</span>
                <div className={Styles.copyContainer}>
                    <input
                        type="text"
                        id="openChat"
                        value={openChatLink}
                        onChange={handleOpenChatLinkChange}
                    />
                    <FaRegCopy className={Styles.copyIcon} onClick={handleCopyToClipboard} />
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

export default BarterWriting;
