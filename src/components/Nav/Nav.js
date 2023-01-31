import React, { useState } from 'react';
import * as N from './Nav.styles';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();

  return (
    <N.Nav>
      <N.NavBox>
        <N.Logo>펫위주</N.Logo>
        <div>
          {MENU_LIST.map(({ name, page }) => {
            return (
              <N.NavMenu
                key={name}
                onClick={() => {
                  navigate(`${page}`);
                }}
              >
                {name}
              </N.NavMenu>
            );
          })}
        </div>
        <N.InputBox placeholder="검색어 입력"></N.InputBox>
        <div>
          {MY_LIST.map(({ name }) => {
            return <N.MyBtn key={name}>{name}</N.MyBtn>;
          })}
        </div>
        <N.AddFeedBtn>글쓰기</N.AddFeedBtn>
      </N.NavBox>
    </N.Nav>
  );
}

const MY_LIST = [
  {
    name: '스크랩',
  },
  {
    name: '알림',
  },
  {
    name: '장바구니',
  },
];

const MENU_LIST = [
  {
    name: '쇼핑',
    page: '/',
  },
  {
    name: '산책로',
    page: '/community',
  },
  {
    name: '피드',
    page: '/feed',
  },
];

export default Nav;
