import React, { useState } from 'react';
import * as T from './TrailCourseComment.styles';
import { IoMdClose } from 'react-icons/io';

function TrailCourseComment({ commentList, commentNumber, commentFetch }) {
  const [inputValue, setInputValue] = useState('');

  // useEffect(() => {
  //   fetch('/data/TrailCourseCommentData.json')
  //     .then(res => res.json())
  //     .then(result => {
  //       setCommentList(result);
  //     });
  // }, []);

  const onChange = e => {
    setInputValue(e.target.value);
  };

  const postCommentDone = inputValue => () => {
    commentFetch(inputValue);
    setInputValue('');
  };

  const handleComment = () => {
    inputValue === ''
      ? alert('내용을 입력하세요')
      : postCommentDone(inputValue);
  };

  return (
    <>
      <T.CommentBox>
        <T.CommentCount>댓글 {commentNumber} </T.CommentCount>
        <T.CommentInputBox>
          <T.UserProfileBox src="/images/TrailCourseImg/trail1.jpg" />
          <T.CommentInput
            placeholder="펫위주 유저들과 정보를 공유해보세요."
            value={inputValue}
            onChange={onChange}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handleComment();
              }
            }}
          />
          <T.CommentPostBtn onClick={postCommentDone(inputValue)}>
            입력
          </T.CommentPostBtn>
        </T.CommentInputBox>
      </T.CommentBox>
      <T.TrailCourseCommentList>
        {commentList.map(({ reviewId, profileImage, nickname, content }) => {
          return (
            <T.Comment key={reviewId}>
              <T.UserProfileImg src={profileImage} />
              <T.CommentRight>
                <T.UserNickname>{nickname}</T.UserNickname>
                <T.CommentText>{content}</T.CommentText>
              </T.CommentRight>
              {/* <T.DeleteBtn onClick= username={username} id={id}>
                <IoMdClose />
              </T.DeleteBtn> */}
            </T.Comment>
          );
        })}
      </T.TrailCourseCommentList>
    </>
  );
}

export default TrailCourseComment;
