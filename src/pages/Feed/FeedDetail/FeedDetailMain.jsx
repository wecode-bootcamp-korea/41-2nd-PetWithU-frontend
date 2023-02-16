import React from 'react';
import FeedReview from './FeedReview';
import FeedDetailRight from './FeedDetailRight';
import * as FD from './FeedDetailStyle';

export default function FeedDetailMain() {
  return (
    <FD.FeedDetailMain>
      <FD.FeedDetailCategory>카테고리</FD.FeedDetailCategory>
      <FD.FeedDetailimgBox>
        <FD.FeedDetailimg
          src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="img"
        />
      </FD.FeedDetailimgBox>
      <FD.FeedDetailContentBox>
        <FD.FeedDetailContent>컨텐츠내용</FD.FeedDetailContent>
      </FD.FeedDetailContentBox>
      <FD.FeedDetailHashTagList>
        <FD.FeedDetailHashTag>해시태그</FD.FeedDetailHashTag>
      </FD.FeedDetailHashTagList>
      <FeedReview />
    </FD.FeedDetailMain>
  );
}
