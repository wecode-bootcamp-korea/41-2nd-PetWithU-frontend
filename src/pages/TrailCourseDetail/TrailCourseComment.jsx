import React, { useState } from 'react';
import * as T from './TrailCourseComment.styles';
import { IoMdClose } from 'react-icons/io';

function TrailCourseComment({
  postComment,
  commentList,
  commentNumber,
  onDelete,
}) {
  // useEffect(() => {
  //   fetch('/data/TrailCourseCommentData.json')
  //     .then(res => res.json())
  //     .then(result => {
  //       setCommentList(result);
  //     });
  // }, []);

  const [inputValue, setInputValue] = useState('');

  const onChange = e => {
    setInputValue(e.target.value);
  };

  const postCommentDone = inputValue => () => {
    postComment(inputValue);
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
        {commentList.map(({ id, userProfileImg, username, content }) => {
          return (
            <T.Comment key={id}>
              <T.UserProfileImg src={userProfileImg} />
              <T.CommentRight>
                <T.UserNickname>{username}</T.UserNickname>
                <T.CommentText>{content}</T.CommentText>
              </T.CommentRight>
              <T.DeleteBtn onClick={onDelete(id)} username={username} id={id}>
                <IoMdClose />
              </T.DeleteBtn>
            </T.Comment>
          );
        })}
      </T.TrailCourseCommentList>
    </>
  );
}

export default TrailCourseComment;
