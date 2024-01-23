//PostList3 (물물교환 게시글)

import React, { useState, useEffect } from 'react';
import styles from './PostList3.module.css';

const Card = () => {
  const [likeCountArray, setLikeCountArray] = useState([]);
  const [viewCountArray, setViewCountArray] = useState([]);
  const [postDataArray, setPostDataArray] = useState([]);

  // 좋아요 클릭 시 처리
  const handleLikeClick = (index) => {
    const updatedLikeCountArray = [...likeCountArray];
    updatedLikeCountArray[index] = !updatedLikeCountArray[index];
    setLikeCountArray(updatedLikeCountArray);
  };

  // API를 통해 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await fetch('https://tave-dgdg.run.goorm.io/trade');
        const data = await response.json();

        const updatedLikeCounts = data.map(post => post.wishlistCount);
        const updatedViewCounts = data.map(post => post.viewCount);
        console.log(response);
        setLikeCountArray(updatedLikeCounts);
        setViewCountArray(updatedViewCounts);
        setPostDataArray(data);
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {postDataArray.map((postData, index) => (
        <div key={index} className={styles['card-container']}>
          <div className={styles.header}>
            <div className={styles['status-button']}>
              <span>Status: {postData.tradeStatus}</span>
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
