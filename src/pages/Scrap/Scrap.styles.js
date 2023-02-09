import styled from 'styled-components';
import theme from '../../styles/theme';

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

export const ProfileImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid red;
`;

export const Username = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const ScrapCategory = styled.div`
  width: 100%;
  border: 1px solid red;
  display: flex;
  justify-content: center;
`;

export const FeedandTrailCourse = styled.div`
  size: 15px;
  margin: 10px 10px;
`;
