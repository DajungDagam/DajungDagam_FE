import React from 'react';
import style from './MyPage.module.css';
import Nav2 from '../../components/Nav2';
import Footer from '../../components/Footer';
import CardList from '../../components/CardList';
import CardList2 from '../../components/CardList2';
import FilterBar1 from '../../components/FilterBar1';
import { Link } from 'react-router-dom';

const UserProfileCard = () => {
  return (
    <div className={style.userProfileContainer}>
      <Nav2 />
      <CardList />
      <FilterBar1 />
      <CardList2 />
      <Footer />
    </div>
  );
};

export default UserProfileCard;
