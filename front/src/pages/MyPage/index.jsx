import React, { useEffect, useState } from 'react';
import style from './MyPage.module.css';
import Nav from '../../components/Nav';
import Nav2 from '../../components/Nav2';
import Footer from '../../components/Footer';
import CardList from '../../components/CardList';
import CardList2 from '../../components/CardList2';
import FilterBar2, { getFilterNum } from '../../components/FilterBar2';
import { getCookie, removeCookie } from '../../cookie/cookieConfig';

import axios from "axios";

const API_BASE_URL = 'https://tave-dgdg.run.goorm.io';

const mypageClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": 'application/json',
    "Access-Control-Allow-Origin": `*`,
    'Access-Control-Allow-Credentials': "true",
  }
});

const UserProfileCard = () => {
  const containerStyle = { marginBottom: '20px' };

  const [userInfo, setUserInfo] = useState(null);
  const [writtenPosts, setWrittenPosts] = useState(null);
  const [likePosts, setLikePosts] = useState(null);

  const isLoggedIn = getCookie("userId") !== undefined;

  useEffect(() => {
    let token = getCookie("token");
    let userId = getCookie("userId");

    //Cardlist 유저 정보 조회
    mypageClient.post(`/mypage/${userId}`, null, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    })
      .then(res => {
        setUserInfo(JSON.stringify(res.data));
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });

    //마이페이지 게시글 조회
    mypageClient.post(`/mypage/${userId}/posts`, null, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    })
      .then(res => {
        setWrittenPosts(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });

    mypageClient.post(`/mypage/${userId}/wishlist`, null, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    })
      .then(res => {
        setLikePosts(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  useEffect(() => {
    // 필터 변경될 때 마다, 리스트 변경하는 로직 추가
  }, [getFilterNum()])

  const handleLogout = () => {
    removeCookie("userId");
    removeCookie("token");
    removeCookie("kakaoName");
  };

  return (
    <div className={style.userProfileContainer} style={containerStyle}>
      <div style={containerStyle}>
        {isLoggedIn ? <Nav onLogout={handleLogout} /> : <Nav2 />}
      </div>
      <div style={containerStyle}>
        <CardList userInfo={userInfo} writtenPosts={writtenPosts} likePosts={likePosts} />
      </div>
      <div style={containerStyle}>
        <FilterBar2 />
      </div>
      <div style={containerStyle}>
        <CardList2 userInfo={userInfo} likePosts={likePosts} />
      </div>
      <Footer />
    </div>
  );
};

export default UserProfileCard;
