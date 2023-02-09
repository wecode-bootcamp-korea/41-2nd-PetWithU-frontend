import React from 'react';
import * as FD from './FeedDetailStyle';

export default function FeedReviewList() {
  return (
    <FD.FeedDetailReviewList>
      <FD.FeedDetailReviewListItems>
        <FD.FeedDetailReviewListProfile>
          <FD.FeedDetailReviewListProfileImg
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="profile"
          />
        </FD.FeedDetailReviewListProfile>
        <FD.FeedDetailReviewListcontentList>
          <FD.FeedDetailReviewListcontent>
            <FD.FeedDetailReviewListcontentNickName>
              닉네임
            </FD.FeedDetailReviewListcontentNickName>
            <FD.FeedDetailReviewListcontentText>
              댓글
            </FD.FeedDetailReviewListcontentText>
          </FD.FeedDetailReviewListcontent>
        </FD.FeedDetailReviewListcontentList>
      </FD.FeedDetailReviewListItems>
    </FD.FeedDetailReviewList>
  );
}
