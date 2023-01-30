import styled from 'styled-components';
import theme from '../../styles/theme';

export const CategoryWrapper = styled.div`
  width: 70vw;
  height: 100px;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const PlaceCategory = styled.button`
  width: 65px;
  height: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  border-radius: ${theme.radius};
  margin-right: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  font-weight: 700;
  color: ${theme.pointColor};
  &:hover {
    cursor: pointer;
  }
`;

export const FilteredCategory = styled.div`
  height: 23px;
  display: flex;
  align-items: center;
`;

export const FilterBackground = styled.div`
  height: 23px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  margin-left: 5px;
  padding: 10px;
  background-color: ${theme.pointColor};
`;

export const Filter = styled.p`
  font-size: 15px;
  color: white;
`;

export const ResetFilter = styled.div`
  font-size: 15px;
  color: ${theme.pointColor};
  font-weight: 700;
  margin-left: 13px;

  &:hover {
    cursor: pointer;
  }
`;
