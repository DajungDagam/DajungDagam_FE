import React from 'react';
import style from './MyPage.module.css';
import Nav from '../../components/Nav';
import Nav2 from '../../components/Nav2';
import Footer from '../../components/Footer';
import CardList from '../../components/CardList';
import CardList2 from '../../components/CardList2';
import FilterBar2 from '../../components/FilterBar2';
import { getCookie, removeCookie } from '../../cookie/cookieConfig';

// UserProfileCard 컴포넌트 내에서 import/export 제거
const UserProfileCard = () => {
  const containerStyle = { marginBottom: '20px' };

  const isLoggedIn = getCookie("userId") !== undefined;
  
  const handleLogout = () => {
    // 로그아웃 처리
    removeCookie("userId");
  };

  return (
    <div className={style.userProfileContainer} style={containerStyle}>
      <div style={containerStyle}>
        {isLoggedIn ? <Nav onLogout={handleLogout} /> : <Nav2 />}
      </div>
      <div style={containerStyle}>
        <CardList />
      </div>
      <div style={containerStyle}>
        <FilterBar2 />
      </div>
      <div style={containerStyle}>
        <CardList2 />
      </div>
      <Footer />
    </div>
  );
};

// 최상위에서 export
export default UserProfileCard;
