// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <ul>
          <li><span className={classes.brownText}>그룹</span></li><br />
          <li>TAVE 12기 다정다감</li>
          <li>아이콘 삽입</li>
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
          <li>bbiyakeke@naver.com | @dasf</li>
          <li>adjfajkl@naver.com | @ewjrlfd</li>
          <li>fjkalda@naver.com | @fdjklasdjf</li>
          <li>dfaasd6@naver.com   | @fdada</li>
          <li>dfa891@naver.com | @dsfads</li>
          <li>fdaasfg1@naver.com | @kkldasa</li>
        </ul>
      </div>
      <br />
      <p className={`${classes.center} ${classes.brownText}`}>Copyright (c) TAVE 12 DAJEONGDAGAM. All right reserved.</p>
    </footer>
  );
}

export default Footer;
