//PostList4 공동구매 게시글

import React, { useState } from 'react';
import styles from './PostList2.module.css';

const Card = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [viewCount, setViewCount] = useState(0);

  // 모집인원 및 현재 참여자 정보를 추가적으로 저장
  const [recruitmentCount, setRecruitmentCount] = useState(10); // 초기 모집인원 설정
  const [currentParticipants, setCurrentParticipants] = useState(5); // 초기 현재 참여자 수 설정

  const handleLikeClick = () => {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    setIsLiked(!isLiked);
  };

  const increaseViewCount = () => {
    setViewCount(viewCount + 1);
  };

  return (
    <div className={styles['card-container']}>
      <div className={styles.header}>
        <div className={styles['status-button']}>
          <span>Status</span>
        </div>
        {/* 모집인원과 현재 참여자 수를 표시하는 부분 */}
        <div className={styles['participant-info']}>
          <span>{currentParticipants}명</span>
          <span>/{recruitmentCount}명</span>
        </div>
      </div>

      <div className={styles['card-image-placeholder']}>
        <img src="원하는_이미지_소스" alt="Card Image" />
      </div>

      <div className={styles.content}>
        <div className={styles.title}>title입니다.</div>
        <div className={styles.subtitle}>content입니다.</div>
      </div>

      <div className={styles.footer}>
        <div className={styles['user-info']}>
          <div className={styles['user-image']}>
            <img src="your_user_image_url" alt="User Image" />
          </div>
          <span>name</span>
        </div>

        <div className={styles['like-view-container']}>
          <div className={styles['like-button']} onClick={handleLikeClick}>
            {isLiked ? '❤️' : '🤍'}
            <span>찜하기 {likeCount}</span>
          </div>
          <div className={styles['view-count']}>
            <span>조회수 {viewCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
