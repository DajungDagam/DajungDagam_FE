import React from 'react';
import styles from './FilterBar1.module.css';

const NavigationBar = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.nav}>
        <li><a href="#">지역선택</a></li>
        <li><a href="#">카테고리</a></li>
        <li><a href="#">진행상태</a></li>
      </ul>

      <div className={styles.searchArea}>
        <form>
          <input type="search" placeholder="제목, 글 내용을 검색해보세요." />
          <span>검색</span>
        </form>
      </div>
    </div>
  );
};

export default NavigationBar;
