import React from 'react';
import * as L from './Login.styles';
import { SiKakaotalk, SiGoogle } from 'react-icons/si';

function Login() {
  return (
    <L.Login>
      <L.LoginBox>
        <L.FormBox>
          <L.Title>PetWith U</L.Title>
          <L.InputBox>
            <L.IdInput placeholder="ID"></L.IdInput>
            <L.IdInput placeholder="PW"></L.IdInput>
          </L.InputBox>
          <L.LoginBtn>로그인</L.LoginBtn>
          <L.SotialBtn primary>
            <SiKakaotalk />
            <L.SotialText>카카오로 로그인 하기</L.SotialText>
          </L.SotialBtn>
          <L.SotialBtn>
            <SiGoogle />
            <L.SotialText>구글로 로그인 하기</L.SotialText>
          </L.SotialBtn>
          <L.ToSignup href="/signup">회원가입 하러 가기이이이이잉</L.ToSignup>
        </L.FormBox>
      </L.LoginBox>
    </L.Login>
  );
}

export default Login;
