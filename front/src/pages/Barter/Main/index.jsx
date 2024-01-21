import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav3 from '../../../components/Nav';
import Nav2 from '../../../components/Nav2';
import Footer from '../../../components/Footer';
import classes from './Main.module.css';
import rabbit2Image from "../../../assets/rabbit2.png";
import PostList from '../../../components/PostList';
import FilterBar1 from '../../../components/FilterBar1';
import Pagination from '../../../components/Pagination';
import { getCookie, removeCookie } from '../../../cookie/cookieConfig';

const MainPage = () => {
  const isLoggedIn = getCookie("userId") !== undefined;
  const [popularPosts, setPopularPosts] = useState([]);

  const handleLogout = () => {
    removeCookie("userId");
  };

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const response = await fetch('https://tave-dgdg.run.goorm.io/trade/like-posts');
        const data = await response.json();
        console.log(data);
        setPopularPosts(data);
      } catch (error) {
        console.error('Error fetching popular posts:', error);
      }
    };

    fetchPopularPosts();
  }, []);

  return (   
    <div>
      {isLoggedIn ? <Nav3 onLogout={handleLogout} /> : <Nav2 />}
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

      <div className={classes.popularPostsHeading}>
        <h2>인기글</h2>
      </div>

      <div className={classes.postListSection}>
        {popularPosts.map((post, index) => (
          <PostList key={index} post={post} />
        ))}
      </div>

      <div className={classes.popularPostsHeading}>
        <h2>게시물</h2>
      </div>
      
      <FilterBar1 />
      
      <div className={classes.postListGrid}>
        {[4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
          <PostList key={index} />
        ))}
      </div>

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

function BarterMain() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <MainPage />
  );
}

export default BarterMain;
