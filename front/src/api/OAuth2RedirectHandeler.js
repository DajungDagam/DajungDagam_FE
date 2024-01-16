import { kakaoLogin } from "./AuthenticationService";

const { useEffect } = require("react");
const { useNavigate } = require("react-router-dom");

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
                        console.log(response.data.data.token);
                        //AuthenticationService.registerSuccessfulLoginForJwt(response.data.data.userName, response.data.data.token);
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