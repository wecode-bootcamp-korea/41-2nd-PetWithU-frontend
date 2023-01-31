import React, { useState } from 'react';
import * as N from './Nav.styles';
import { useNavigate } from 'react-router-dom';
import { BiBookmark } from 'react-icons/bi';
import { MdNotificationsNone } from 'react-icons/md';
import { BsCart2 } from 'react-icons/bs';
import Search from '../Search/Search';

function Nav() {
  const [write, setWrite] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const delToken = e => {
    if (e.target.name === '로그아웃') {
      localStorage.removeItem('token');
      navigate('/main');
    } else {
      navigate('/login');
    }
  };

  return (
    <N.Nav>
      <N.NavBox>
        <N.Logo
          onClick={() => {
            navigate('/');
          }}
        >
          petwithU
        </N.Logo>
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
        <Search />
        <N.MyBtnList>
          {token !== null &&
            TOKEN_MY_LIST.map(({ name, icon }, index) => {
              return (
                <N.MyBtn
                  name={name}
                  key={index}
                  onClick={() => {
                    navigate(`/${name}`);
                  }}
                >
                  {icon}
                </N.MyBtn>
              );
            })}
          <N.MyBtn
            primary={true}
            name={token ? '로그아웃' : '로그인'}
            onClick={name => {
              delToken(name);
            }}
          >
            {token ? '로그아웃' : '로그인'}
          </N.MyBtn>
          {token && (
            <N.AddFeedBtn
              onClick={() => {
                setWrite(!write);
                navigate('/feed'); //추후 글쓰기 페이지이동으로 수정예정
              }}
            >
              글쓰기
            </N.AddFeedBtn>
          )}
        </N.MyBtnList>
      </N.NavBox>
    </N.Nav>
  );
}

const TOKEN_MY_LIST = [
  { name: 'dd', icon: <BiBookmark /> },
  { name: 'aa', icon: <MdNotificationsNone /> },
  { name: 'cc', icon: <BsCart2 /> },
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
