// Card.js
import React from 'react';
import styles from './PostList.module.css'; // 모듈 스타일을 불러옴

const Card = () => {
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
        <span>❤️ 100</span>
        <span>👀 500</span>
        <span>💬 20</span>
      </div>
    </div>
  );
};

export default Card;
