import axios from "axios";
import { useEffect, useState } from "react";
import apiClient from "./apiTester";

// 인가코드 받기 위해 카카오 로그인 창 보내기
export function loginSocialKakao() {
    window.location.href = 'https://kauth.kakao.com/oauth/authorize?client_id=068eacfa29b89a11407243e6899cc157&redirect_uri=https://localhost:3000/oauth/callback/kakao&response_type=code';
}

// 카카오 로그인 창에 입력 후, 받은 인가코드를 백엔드로 전송 (즉, 백에게 유효한 회원인지 검사)
export async function kakaoLogin(code) {
    return await apiClient.post(`/login/oauth2/code/kakao?code=${code}`);
}  

