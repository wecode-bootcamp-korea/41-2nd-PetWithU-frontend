import React from 'react';
import FeedDetailMain from './FeedDetailMain';
import FeedDetailRight from './FeedDetailRight';
import * as FD from './FeedDetailStyle';

export default function FeedDetail() {
  return (
    <FD.FeedDetailContainer>
      <FeedDetailMain />
      <FeedDetailRight />
    </FD.FeedDetailContainer>
  );
}
