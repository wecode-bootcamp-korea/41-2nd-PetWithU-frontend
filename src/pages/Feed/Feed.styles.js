import styled from 'styled-components';
import theme from '../../styles/theme';

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
  margin-top: 30px;
  border: 1px solid ${theme.pointColor};
  border-radius: ${theme.radius};
  background-color: white;
  overflow: hidden;
`;

export const FeedHead = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 10px;
  border-bottom: 1px solid ${theme.pointColor};
`;

export const HeadImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const ID = styled.p`
  margin-left: 10px;
  font-size: 20px;
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

export const FeedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentBox = styled.div`
  width: 100%;
  padding: 10px;
`;

export const Tag = styled.p`
  display: inline-block;
  height: 26px;
  margin: 5px;
  padding: 3px;
  border-radius: ${theme.radius};
  background-color: ${theme.pointColor};
  color: white;
  font-size: 15px;
  line-height: 20px;
`;

export const BtnList = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Btns = styled.li`
  width: 25%;
`;

export const ContentBtn = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  background-color: white;
  font-size: 40px;
  cursor: pointer;
  &:hover {
    color: ${theme.pointColor};
  }
`;

export const RightBox = styled.div`
  position: fixed;
  top: 180px;
  right: 30px;
  border: 1px solid ${theme.pointColor};
  border-radius: ${theme.radius};
`;

export const RightTitle = styled.p`
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
`;

export const UserCardList = styled.ul`
  display: flex;
  width: 400px;
  padding: 20px;
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
  width: 200px;
  height: 230px;
  object-fit: cover;
`;

export const UserId = styled.p`
  margin: 10px 0px 10px 0px;
  font-size: 20px;
`;

export const FollowBtn = styled.button`
  width: 200px;
  height: 40px;
  border: 1px solid ${theme.pointColor};
  background-color: aliceblue;
  cursor: pointer;
`;
