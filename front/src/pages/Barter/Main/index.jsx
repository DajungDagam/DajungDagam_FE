import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import classes from './Main.module.css';
import rabbit2Image from "../../../assets/rabbit2.png";

function BarterMain() {
    return (   
    <div>
        <Nav />
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
       <Footer />
    </div>
    );
}

export default BarterMain;