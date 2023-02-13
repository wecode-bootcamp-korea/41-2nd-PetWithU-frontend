import React from 'react';
import * as S from './Scrap.styles';
import TrailCourseScrap from './TrailCourseScrap';

function Scrap() {
  return (
    <S.Wrapper>
      <S.PageHeader>
        {/* <S.PageTitle>스크랩</S.PageTitle> */}
        {/* <S.PageShareBtn>공유하기</S.PageShareBtn> */}
      </S.PageHeader>
      <S.UserInfo>
        <S.ProfileImg src="/images/TrailCourseImg/trail11.jpg" />
        <S.Username>댕댕숑</S.Username>
      </S.UserInfo>
      <S.ScrapCategory>
        <S.FeedandTrailCourse>피드</S.FeedandTrailCourse>
        <S.FeedandTrailCourse>산책로</S.FeedandTrailCourse>
      </S.ScrapCategory>
      <TrailCourseScrap />
    </S.Wrapper>
  );
}

export default Scrap;
