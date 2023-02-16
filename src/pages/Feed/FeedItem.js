import React from 'react';
import FeedBtnList from './FeedBtnList';
import FeedSlideBox from './FeedSlideBox';
import * as F from './Feed.styles';

const FeedItem = ({ item }) => {
  //구조분해할당
  const { postHeader, postContent, reviews } = item;

  const {
    postId,
    userId,
    nickname,
    profileImage,
    createdAt,
    likeCount,
    likeState,
    collectionCount,
    collectionState,
  } = postHeader;

  // 날짜 받기
  const today = new Date();
  const timeValue = new Date(createdAt);

  const feedTime = (now, create) => {
    const betweenTime = Math.floor(
      (now.getTime() - create.getTime()) / (1000 * 60)
    );
    if (betweenTime < 1) {
      return '방금전';
    } else if (betweenTime < 60) {
      return `${betweenTime}분 전`;
    } else if (betweenTime < 1440) {
      return `${Math.floor(betweenTime / 60)}시간 전`;
    } else if (betweenTime > 1440) {
      return `${Math.floor(betweenTime / (24 * 60))}일 전`;
    }
  };

  return (
    <F.FeedContents key={(postId, userId)}>
      <F.FeedHead>
        <F.HeadImg src={`${profileImage}`} alt="유저" />
        <F.ID>{nickname}</F.ID>
        <F.FeedTime>{feedTime(today, timeValue)}</F.FeedTime>
      </F.FeedHead>
      <F.ContentBox>
        <F.ImgBox>
          <FeedSlideBox postContent={postContent} reviews={reviews} />
        </F.ImgBox>
      </F.ContentBox>
      <F.BtnList>
        <FeedBtnList
          postId={postId}
          likeCount={likeCount}
          collectionCount={collectionCount}
          likeState={likeState}
          collectionState={collectionState}
          reviews={reviews}
          feedTime={feedTime}
        />
      </F.BtnList>
    </F.FeedContents>
  );
};

export default FeedItem;
