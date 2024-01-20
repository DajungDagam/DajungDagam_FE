// RecommendMain.js
import React from 'react';
import Nav from '../../../components/Nav';
import Nav2 from '../../../components/Nav2';
import { getCookie, removeCookie } from '../../../cookie/cookieConfig';

const RecommendMain = () => {
  const isLoggedIn = getCookie("userId") !== undefined;

  const handleLogout = () => {
    // 로그아웃 처리
    removeCookie("userId");
  };

  return (
    <div>
      {isLoggedIn ? <Nav onLogout={handleLogout} /> : <Nav2 />}
      {/* 로그인 여부에 따라 다른 네비게이션 컴포넌트를 렌더링 */}
      추천서비스 메인페이지
    </div>
  );
}

export default RecommendMain;
