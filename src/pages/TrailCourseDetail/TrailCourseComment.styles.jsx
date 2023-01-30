import styled from 'styled-components';
import theme from '../../styles/theme';

export const CommentBox = styled.div`
  width: 50vw;
  height: 135px;
  margin-top: 40px;
`;

export const CommentCount = styled.div`
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  color: rgb(56, 45, 37);
  display: flex;
  align-items: center;
`;

export const CommentInputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const UserProfileBox = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const CommentInput = styled.input`
  width: 95%;
  height: 50px;
  border-radius: ${theme.radius};
  padding-left: 10px;
  border: 1px solid rgb(56, 45, 37, 0.5);
  background-color: rgb(255, 255, 255, 0.5);
`;

export const CommentPostBtn = styled.div`
  width: 40px;
  height: 70px;
  font-size: 15px;
  font-weight: 500;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 5px;
  opacity: 0.5;

  &:hover {
    cursor: pointer;
  }
`;

export const TrailCourseCommentList = styled.div`
  width: 100%;
`;

export const Comment = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const UserProfileImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 20px;
  margin-top: 5px;
`;

export const CommentRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserNickname = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: rgb(56, 45, 37);
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const CommentText = styled.div`
  width: 100%;
  font-size: 15px;
  color: rgb(56, 45, 37, 0.8);
  margin-bottom: 30px;
`;

export const DeleteBtn = styled.div`
  position: absolute;
  top: 8px;
  right: 0px;
  display: ${props => (props.username === '나나바나나' ? '' : 'none')};
`;
