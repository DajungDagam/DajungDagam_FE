import axios from "axios";
import { useEffect, useState } from "react";
import apiClient from "./apiTester";

export function loginSocialKakao() {
    window.location.href = 'https://kauth.kakao.com/oauth/authorize?client_id=068eacfa29b89a11407243e6899cc157&redirect_uri=https://localhost:3000/oauth/callback/kakao&response_type=code';
}

export async function kakaoLogin(code) {
    await apiClient.post(`/login/oauth2/code/kakao?code=${code}`);
}  

