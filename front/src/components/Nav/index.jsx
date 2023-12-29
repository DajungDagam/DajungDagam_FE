import React from 'react';
import classes from "./Nav.module.css";

const Nav = props => {
    return (
        <div className={props.style}>
            <div className={classes.navHeader}>
                <div className={classes.logo}>다정다감</div>
                <div className={classes.menu}>
                    <span>물물교환</span>
                    <span>공동구매</span>
                    <span>추천서비스</span>
                </div>
                <div className={classes.menu2}>
                    <span>글쓰기</span>
                    <span>로그인</span>
                </div>
            </div>
            {/* {props.children} */}
        </div>
    );
};

export default Nav;
