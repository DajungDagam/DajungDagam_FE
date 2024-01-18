import axios from "axios";
import { getCookie } from "../cookie/cookieConfig";
import { useCallback } from "react";

// 쿠키에서 가져오기
const token = getCookie("token");
const userId = getCookie("userId");

console.log("Token:" + token);
console.log("userId:" + userId);

// 로그인할 때, 보낼 axios
const apiClient = axios.create(
  {
    baseURL: 'https://tave-dgdg.run.goorm.io',
    // headers: {
    //   "Content-Type": "application/json",
    //   "Authorization": `Token ${token}`
    // }
  }
)

// 유저 닉네임 설정 할때 사용
// 정상 작동
const tokenClient = axios.create(
  {
    baseURL: 'https://tave-dgdg.run.goorm.io',
    headers: {
      "Content-Type": 'application/json',
       "Authorization": `Bearer ${token}`
    }
  }
)

// 글쓰기용 헤더
const writeConfig = {
  "Content-Type": 'multipart/form-data',
  "Authorization": `Bearer ${token}`
};


// 백으로 입력한 닉네임 전송
export const setNickNameAtBack = function(nickName) {
  tokenClient.post(`/login/details/v1?userId=${userId}&nickName=${nickName}`);
}

export const setAddrAtBack = function(gu_name, dong_name) {
  tokenClient.post(`/login/details/v2?userId=${userId}&gu_name=${gu_name}&dong_name=${dong_name}`);
}

// 백으로 교환 글 정보 보내기
export const sendTradePost = async (uploadedImages, title, productDescription,
   recruitmentPeriod, showCalendar, selectedGu, selectedDong, openChatLink) => {
  
    const formData = new FormData();
    await formData.append('images', uploadedImages);
    let postDto = {
      
      'title': title,
      'area': 10,            
      'content' : productDescription,
      'chatLink' : openChatLink,
      'postType' : 1,
      'itemCategorys' : 2
    };
    const postDtoString = JSON.stringify(postDto);
    await formData.append('postDto', new Blob([postDtoString], {type: 'application/json'}));

    apiClient.post(
      "/trade/posts",
       formData,
        writeConfig )
    .then(res =>{
      console.log(res);
    }).catch(error=>{
      console.log(error);
    });
  }


export default apiClient;