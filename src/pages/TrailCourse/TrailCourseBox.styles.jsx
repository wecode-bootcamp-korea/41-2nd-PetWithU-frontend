import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import styled, { withTheme } from 'styled-components';
import theme from '../../styles/theme';

export const TrailCourse = styled.div`
  width: 31.5%;
  height: 430px;
`;

export const TrailCourseImgBox = styled.div`
  width: 100%;
  height: 64%;
  border-radius: ${theme.radius};
  display: flex;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

export const TrailCourseImg = styled.img`
  width: 100%;
  height: 100%;
  /* border-radius: ${theme.radius}; */
`;

export const TrailScrapBtn = styled.div`
  width: 12%;
  height: 16%;
  font-size: 25px;
  color: ${props => (props.clickScrap ? `${theme.pointColor}` : 'white')};
  opacity: ${props => (props.clickScrap ? '1' : '0.7')};
  display: flex;
  justify-content: center;
  position: absolute;
  right: 5px;
  bottom: -5px;

  &:hover {
    opacity: 0.4;
  }
`;

export const TrailCourseTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-top: 20px;
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const UserInfo = styled.div`
  width: 100%;
  margin-top: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 5px;
`;

export const UserNickName = styled.p`
  font-size: 14px;
`;

export const PostInfo = styled.div`
  width: 100%;
  margin-top: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;
