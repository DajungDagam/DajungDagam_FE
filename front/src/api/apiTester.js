import axios from "axios";
import { getCookie } from "../cookie/cookieConfig";
import { useCallback } from "react";

//getUserInfo 수정해야함
export const getUserInfo = () => {
  // 가상의 더미 데이터
  const dummyUserInfo = {
    userId: '123456',
    username: 'john_doe',
    email: 'john@example.com',
    // 기타 필요한 사용자 정보
  };

  // 더미 데이터 반환
  return dummyUserInfo;
};
//수정 필요..!!!!

// 쿠키에서 가져오기
const token = getCookie("token");
const userId = getCookie("userId");

console.log("Token:" + token);
console.log("userId:" + userId);

const API_BASE_URL = 'https://tave-dgdg.run.goorm.io';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  // headers: {
  //   "Content-Type": "application/json",
  //   "Authorization": `Token ${token}`
  // }
});

const tokenClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": 'application/json',
    "Authorization": `Bearer ${token}`,
    "Access-Control-Allow-Origin": `*`,
    'Access-Control-Allow-Credentials':"true",
  }
});

// 글쓰기용 헤더
const writeConfig = {
  "Content-Type": 'multipart/form-data',
  "Authorization": `Bearer ${token}`
};

// 백으로 입력한 닉네임 전송
export const setNickNameAtBack = function(nickName) {
  tokenClient.post(`/login/details/v1?userId=${userId}&nickName=${nickName}`);
  console.log(userId)
}

export const setAddrAtBack = function(gu_name, dong_name) {
  tokenClient.post(`/login/details/v2?userId=${userId}&gu_name=${gu_name}&dong_name=${dong_name}`);
}

// 백으로 교환 글 정보 보내기
export const sendTradePost = async (dataToBeSent) => {
  const { uploadedImages, title, productDescription, recruitmentPeriod, selectedGu, selectedDong, openChatLink, selectedCategory } = dataToBeSent;

  const formData = new FormData();
    formData.append('images', uploadedImages);
    let postDto = {
        'title': title,
        'categoryName': selectedCategory,
        'content': productDescription,
        'guName': selectedGu,
        'dongName': selectedDong,
        'deadline': recruitmentPeriod,
        'chatLink': openChatLink,
        'postType': 1
        // 날짜 형식
    };
  const postWriteDtoString = JSON.stringify(postDto);
  await formData.append('postWriteDto', new Blob([postWriteDtoString], { type: 'application/json' }));

  apiClient.post(
      "/trade/posts",
      formData,
      writeConfig)
      .then(res => {
          console.log(res);
      }).catch(error => {
          console.log(error);
      });
}

// 백으로 공동구매 글 정보 보내기
export const sendGroupPost = async (dataToBeSent) => {
  const { uploadedImages, title, productDescription, recruitmentPeriod, selectedGu, selectedDong, openChatLink, selectedCategory, price, selectedPeople, perCurrCount } = dataToBeSent;

  const formData = new FormData();
    formData.append('file', uploadedImages);
    let postDto = {
        'title': title,
        'categoryName': selectedCategory,
        'price': price,
        'personCount': selectedPeople,
        'perCurrCount': perCurrCount,
        'content': productDescription,
        'guName': selectedGu,
        'dongName': selectedDong,
        'deadline': recruitmentPeriod,
        'chatLink': openChatLink,
        'postType': 0
        // 날짜 형식
    };
  const postWriteDtoString = JSON.stringify(postDto);
  await formData.append('postWriteDto', new Blob([postWriteDtoString], { type: 'application/json' }));

  apiClient.post(
      "/group-buying/posts",
      formData,
      writeConfig)
      .then(res => {
          console.log(res);
      }).catch(error => {
          console.log(error);
      });
}

  export function logoutToBack() {
    tokenClient.post("/login/logout")
    .then(res =>{
      console.log(res);
    }).catch(error=>{
      console.log(error);
    });
  }


export default apiClient;