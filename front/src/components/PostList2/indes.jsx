// Card.js
import React, { useState } from 'react';
import styles from './PostList.module.css'; // 모듈 스타일을 불러옴

const Card = () => {
  // 좋아요 및 조회수 상태 관리
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [viewCount, setViewCount] = useState(0);

  // 좋아요 클릭 시 처리
  const handleLikeClick = () => {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    setIsLiked(!isLiked);
  };

  // 조회수 증가 처리 (예를 들면, 컴포넌트가 마운트 될 때 호출)
  const increaseViewCount = () => {
    setViewCount(viewCount + 1);
  };

  return (
    <div className={styles['card-container']}>
      <div className={styles.header}>
        <div className={styles['status-button']}>
          <span>Status</span>
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

        {/* 좋아요 및 조회수 표시 (가로로 배치) */}
        <div className={styles['like-view-container']}>
          <div className={styles['like-button']} onClick={handleLikeClick}>
            {isLiked ? '❤️' : '🤍'} {/* 이모지로 좋아요 표시 */}
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
