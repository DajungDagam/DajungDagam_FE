// NavigationBar.js

import React, { useState } from 'react';
import styles from './FilterBar2.module.css'; // CSS 모듈을 import

var filterNum = 0;

export const getFilterNum = () => {
  return filterNum;
}

const NavigationBar = () => {
  
  function changeFilter(num) {
    if(filterNum!=num)
      filterNum = num;
  }

  return (
    <div className={styles.header}>
      <ul className={styles.nav}>
        <li><a href="#" onClick={changeFilter(0)}>게시글</a></li>
        <li><a href="#" onClick={changeFilter(1)}>찜목록</a></li>
      </ul>
    </div>
  );
};

export default NavigationBar;
