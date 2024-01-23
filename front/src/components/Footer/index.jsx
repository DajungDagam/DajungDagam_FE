// Footer.js

import React from 'react';
import rabbit1Image from "../../assets/rabbit1.png";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <ul>
          <li><span className={classes.brownText}>그룹</span></li><br />
          <li>TAVE 12기 후반기 프로젝트</li>
          <li><img src={rabbit1Image} alt="귀여운 토끼" style={{ width: '190px', height: '170px' }} /></li>
        </ul>

        <ul>
          <li><span className={classes.brownText}>팀</span></li><br />
          <li>윤성원 (10기)</li>
          <li>김도균 (10기)</li>
          <li>오상훈 (12기)</li>
          <li>최현태 (12기)</li>
          <li>이지우 (12기)</li>
          <li>김지연 (12기)</li>
        </ul>

        <ul>
          <li><span className={classes.brownText}>연락처</span></li><br />
          <li>bbiyakeke@naver.com | @seongwon</li>
          <li>adjfajkl@naver.com | @dogyun</li>
          <li>fjkalda@naver.com | @sanghun</li>
          <li>dfaasd6@naver.com   | @hyuntae</li>
          <li>1114jiwoo@gmail.com | @jiwoo</li>
          <li>fdaasfg1@naver.com | @jiyeon</li>
        </ul>
      </div>
      <br />
      <p className={`${classes.center} ${classes.brownText}`}>Copyright (c) TAVE 12 DAJEONGDAGAM. All right reserved.</p>
    </footer>
  );
}

export default Footer;
