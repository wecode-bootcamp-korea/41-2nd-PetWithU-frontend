import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { GrShareOption } from 'react-icons/gr';
import * as F from './Feed.styles';

function Feed() {
  const [feeds, setFeeds] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/data/feedData.json')
      .then(res => res.json())
      .then(data => setFeeds(data));
  }, []);

  useEffect(() => {
    fetch('/data/rightData.json')
      .then(res => res.json())
      .then(data => setUsers(data));
  });

  return (
    <F.FeedContainer>
      <F.Feeds>
        {feeds.map(({ userId, userImg, feedImg, feedText, tag }) => {
          return (
            <F.FeedContents key={userId}>
              <F.FeedHead>
                <F.HeadImg src={`${userImg}`} alt="유저" />
                <F.ID>{userId}</F.ID>
              </F.FeedHead>
              <F.ImgBox>
                <F.FeedImg src={`${feedImg}`} alt="유저" />
              </F.ImgBox>
              <F.ContentBox>
                <p>{feedText}</p>
                {tag.map((tags, index) => {
                  return <F.Tag key={index}>{tags}</F.Tag>;
                })}
              </F.ContentBox>
              <F.BtnList>
                {BTN_LIST.map((btns, index) => {
                  return (
                    <F.Btns key={index}>
                      <F.ContentBtn>{btns}</F.ContentBtn>
                    </F.Btns>
                  );
                })}
              </F.BtnList>
            </F.FeedContents>
          );
        })}
      </F.Feeds>
      <F.RightBox>
        <F.RightTitle>👍 추천! 내 취향과 비슷한 유저들</F.RightTitle>
        <F.UserCardList>
          {users.map(({ userImg, userId }) => {
            return (
              <F.UserCard key={userId}>
                <F.UserImg src={`${userImg}`} alt="유저이미지" />
                <F.UserId>{userId}</F.UserId>
                <F.FollowBtn>팔로우</F.FollowBtn>
              </F.UserCard>
            );
          })}
        </F.UserCardList>
      </F.RightBox>
    </F.FeedContainer>
  );
}

export default Feed;

const BTN_LIST = [
  <AiOutlineHeart />,
  <AiOutlineStar />,
  <FaRegComment />,
  <GrShareOption />,
];
