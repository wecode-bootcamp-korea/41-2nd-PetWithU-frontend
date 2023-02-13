import styled from 'styled-components';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  height: 900px;
`;

export const PageHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`;

export const PageTitle = styled.p`
  font-size: 20px;
`;

export const PageShareBtn = styled.div`
  width: 6%;
  font-size: 20px;
`;

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Username = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`;

export const ScrapCategory = styled.div`
  width: 50%;
  height: 50px;
  margin: auto;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  margin-bottom: 40px;
`;

export const FeedandTrailCourse = styled.div`
  size: 15px;
  margin: 10px 10px;
`;
