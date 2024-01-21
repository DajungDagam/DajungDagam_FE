import React, { useEffect } from 'react';
import style from './MyPage.module.css';
import Nav from '../../components/Nav';
import Nav2 from '../../components/Nav2';
import Footer from '../../components/Footer';
import CardList from '../../components/CardList';
import CardList2 from '../../components/CardList2';
import FilterBar2, { getFilterNum } from '../../components/FilterBar2';
import { getCookie, removeCookie } from '../../cookie/cookieConfig';

import { useState } from 'react';
import axios from "axios";

const userId = getCookie("userId");
const API_BASE_URL = 'https://tave-dgdg.run.goorm.io';
//let token = getCookie("token");

const mypageClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": 'application/json',
    "Access-Control-Allow-Origin": `*`,
    'Access-Control-Allow-Credentials':"true",
  }
});



// UserProfileCard 컴포넌트 내에서 import/export 제거
const UserProfileCard = () => {

  const containerStyle = { marginBottom: '20px' };

  // 유저정보, 유저가 쓴 글,  유저의 찜 목록
  const [userInfo, setUserInfo] = useState(null);
  const [writtenPosts, setWrittenPosts] = useState(null);
  const [likePosts, setLikePosts] = useState(null);


  const isLoggedIn = getCookie("userId") !== undefined;
  


  
  // 실행하면 바로, 유저정보와 작성한 글 받아오기
  
  useEffect(() => {
    let token = getCookie("token");

    // 유저 데이터 받아오기
    mypageClient.post(`/mypage/${userId}`,null, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    })
    .then(res =>{
      console.log(res.data);
      setUserInfo(JSON.stringify(res.data));
    }).catch(error=>{
      console.log(error);
    });

    // 작성한 글 받아오기
    mypageClient.post(`/mypage/${userId}/posts`,null, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    })
    .then(res =>{
      setWrittenPosts(res.data)
    }).catch(error=>{
      console.log(error);
    })

    // 찜목록 받아오기
    mypageClient.post(`/mypage/${userId}/wishlist`, null, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    })
    .then(res =>{
      setLikePosts(res.data)
    }).catch(error=>{
      console.log(error);
    })
  }, [])


  // 필터 변경될 때 마다, 리스트 변경하면 될 듯
  useEffect(() => {
    
  }, [getFilterNum()])

  
  const handleLogout = () => {
    // 로그아웃 처리
    removeCookie("userId");
  };


  // 유저정보, 작성글, 찜목록 잘왔는지 확인
  console.log("유저정보:" + userInfo);
  console.log("작성한 글:" + writtenPosts);
  console.log("찜한 글:" + likePosts);

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
