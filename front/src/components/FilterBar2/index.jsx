// NavigationBar.js

import React from 'react';
import styles from './FilterBar2.module.css'; // CSS 모듈을 import

const NavigationBar = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.nav}>
        <li><a href="#">게시글</a></li>
        <li><a href="#">찜목록</a></li>
      </ul>
    </div>
  );
};

export default NavigationBar;
