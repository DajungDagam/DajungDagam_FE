// import React, { useEffect } from 'react';
// import { removeCookie } from '../../cookie/cookieConfig';
// import debounce from 'lodash/debounce';

// const Logout = () => {
//   const handleLogout = debounce(async () => {
//     // 비동기 작업 수행
//     await removeCookie("userId");

//     // 로그아웃 후 메인 페이지로 바로 이동
//     window.location.href = "/";
//   }, 1000); // 1000ms(1초) 동안 중복 클릭 무시

//   useEffect(() => {
//     // 로그아웃 함수 실행
//     handleLogout();
//   }, []);

//   return (
//     <div>
//       <p>You have been logged out. Redirecting to the main page...</p>
//     </div>
//   );
// };

// export default Logout;
// Logout 컴포넌트
import React, { useEffect } from 'react';
import { removeCookie } from '../../cookie/cookieConfig';
import debounce from 'lodash/debounce';
import { logoutToBack } from '../../api/apiTester';

const Logout = () => {
  const handleLogout = debounce(async () => {
    // 비동기 작업 수행
    await removeCookie("userId");

    // 로그아웃 API 호출
    try {
      await logoutToBack();
    } catch (error) {
      console.error("로그아웃 중 에러:", error);
    }

    // 로그아웃 후 메인 페이지로 바로 이동
    window.location.href = "/";
  }, 1000); // 1000ms(1초) 동안 중복 클릭 무시

  useEffect(() => {
    // 로그아웃 함수 실행
    handleLogout();
  }, []);

  return (
    <div>
      <p>You have been logged out. Redirecting to the main page...</p>
    </div>
  );
};

export default Logout;
