// 공동구매() Main 페이지
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../../components/Nav';
import Nav2 from '../../../components/Nav2'; // Nav2 컴포넌트를 추가로 import
import Footer from '../../../components/Footer';
import classes from './Main.module.css';
import rabbit3Image from "../../../assets/rabbit3.png";
import PostList2 from '../../../components/PostList2';
import FilterBar1 from '../../../components/FilterBar1';
import Pagination from '../../../components/Pagination';
import { getCookie, removeCookie } from '../../../cookie/cookieConfig'; // 실제 쿠키 관리 유틸리티 경로로 변경

// MainPage 컴포넌트 정의
const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 10; 
  const [popularPosts, setPopularPosts] = useState([]);

  const handlePageChange = (page) => {
    // 페이지 변경 로직
    setCurrentPage(page);
  };


  const gridPostListData = [4, 5, 6, 7, 8, 9, 10, 11, 12]; // 9개의 PostList 데이터
  const postListData = [0,1]; // 실제 포스트 데이터 배열로 대체
  const isLoggedIn = getCookie("userId") !== undefined;

  const handleLogout = () => {
    // 로그아웃 처리
    removeCookie("userId");
  };

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const response = await fetch('https://tave-dgdg.run.goorm.io/group-buying/like-posts');
        const data = await response.json();
        console.log(data);

        // Adjust to get only the top 3 popular posts
        const top3PopularPosts = data.slice(0, 1).flat();

        setPopularPosts(top3PopularPosts);
      } catch (error) {
        console.error('Error fetching popular posts:', error);
      }
    };

    fetchPopularPosts();
  }, []);

  return (
    <div>
      {isLoggedIn ? <Nav onLogout={handleLogout} /> : <Nav2 />} {/* 로그인 여부에 따라 다른 네비게이션 컴포넌트를 렌더링 */}
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

      {/* "인기글" 추가 */}
      <div className={classes.popularPostsHeading}>
        <h2>인기글</h2>
      </div>

      {/* 별도의 섹션으로 PostList를 렌더링 */}
      <div className={classes.postListSection}>
        {postListData.map((item, index) => (
          <PostList2 key={index} />
        ))}
      </div>

      {/* "게시물" 추가 */}
      <div className={classes.popularPostsHeading}>
        <h2>게시물</h2>
      </div>

      <FilterBar1 />

      {/* 3x3 그리드 형태로 PostList를 렌더링 */}
      <div className={classes.postListGrid}>
      {gridPostListData.map((item, index) => (
  <PostList2 key={index} />
))}

      </div>

      {/* Pagination 추가 */}
      <div className={classes.paginationCenter}>
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>

      <Footer />
    </div>
  );
};

function GroupMain() {
  return <MainPage />;
}

export default GroupMain;
