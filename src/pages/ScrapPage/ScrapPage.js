import React, { useState, useEffect } from 'react';
import FeedScrap from './FeedScrap';
import MapScrap from './MapScrap';
import * as S from './ScrapPage.styles';

const ScrapPage = () => {
  const [listOn, setListOn] = useState('피드');

  const handdleList = e => {
    setListOn(e.target.id);
  };

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('http://12.125.233.27/community/collection?page=1&pagination=9', {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTcwNjQ5OH0.pu1WqqhWifWjC4D4Q_CSqQ2vDCJbAISzR7cnWXmNe5g',
      },
    })
      .then(res => res.json())
      .then(data => {
        setList(data);
        console.log('!');
      });
  }, [listOn]);

  return (
    <S.ScrapPageContainer>
      <S.UserContainer>
        <S.ScrapTitle>스크랩북</S.ScrapTitle>
        <S.UserBox>
          <S.UserImg src="/images/123.png" />
          <S.UserId>asdfas</S.UserId>
        </S.UserBox>
      </S.UserContainer>
      <S.ScrapMenu>
        <S.ScrapMenuList
          id="피드"
          onClick={e => {
            handdleList(e);
          }}
        >
          피드(2)
        </S.ScrapMenuList>
        <S.ScrapMenuList
          id="산책로"
          onClick={e => {
            handdleList(e);
          }}
        >
          산책로(2)
        </S.ScrapMenuList>
      </S.ScrapMenu>
      {listOn === '피드' ? <FeedScrap /> : <MapScrap />}
    </S.ScrapPageContainer>
  );
};

export default ScrapPage;
