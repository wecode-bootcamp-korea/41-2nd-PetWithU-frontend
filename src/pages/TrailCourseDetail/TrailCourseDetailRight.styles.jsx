import styled from 'styled-components';
import theme from '../../styles/theme';

export const DetailRight = styled.div`
  width: 24.5vw;
  height: 100%;
  position: absolute;
  right: -24.5vw;
`;

export const FloatingBox = styled.div`
  width: 100%;
  height: 90vh;
  position: sticky;
  top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

export const TrailCourseHeartBtn = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 27px;
  background-color: rgb(255, 255, 255, 0.3);
  color: rgb(56, 45, 37, 0.7);

  &:hover {
    cursor: pointer;
  }
`;

export const TrailCourseBookmarkBtn = styled(TrailCourseHeartBtn)`
  font-size: 25px;
`;

export const TrailCourseCommentBtn = styled(TrailCourseBookmarkBtn)``;

export const TrailCourseShareBtn = styled(TrailCourseBookmarkBtn)``;

export const ScrollToTop = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgb(56, 45, 37, 0.1);
  position: absolute;
  right: 30px;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  color: rgb(56, 45, 37, 0.7);

  &:hover {
    cursor: pointer;
  }
`;
