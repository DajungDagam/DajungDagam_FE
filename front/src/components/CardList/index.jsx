import React from 'react';
import styles from "./CardList.module.css"; 

const UserProfileCard = ({ userInfo }) => {
  // userInfo를 props로 받아 사용

  if (!userInfo) {
    // userInfo가 없을 경우 로딩이나 기본값을 보여줄 수 있습니다.
    return <p>Loading...</p>;
  }

  const { profileImage, nickName, info , guName, dongName } = JSON.parse(userInfo);

  return (
    <div className={styles.profileContainer}>
      {/* 왼쪽 섹션 */}
      <div className={styles.leftSection}>
        <img src={profileImage} alt="프로필 이미지" className={styles.profileImage} />
        <div className={styles.name}>{nickName}</div>
      </div>

      {/* 오른쪽 섹션 */}
      <div className={styles.rightSection}>
        <div className={styles.introAddress}>
          <p className={styles.intro}>소개</p>
          <p className={styles.introText}>{info}</p>
          <p className={styles.intro}>주소</p>
          <p className={styles.addrText}>{guName} {dongName}</p>
        </div>
        <div className={styles.editProfile}>
          <a href="#">정보 수정</a>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
