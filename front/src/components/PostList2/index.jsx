//공동구매 인기글

import React, { useState, useEffect } from 'react';
import styles from './PostList2.module.css';

const Card = () => {
  const [likeCountArray, setLikeCountArray] = useState([]);
  const [viewCountArray, setViewCountArray] = useState([]);
  const [postDataArray, setPostDataArray] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        const response = await fetch('https://tave-dgdg.run.goorm.io/group-buying/like-posts', { signal });
        const data = await response.json();

        const updatedLikeCounts = data.map(post => post.wishlistCount);
        const updatedViewCounts = data.map(post => post.viewCount);

        setLikeCountArray(updatedLikeCounts);
        setViewCountArray(updatedViewCounts);
        setPostDataArray(data);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted: Component unmounted.');
        } else {
          console.error('Error fetching post data:', error);
        }
      }
    };

    fetchData();

    // 컴포넌트가 언마운트될 때 비동기 작업 취소
    return () => abortController.abort();
  }, []);

  const handleLikeClick = (index) => {
    const updatedLikeCountArray = [...likeCountArray];
    updatedLikeCountArray[index] = !updatedLikeCountArray[index];
    setLikeCountArray(updatedLikeCountArray);
  };

  return (
    <div>
      {postDataArray.map((postData, index) => (
        <div key={index} className={styles['card-container']}>
          <div className={styles.header}>
            <div className={styles['status-button']}>
              <span>Status: {postData.tradeStatus}</span>
            </div>
  
            <div className={styles['participant-info']}>
              <span>{postData.personCount}명</span>
              <span>/{postData.PersonCurrCount}명</span>
            </div>
          </div>
  
          <div className={styles['card-image-placeholder']}>
            <img src="원하는_이미지_소스" alt="Card Image" />
          </div>
  
          <div className={styles.content}>
            <div className={styles.title}>{postData.title}</div>
            <div className={styles.subtitle}>{postData.content}</div>
          </div>
  
          <div className={styles.footer}>
            <div className={styles['user-info']}>
              <div className={styles['user-image']}>
                <img src="your_user_image_url" alt="User Image" />
              </div>
              <span>{postData.userName}</span>
            </div>
  
            <div className={styles['like-view-container']}>
              <div className={styles['like-button']} onClick={() => handleLikeClick(index)}>
                {likeCountArray[index] ? '❤️' : '🤍'}
                <span>찜하기 {likeCountArray[index]}</span>
              </div>
              <div className={styles['view-count']}>
                <span>조회수 {viewCountArray[index]}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
