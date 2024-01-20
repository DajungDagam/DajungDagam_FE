import {Cookies, useCookies} from 'react-cookie';

// 쿠키 생성
const cookies = new Cookies();

// 쿠키에 값 넣기
export const setCookie = (name, value, option) => {
    return cookies.set(name, value, { ...option });
}
// 쿠키에서 값 가져오기
export const getCookie = (name) => {
    return cookies.get(name);
};
// 쿠키 제거
export const removeCookie = (name, option) => {
    return cookies.remove(name, { ...option });
};

