import styled from 'styled-components';
import theme from '../../styles/theme';

export const TrailCourseFilter = styled.div`
  height: 90px;
  margin-top: -25px;
  z-index: 100;
  position: absolute;
  display: flex;
  left: 130px;
`;

export const BigCategoryFilter = styled.div`
  width: 150px;
  background-color: white;
  border-radius: ${theme.radius};
`;

export const State = styled.div`
  height: 45px;
  font-size: 15px;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 15px;

  .arrowForward {
    position: absolute;
    right: 15px;
  }

  &:hover {
    background-color: rgba(164, 32, 35, 0.2);
    z-index: 10;
  }
`;

export const SmallCategoryFilter = styled.div`
  width: 150px;
  height: 450px;
  overflow: scroll;
  z-index: 100;
  margin-left: 5px;
  background-color: white;
  border-radius: ${theme.radius};

  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.pointColor};
    border-radius: ${theme.radius};
  }
`;

export const City = styled.div`
  height: 45px;
  font-size: 15px;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 15px;

  .arrowForward {
    position: absolute;
    right: 15px;
  }

  &:hover {
    background-color: rgba(164, 32, 35, 0.2);
    z-index: 10;
  }
`;
