// Nav.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from "../Nav/Nav.module.css";
import { logoutToBack } from '../../api/apiTester';

const Nav = (props) => {
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
                    <span><button onClick={logoutMethod}>로그아웃</button></span>
                </div>
            </div>
        </div>
    );
};

export default Nav;
