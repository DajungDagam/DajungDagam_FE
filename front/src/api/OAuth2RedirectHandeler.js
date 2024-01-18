import { setCookie } from "../cookie/cookieConfig";
import { kakaoLogin } from "./AuthenticationService";

const { useEffect } = require("react");
const { useNavigate } = require("react-router-dom");



// 백에게 유효한 회원인지 검사하는 동안 잠시 있는 페이지
// 만약 유효한 회원이면, 쿠키에 유저 정보와 token을 저장
const OAuth2RedirectHandler = (props) => {
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
    
    let params = new URL(document.URL).searchParams;
    let code = params.get('code');
    let navigate = useNavigate();
    

    

    console.log("code: " + code);

    useEffect(
        () => {
            async function login() {
                await kakaoLogin(code)
                    .then((response) => {
                        console.log('kakaoLogin');
                        console.log(response);
                    
                        setCookie("token", `${response.data.jwtToken}`, {
                            path: "/",
                            
                        });
                        setCookie("userId", `${response.data.user.id}`, {
                            path: "/",
                            
                        });
                        setCookie("kakaoName", `${response.data.user.kakaoName}`, {
                            path: "/",
                            
                        });
                        //AuthenticationService.registerSuccessfulLoginForJwt(response.data.data.userName, response.data.data.token);
                        
                        // 새로 가입한 유저면 /loginnickname으로 이동
                        if(`${response.data.newUser}` == true)
                            navigate('/loginnickname');

                    })
                    .catch((error) => {
                        console.log('kakaoLogin Failed');
                    });
                    navigate('/');
                }
                login();
            }, []    
        );
            
        
        
            
    return (
        
        <div>
            <div>
                <div>잠시만 기다려 주세요! 로그인 중입니다.</div>
            </div>
        </div>
    );
};

export default OAuth2RedirectHandler;