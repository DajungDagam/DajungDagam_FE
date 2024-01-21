//글쓰기, 마이페이지, 로그아웃
import React from 'react';
import { Link } from 'react-router-dom';
import classes from "../Nav/Nav.module.css";

const Nav4 = props => {
    return (
        <div className={props.style}>
            <div className={classes.navHeader}>
                <div className={classes.logo}>
                <Link to="/">다정다감</Link></div>
                <div className={classes.menu}>
                    <Link to="/bartermain"><span>물물교환</span></Link>
                    <Link to="/groupmain"><span>공동구매</span></Link>
                    <Link to="/recommendmain"><span>추천서비스</span></Link>
                </div>
                <div className={classes.menu2}>
                    <Link to="/groupwriting"><span>글쓰기</span></Link>
                    <Link to="/mypage"><span>마이페이지</span></Link>
                    <Link to="/Logout"><span>로그아웃</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Nav4;
