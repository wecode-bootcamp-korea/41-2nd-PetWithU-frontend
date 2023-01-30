import styled from 'styled-components';
import theme from '../../styles/theme';

export const ThumbnailBox = styled.div`
  width: 100vw;
  height: 400px;
  position: relative;
  overflow: hidden;
`;
export const Thumbnail = styled.img`
  width: 100%;
  position: absolute;
  top: -50%;
`;

export const DetailContentWrapper = styled.div`
  width: 50vw;
  height: 100%;
  margin: auto;
  position: relative;
`;

export const DetailContentHeader = styled.div`
  width: 100%;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const DetailCategory = styled.p`
  font-size: 15px;
  margin-bottom: 20px;
  color: rgb(56, 45, 37);
`;

export const DetailTitle = styled.p`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 40px;
  color: rgb(56, 45, 37);
`;

export const UserInfo = styled.div`
  height: 70x;
  display: flex;
  justify-content: flex-start;
`;

export const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const UserInfoRight = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20px;
`;

export const UserNickname = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 9px;
`;

export const IssueDate = styled.p`
  font-size: 14px;
`;

export const DetailContent = styled.div`
  width: 100%;
`;

export const LocationDetail = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
`;

export const LocationName = styled.span`
  font-size: 16px;
  margin-left: 5px;
`;

export const DetailContentMap = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 90px;
  border: 1px solid black;
`;

export const DetailContentBottom = styled.div`
  width: 100%;
  font-size: 15px;
  color: rgb(56, 45, 37);
  margin-top: 70px;
`;

export const UserInfoBottom = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(56, 45, 37, 0.5);
`;
