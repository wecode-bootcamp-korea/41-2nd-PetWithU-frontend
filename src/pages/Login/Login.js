import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { REDIRECT_URI, REST_API_KEY } from './KakaoApiData';
import * as L from './Login.styles';

function Login() {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const kakaoLogin = e => {
    window.location.href = KAKAO_AUTH_URL;
    e.preventDefault();
  };

  return (
    <L.Login>
      <L.LoginBox>
        <L.FormBox>
          <L.Title>PetWith U</L.Title>
          <L.BtnList>
            <L.SotialBtn primary onClick={e => kakaoLogin(e)}>
              <RiKakaoTalkFill className="kakao" />
            </L.SotialBtn>
            <L.SotialBtn>
              <FcGoogle />
            </L.SotialBtn>
          </L.BtnList>
        </L.FormBox>
      </L.LoginBox>
    </L.Login>
  );
}

export default Login;
