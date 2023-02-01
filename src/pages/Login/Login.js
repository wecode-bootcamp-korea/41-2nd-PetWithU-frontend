import React from 'react';
import * as L from './Login.styles';
import { SiKakaotalk, SiGoogle } from 'react-icons/si';
import { REDIRECT_URI, REST_API_KEY } from './KakaoApiData';

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
          <L.SotialBtn primary onClick={e => kakaoLogin(e)}>
            <SiKakaotalk />
            <L.SotialText>카카오로 로그인 하기</L.SotialText>
          </L.SotialBtn>
          <L.SotialBtn>
            <SiGoogle />
            <L.SotialText>구글로 로그인 하기</L.SotialText>
          </L.SotialBtn>
        </L.FormBox>
      </L.LoginBox>
    </L.Login>
  );
}

export default Login;
