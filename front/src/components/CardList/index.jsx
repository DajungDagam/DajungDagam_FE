import React from 'react';
import styles from "./CardList.module.css"; 
import { getUserInfo } from '../../api/apiTester';

const userInfo = getUserInfo();

const UserProfileCard = () => {
  console.log(userInfo);

  return (
    <div className={styles.profileContainer}>
      {/* 왼쪽 섹션 */}
      <div className={styles.leftSection}>
        <img src="프로필 이미지 URL" alt="프로필 이미지" className={styles.profileImage} />
        <div className={styles.name}>이름</div>
      </div>

      {/* 오른쪽 섹션 */}
      <div className={styles.rightSection}>
        <div className={styles.introAddress}>
          <p className={styles.intro}>소개</p>
          <p className={styles.introText}>소개글 입니다.</p>
          <p className={styles.addr}>주소</p>
          <p className={styles.addrText}>주소입니다.</p>
        </div>
        <div className={styles.editProfile}>
          <a href="#">정보 수정</a>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
