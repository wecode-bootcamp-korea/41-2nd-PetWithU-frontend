import React from 'react';
import * as FD from './FeedDetailStyle';
import FeedReviewList from './FeedReviewList';

export default function FeedReview() {
  return (
    <FD.FeedDetailReviewBox>
      <FD.FeedDetailReviewInputBox>
        <FD.FeedDetailReviewListProfile>
          <FD.FeedDetailReviewListProfileImg
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="profile"
          />
        </FD.FeedDetailReviewListProfile>
        <FD.FeedDetailReviewInput
          type="text"
          placeholder="댓글을 입력해주세요:)"
        />
        <FD.FeedDetailReviewButton>입력</FD.FeedDetailReviewButton>
      </FD.FeedDetailReviewInputBox>
      <FeedReviewList />
    </FD.FeedDetailReviewBox>
  );
}
