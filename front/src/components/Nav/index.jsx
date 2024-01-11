import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./Nav.module.css";

const Nav = props => {
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
                    <Link to="/barterwriting"><span>글쓰기</span></Link>
                    <Link to="/login"><span>로그인</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;
