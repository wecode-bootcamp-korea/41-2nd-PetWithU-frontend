import styled from 'styled-components';
import theme from '../../styles/theme';

export const TotalPosts = styled.div`
  width: 70vw;
  height: 35px;
  margin: auto;
  font-size: 15px;
  display: flex;
  align-items: center;
`;

export const TrailCourseWrapper = styled.div`
  width: 70vw;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const HandleMoreBtn = styled.div`
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  p {
    width: 65px;
    border: 1px solid black;
    padding: 5px;
    display: flex;
    justify-content: center;
  }
`;
