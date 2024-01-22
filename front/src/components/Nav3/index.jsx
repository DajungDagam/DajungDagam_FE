import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from "../Nav/Nav.module.css";
import { logoutToBack } from '../../api/apiTester';

const Nav3 = (props) => {
    const navigate = useNavigate();

    const logoutMethod = () => {
        logoutToBack();
        navigate('/');
    };

    return (
        <div className={props.style}>
            <div className={classes.navHeader}>
                <div className={classes.logo}>
                    <Link to="/">다정다감</Link>
                </div>
                <div className={classes.menu}>
                    <Link to="/bartermain"><span>물물교환</span></Link>
                    <Link to="/groupmain"><span>공동구매</span></Link>
                    <Link to="/recommendmain"><span>추천서비스</span></Link>
                </div>
                <div className={classes.menu2}>
                    <Link to="/mypage"><span>마이페이지</span></Link>
                    {/* <span><button onClick={logoutMethod}>로그아웃</button></span> */}
                    <Link to="/Logout"><span>로그아웃</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Nav3;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import classes from "../Nav/Nav.module.css";
// import { logoutToBack } from '../../api/apiTester';

// const Nav3 = (props) => {
//     const [loggingOut, setLoggingOut] = useState(false);  // 로그아웃 중 여부 상태
//     const navigate = useNavigate();

//     const logoutMethod = async () => {
//         if (loggingOut) return;  // 이미 로그아웃 중이면 중복 실행 방지
//         setLoggingOut(true);  // 로그아웃 시작

//         try {
//             await logoutToBack();  // 로그아웃 API 호출
//             navigate('/');  // 로그아웃 후 리다이렉트
//         } catch (error) {
//             console.error("로그아웃 중 에러:", error);
//         } finally {
//             setLoggingOut(false);  // 로그아웃 완료
//         }
//     };

//     return (
//         <div className={props.style}>
//             <div className={classes.navHeader}>
//                 <div className={classes.logo}>
//                     <Link to="/">다정다감</Link>
//                 </div>
//                 <div className={classes.menu}>
//                     <Link to="/bartermain"><span>물물교환</span></Link>
//                     <Link to="/groupmain"><span>공동구매</span></Link>
//                     <Link to="/recommendmain"><span>추천서비스</span></Link>
//                 </div>
//                 <div className={classes.menu2}>
//                     <Link to="/mypage"><span>마이페이지</span></Link>
//                     <Link to="#" onClick={logoutMethod}><span>로그아웃</span></Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Nav3;
