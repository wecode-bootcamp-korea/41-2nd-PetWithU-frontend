import React, { useEffect } from 'react';
import { REST_API_KEY, REDIRECT_URI } from './KakaoApiData';
import { useLocation, useNavigate } from 'react-router-dom';

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const KAKAO_CODE = location.search.split('=')[1];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_url=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          postToken('token', data.access_token);
        } else {
          navigate('/');
        }
      });
  };

  const postToken = (key, value) => {
    fetch('http://3.38.247.226:3000/users/kakaologin', {
      method: 'POST',
      headers: {
        'Content-Type': 'Authoriaztion',
        key: key,
        value: value,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.jwtToken) {
          localStorage.setItem('token', data.jwtToken);
          navigate('/');
        }
      });
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, [getKakaoToken, location.search]);

  return <div>KakaoLogin</div>;
};

export default KakaoLogin;
