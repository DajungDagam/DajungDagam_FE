import React from 'react';
import './MyPage.module.css';
import Footer from '../../components/Footer';
import CardList from '../../components/CardList';
import { Link } from 'react-router-dom';

const UserProfileCard = () => {
  return (
    
    <div>
        <CardList />
      <Footer />
    </div>
    
  );
};

export default UserProfileCard;
