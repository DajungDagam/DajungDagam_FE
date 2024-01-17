import axios from "axios";
import { getCookie } from "../cookie/cookieConfig";

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
       "Authorization": `Bearer ${token}`
    }
  }
)

// 백으로 입력한 닉네임 전송
export const setNickNameAtBack = function(nickName) {
  tokenClient.post(`/login/details/v1?userId=${userId}&nickName=${nickName}`);
}

export const setAddrAtBack = function(gu_name, dong_name) {
  tokenClient.post(`/login/details/v2?userId=${userId}&gu_name=${gu_name}&dong_name=${dong_name}`);
}

export default apiClient;