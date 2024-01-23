import React from 'react';
import styles from './CardList.module.css'; // Importing styles as an object



const PostItem = ({ status, category, title, date } = JSON.parse()) => (
  <div className={styles['post-item']}>
    <div className={styles['status']}>{status}</div>
    <div className={styles['category']}>{category}</div>
    <div className={styles['title']}>{title}</div>
    <div className={styles['date']}>{date}</div>
  </div>
);

const App = () => (
  <div className={styles['post-container']}>
    <div className={styles['header']}>
      <div className={styles['status1']}>모집상태</div>
      <div className={styles['category']}>카테고리</div>
      <div className={styles['title']}>제목</div>
      <div className={styles['date']}>게시일</div>
    </div>

    <PostItem status="진행 중" category="IT" title="챗봇 개발자 모집" date="2023.01.05" />
    <PostItem status="진행 중" category="IT" title="챗봇 개발자 모집" date="2023.01.05" />
    <PostItem status="진행 중" category="IT" title="챗봇 개발자 모집" date="2023.01.05" />
    <PostItem status="진행 중" category="IT" title="챗봇 개발자 모집" date="2023.01.05" />
    <PostItem status="진행 중" category="IT" title="챗봇 개발자 모집" date="2023.01.05" />
    <PostItem status="진행 중" category="IT" title="챗봇 개발자 모집" date="2023.01.05" />
    <PostItem status="진행 중" category="IT" title="챗봇 개발자 모집" date="2023.01.05" />
  </div>
);

export default App;
