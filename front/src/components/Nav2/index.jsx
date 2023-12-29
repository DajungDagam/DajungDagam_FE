//글쓰기, 로그인 없는 버전
import React from 'react';
import { Link } from 'react-router-dom';
import classes from "../Nav/Nav.module.css";

const Nav = props => {
return (
    <div className={props.style}>
        <div className={classes.navHeader}>
            <div className={classes.logo}>다정다감</div>
            <div className={classes.menu}>
                <Link to="/물물교환"><span>물물교환</span></Link>
                <Link to="/공동구매"><span>공동구매</span></Link>
                <Link to="/추천서비스"><span>추천서비스</span></Link>
            </div>
        </div>
    </div>
);
};

export default Nav;
