//물물교환 Main 

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../../components/Nav';
import Nav2 from '../../../components/Nav2';
import Footer from '../../../components/Footer';
import classes from './Main.module.css';
import rabbit2Image from "../../../assets/rabbit2.png";
import PostList from '../../../components/PostList';
import FilterBar1 from '../../../components/FilterBar1';
import Pagination from '../../../components/Pagination';
import { getCookie, removeCookie } from '../../../cookie/cookieConfig'

// 'MainPage' 컴포넌트 정의
const MainPage = () => {
  const isLoggedIn = getCookie("userId") !== undefined;
  
  const handleLogout = () => {
    // 로그아웃 처리
    removeCookie("userId");
  };

  return (   
    <div>
      {isLoggedIn ? <Nav onLogout={handleLogout} /> : <Nav2 />}
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
      
      {/* "인기글" 추가 */}
      <div className={classes.popularPostsHeading}>
        <h2>인기글</h2>
      </div>
      
      {/* 별도의 섹션으로 PostList를 렌더링 */}
      <div className={classes.postListSection}>
        {/* 예시 데이터, 필요에 따라 실제 데이터로 변경 */}
        {[1, 2, 3].map((item, index) => (
          <PostList key={index} />
        ))}
      </div>

      {/* "게시물" 추가 */}
      <div className={classes.popularPostsHeading}>
        <h2>게시물</h2>
      </div>
      
      <FilterBar1 />
      
      {/* 3x3 그리드 형태로 PostList를 렌더링 */}
      <div className={classes.postListGrid}>
        {[4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
          <PostList key={index} />
        ))}
      </div>

      {/* Pagination 추가 */}
      <div className={classes.paginationCenter}>
        <Pagination
          totalPage={10}
          currentPage={1}
          onPageChange={(page) => console.log(page)}
        />
      </div>

      <Footer />
    </div>
  );
};

// BarterMain 컴포넌트 정의
function BarterMain() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    // 페이지 변경 로직
    setCurrentPage(page);
  };

  return (
    <MainPage />
  );
}

export default BarterMain;
