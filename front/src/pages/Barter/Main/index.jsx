// 물물교환(Barter) Main 페이지
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../../components/Nav';
import Nav2 from '../../../components/Nav2';
import Footer from '../../../components/Footer';
import classes from './Main.module.css';
import rabbit2Image from "../../../assets/rabbit2.png";
import PostList from '../../../components/PostList';
import PostList3 from '../../../components/PostList3';
import FilterBar1 from '../../../components/FilterBar1';
import { getCookie, removeCookie } from '../../../cookie/cookieConfig';

// MainPage 컴포넌트 정의
const MainPage = () => {
  const isLoggedIn = getCookie("userId") !== undefined;
  const [popularPosts, setPopularPosts] = useState([]);
  const [tradePosts, setTradePosts] = useState([]);

// 로그아웃 처리
  const handleLogout = () => {
    removeCookie("userId");
  };

  useEffect(() => {
    // trade-like-posts API 호출
    const fetchPopularPosts = async () => {
      try {
        const response = await fetch('https://tave-dgdg.run.goorm.io/trade/like-posts');
        const data = await response.json();
        const top3PopularPosts = data.slice(0, 3).flat();
        setPopularPosts(top3PopularPosts);
      } catch (error) {
        console.error('Error fetching popular posts:', error);
      }
    };
  
    // trade-posts API 호출
    const fetchTradePosts = async () => {
      try {
        const response = await fetch('https://tave-dgdg.run.goorm.io/trade');
        const data = await response.json();
        setTradePosts(data);
      } catch (error) {
        console.error('게시물을 불러오는 중 에러 발생:', error);
      }
    };
  
    // 각각의 API 호출
    fetchPopularPosts();
    fetchTradePosts();
  }, []); // 두 번째 파라미터가 빈 배열이 아니라면, 데이터가 업데이트될 때마다 실행됨
  

  return (   
    <div>
       {/* 헤더이미지 */}
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


  <div className={`${classes.postListGrid}`}>
      <PostList posts={popularPosts} />
    </div> 

    {/* "게시물" 추가 */}
    <div className={classes.popularPostsHeading}>
      <h2>게시물</h2>
    </div>
    
    {/* "필터바" 추가 */}
    <FilterBar1 />
    
    {/* "postlist3로 게시물" 추가 */}
    <div className={`${classes.postListGrid}`}>
      <PostList3 posts={tradePosts} />
    </div>

    {/* "Footer" 추가 */}
    <Footer />
  </div>
  );
};

function BarterMain() {
  return (
    <MainPage />
  );
}

export default BarterMain;

