import React from 'react';
import * as FD from './FeedDetailStyle';
import { BsHeart } from 'react-icons/bs';
import { BsBookmark } from 'react-icons/bs';
import { BsChat } from 'react-icons/bs';
import { BsShare } from 'react-icons/bs';

export default function FeedDetailRight() {
  return (
    <FD.FeedDetailRight>
      <FD.FeedDetailRightButton>
        <BsHeart />
      </FD.FeedDetailRightButton>
      <FD.FeedDetailRightButton>
        <BsBookmark />
      </FD.FeedDetailRightButton>
      <FD.FeedDetailRightButton>
        <BsChat />
      </FD.FeedDetailRightButton>
      <FD.FeedDetailRightButton>
        <BsShare />
      </FD.FeedDetailRightButton>
    </FD.FeedDetailRight>
  );
}
