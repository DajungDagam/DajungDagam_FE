import axios from "axios";
import { getCookie } from "../cookie/cookieConfig";

const token = getCookie("token");
const userId = getCookie("userId");

console.log("Token:" + token);
console.log("userId:" + userId);

const apiClient = axios.create(
  {
    baseURL: 'https://tave-dgdg.run.goorm.io',
    // headers: {
    //   "Content-Type": "application/json",
    //   "Authorization": `Token ${token}`
    // }
  }
)

const tokenClient = axios.create(
  {
    baseURL: 'https://tave-dgdg.run.goorm.io',
    headers: {
      
       "Authorization": `Bearer ${token}`
    }
  }
)

export const setNickNameAtBack = function(nickName) {
  tokenClient.post(`/login/details/v1/userId=${userId}&nickName=${nickName}`);
}

export default apiClient;