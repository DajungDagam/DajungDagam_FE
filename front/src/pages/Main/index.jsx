// MainPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import classes from './Main.module.css';
import rabbit1Image from "../../assets/rabbit1.png";
import rabbit2Image from "../../assets/rabbit2.png";
import rabbit3Image from "../../assets/rabbit3.png";
import rabbit4Image from "../../assets/rabbit4.png";


const MainPage = () => {
  return (
    <div>
        <Nav />
      {/* 첫 번째 섹션 */}
      <div className={classes.introBg}>
        <div className={classes.mainText1}>
          <div className={classes.mainHeading}>당신 근처의<br />지역 생활 커뮤니티</div>
          <p className={classes.subHeading}>동네라서 가능한 모든 것</p>
          <p className={classes.subHeading}><span className={classes.brownText}>다정다감</span>에서 가까운 이웃과 함께해요!</p>
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
          <div className={classes.mainHeading}>이웃간 물물교환</div>
          <p className={classes.subHeading}>동네 주민들과 가깝고 따뜻한 거래를<br />지금 경험해보세요.</p>
        </div>
      </div>

      {/* 세 번째 섹션 */}
      <div className={classes.main2Bg}>
        <div className={classes.mainText1}>
          <p className={classes.surHeading}>공동구매</p>
          <div className={classes.mainHeading}>이웃만 아는<br />공동구매 이야기</div>
          <p className={classes.subHeading}>우리동네만의 다양한 공동구매를<br />
            공감과 댓글로 나누어요.</p>
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
          <p className={classes.subHeading}>동네라서 가능한 모든 것</p>
          <p className={classes.subHeading}>다정다감에서 가까운 이웃과 함께해요!</p>
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
