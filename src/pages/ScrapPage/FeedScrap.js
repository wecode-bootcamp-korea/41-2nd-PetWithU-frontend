import React, { useEffect, useState } from 'react';
import * as S from './ScrapPage.styles';

const FeedScrap = () => {
  return (
    <S.ScrapList>
      <S.ScrapTitle>좋아요</S.ScrapTitle>
      <S.LikesItemList>
        <S.LikesItems>
          <img src="/images/image.png" alt="이미지" />
        </S.LikesItems>
      </S.LikesItemList>
      <S.ScrapTitle>스크랩</S.ScrapTitle>
      <S.CollectionItemList>
        <S.LikesItems>
          <img src="/images/123.png" alt="이미지" />
        </S.LikesItems>
      </S.CollectionItemList>
    </S.ScrapList>
  );
};

export default FeedScrap;
