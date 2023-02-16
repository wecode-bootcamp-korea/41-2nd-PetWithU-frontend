import React from 'react';
import FeedDetailMain from './FeedDetailMain';
import * as FD from './FeedDetailStyle';
import FeedDetailRight from './FeedDetailRight';

export default function FeedDetail() {
  return (
    <FD.FeedDetailContainer>
      <FeedDetailMain />
      <FeedDetailRight />
    </FD.FeedDetailContainer>
  );
}
