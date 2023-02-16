import React, { useEffect, useState } from 'react';
import * as F from './Feed.styles';
import {
  AiOutlineHeart,
  AiOutlineStar,
  AiFillHeart,
  AiFillStar,
} from 'react-icons/ai';
import { GrShareOption } from 'react-icons/gr';
import { FaRegComment } from 'react-icons/fa';

const FeedBtnList = ({
  likeCount,
  collectionCount,
  comments,
  reviews,
  postId,
  likeState,
  collectionState,
}) => {
  const [likes, setLikes] = useState(likeState);
  const [scrap, setScrap] = useState(collectionState);
  const [commentOn, setCommentOn] = useState(false);
  const [comment, setComment] = useState('');
  const [reviewList, setreviewList] = useState([]);

  const handleLikes = () => {
    fetch(`http://3.38.247.226:3000/community/like/${postId}`, {
      method: 'POST',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTcwNjQ5OH0.pu1WqqhWifWjC4D4Q_CSqQ2vDCJbAISzR7cnWXmNe5g',
      },
    }).then(res => res.json());
    setLikes(!likes);
  };

  const handleStar = () => {
    fetch(`http://3.38.247.226:3000/community/collection/${postId}`, {
      method: 'POST',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTcwNjQ5OH0.pu1WqqhWifWjC4D4Q_CSqQ2vDCJbAISzR7cnWXmNe5g',
      },
    }).then(res => res.json());
    setScrap(!scrap);
  };

  const handleComment = () => {
    setCommentOn(!commentOn);
  };

  const addCommenValue = e => {
    setComment(e.target.value);
  };

  const addComment = e => {
    if ((e.key === 'Enter') & (e.target.value.length > 1)) {
      fetch('http://3.38.247.226:3000/community/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTQyNzg0OX0.eJCOyCmFgkweT5kvq3YGVQU2q7nGSSIJ-4TuJw07HNQ',
        },
        body: JSON.stringify({
          postId: postId,
          content: e.target.value,
        }),
      });
      setComment('');
    }
  };

  // useEffect(() => {
  //   //좋아요
  //   fetch(`http://3.38.247.226:3000/community/like/${postId}`, {
  //     method: 'POST',
  //     headers: {
  //       Authorization:
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTcwNjQ5OH0.pu1WqqhWifWjC4D4Q_CSqQ2vDCJbAISzR7cnWXmNe5g',
  //     },
  //   }).then(res => res.json());
  // }, [likes]);

  // useEffect(() => {
  //   //스크랩
  //   fetch(`http://3.38.247.226:3000/community/collection/${postId}`, {
  //     method: 'POST',
  //     headers: {
  //       Authorization:
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTcwNjQ5OH0.pu1WqqhWifWjC4D4Q_CSqQ2vDCJbAISzR7cnWXmNe5g',
  //     },
  //   }).then(res => res.json());
  // }, [scrap]);

  return (
    <F.CommentList>
      <F.CommentDataList>
        {reviews.map(
          ({ nickname, profileImage, content, createdAt }, index) => {
            return (
              <F.CommentData key={index}>
                <F.CommentUserImg src={profileImage} />
                <F.CommentUserId>{nickname}</F.CommentUserId>
                <F.UsersComment>{content}</F.UsersComment>
              </F.CommentData>
            );
          }
        )}
        {/* {commentList.length > 0 &&
          commentList.map((data, index) => {
            return (
              <F.CommentData key={index}>
                <F.CommentUserImg src="http://k.kakaocdn.net/dn/uCsLz/btrJmxO8ewM/uEhkd5isOAcF2HeTuwpFl1/img_640x640.jpg" />
                <F.CommentUserId>97_bhh</F.CommentUserId>
                <F.UsersComment>{data}</F.UsersComment>
              </F.CommentData>
            );
          })} */}
      </F.CommentDataList>
      <F.BtnList>
        <F.Btns>
          <F.ContentBtn onClick={handleLikes}>
            {likes ? <AiFillHeart /> : <AiOutlineHeart />}
          </F.ContentBtn>
        </F.Btns>
        <F.Btns>
          <F.ContentBtn onClick={handleStar}>
            {scrap ? <AiFillStar /> : <AiOutlineStar />}
          </F.ContentBtn>
        </F.Btns>
        <F.Btns>
          <F.ContentBtn>
            <FaRegComment onClick={handleComment} />
          </F.ContentBtn>
        </F.Btns>
        <F.Btns>
          <F.ContentBtn>
            <GrShareOption />
          </F.ContentBtn>
        </F.Btns>
      </F.BtnList>
      {commentOn && (
        <F.CommentStart>
          <input
            value={comment}
            placeholder="댓글 입력하기"
            onChange={addCommenValue}
            onKeyUp={e => {
              addComment(e);
            }}
          />
        </F.CommentStart>
      )}
    </F.CommentList>
  );
};

export default FeedBtnList;
