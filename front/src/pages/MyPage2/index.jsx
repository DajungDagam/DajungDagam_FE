import React from 'react';
import style from './MyPage2.module.css';
import Nav2 from '../../components/Nav2';
import Footer from '../../components/Footer';
import CardList from '../../components/CardList';
import CardList2 from '../../components/CardList2';
import FilterBar2 from '../../components/FilterBar2';

const UserProfileCard = () => {
  const containerStyle = { marginBottom: '20px' };

  return (
    <div className={style.userProfileContainer} style={containerStyle}>
      <div style={containerStyle}>
        <Nav2 />
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

export default UserProfileCard;
