import React from 'react';
import { Link } from 'react-router-dom';
import Nav2 from '../../components/Nav2';
import Nav3 from '../../components/Nav3'; 
import Footer from '../../components/Footer';
import classes from './Main.module.css';
import rabbit1Image from "../../assets/rabbit1.png";
import rabbit2Image from "../../assets/rabbit2.png";
import rabbit3Image from "../../assets/rabbit3.png";
import rabbit4Image from "../../assets/rabbit4.png";
import { getCookie, removeCookie } from '../../cookie/cookieConfig'

const MainPage = () => {
  const isLoggedIn = getCookie("userId") !== undefined;

  const handleLogout = () => {
    // 로그아웃 처리
    removeCookie("userId");
  };

  return (
    <div>
      {isLoggedIn ? <Nav3 onLogout={handleLogout} /> : <Nav2 />}
      {/* 첫 번째 섹션 */}
      <div className={classes.introBg}>
        <div className={classes.mainText1}>
          <div className={classes.mainHeading}>가난한 자취생들을 위한<br />거래 플랫폼</div>
          <p className={classes.subHeading}><span className={classes.brownText}>다정다감</span>에서 주변 자취생들과 교류하며,</p>
          <p className={classes.subHeading}>가까운 이웃과 친해져보세요!</p>
        </div>
        <div className={classes.rabbit2}>
          <img src={rabbit1Image} alt="귀여운 토끼" />
        </div>
      </div>

      {/* 두 번째 섹션 */}
      <div className={classes.main1Bg}>
        <div className={classes.rabbit2}>
        <Link to="/bartermain"><img src={rabbit2Image} alt="귀여운 토끼" /></Link>
        </div>
        <div className={classes.mainText1}>
          <p className={classes.surHeading}>물물교환</p>
          <div className={classes.mainHeading}>필요없는 물건을 <br />필요한 물건으로?</div>
          <p className={classes.subHeading}>자취생들과의 물물교환을 통해 돈을 아껴보세요.</p>
        </div>
      </div>

      {/* 세 번째 섹션 */}
      <div className={classes.main2Bg}>
        <div className={classes.mainText1}>
          <p className={classes.surHeading}>공동구매</p>
          <div className={classes.mainHeading}>함께하면<br />더 저렴해진다!</div>
          <p className={classes.subHeading}>한번에 많이 구매하여 돈도 아끼고,<br />주변 자취생들과 친분도 쌓아보세요.</p>
        </div>
        <div className={classes.rabbit2}>
        <Link to="/groupmain"><img src={rabbit3Image} alt="귀여운 토끼" /></Link>
        </div>
      </div>

      {/* 네 번째 섹션 */}
      <div className={classes.main3Bg}>
        <div className={classes.mainText1}>
          <p className={classes.surHeading}>추천서비스</p>
          <div className={classes.mainHeading}>나를 위한<br />맞춤형 추천서비스 </div>
          <p className={classes.subHeading}></p>
          <p className={classes.subHeading}></p>
        </div>
        <div className={classes.rabbit2}>
        <Link to="/barterwriting"><img src={rabbit4Image} alt="귀여운 토끼" /></Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;