import React from 'react';
import * as S from './Scrap.styles';
import TrailCourseScrap from './TrailCourseScrap';

function Scrap() {
  return (
    <>
      <S.PageHeader>
        <S.PageTitle>스크랩북</S.PageTitle>
        <S.PageShareBtn>공유하기</S.PageShareBtn>
      </S.PageHeader>
      <S.UserInfo>
        <S.ProfileImg src="/images/TrailCourseImg/trail1.jpg" />
        <S.Username>seoyunlfv</S.Username>
      </S.UserInfo>
      <S.ScrapCategory>
        <S.FeedandTrailCourse>피드</S.FeedandTrailCourse>
        <S.FeedandTrailCourse>산책로</S.FeedandTrailCourse>
      </S.ScrapCategory>
      <TrailCourseScrap />
    </>
  );
}

export default Scrap;
