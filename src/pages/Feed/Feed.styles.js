import styled from 'styled-components';
import theme from '../../styles/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const FeedContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

export const Feeds = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeedContents = styled.div`
  width: 500px;
  margin-top: 120px;
  border-radius: ${theme.radius};
  background-color: white;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const FeedHead = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 10px;
`;

export const HeadImg = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border-radius: 50%;
`;

export const ID = styled.p`
  margin: 6px 0px 0px 13px;
`;

export const FeedTime = styled.p`
  font-size: 13px;
  margin-left: 300px;
`;

export const ImgBox = styled.div`
  width: 500px;
`;

export const FeedImg = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
`;

export const Tag = styled.p`
  display: inline-block;
  height: 26px;
  margin: 15px 5px 0px 0px;
  padding-left: 3px;
  border-radius: ${theme.radius};
  background-color: rgba(0, 0, 0, 0.1);
  color: ${theme.pointColor};
  font-size: 15px;
  line-height: 20px;
`;

export const BtnList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6px 0px;
  width: 100%;
  /* height: 70px; */
  font-size: 30px;
`;

export const Btns = styled.li`
  width: 25%;
`;

export const ContentBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border: none;
  background-color: white;
  font-size: 30px;
  color: ${theme.pointColor};
  cursor: pointer;
  &:hover {
    color: ${theme.pointColor};
  }
`;

export const Nums = styled.p`
  font-size: 14px;
  margin-left: 2px;
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 150px;
  left: 30px;
  height: 500px;
  border-radius: ${theme.radius};
`;

export const RightTitle = styled.p`
  width: 100%;
  height: 40px;
  margin-left: 60px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
`;

export const UserCardList = styled.ul`
  display: flex;
  width: 400px;
  padding: 20px;
  margin-left: 60px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const UserCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const UserImg = styled.img`
  width: 300px;
  height: 400px;
`;

export const UserId = styled.p`
  margin: 10px 0px 10px 0px;
  font-size: 20px;
`;

export const FollowBtn = styled.button`
  width: 200px;
  height: 40px;
  border: none;
  border-radius: ${theme.radius};
  color: white;
  background-color: ${theme.pointColor};
  cursor: pointer;
`;

export const CommentDataList = styled.ul`
  position: relative;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CommentData = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  margin-left: 20px;
  font-size: 17px;
  line-height: 20px;
`;

export const CommentUserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const CommentUserId = styled.p`
  margin-left: 10px;
  font-size: 15px;
`;
export const UsersComment = styled.p`
  margin-left: 10px;
  font-size: 14px;
`;

export const CommentList = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
`;

export const CommentStart = styled.div`
  width: 500px;
  input {
    width: 100%;
    height: 30px;
  }
`;
