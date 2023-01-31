import styled from 'styled-components';
import theme from '../../styles/theme';

export const SearchContainer = styled.div`
  width: 500px;
  height: 40px;
  z-index: 10;
  border-radius: 5px;
`;

export const SearchBox = styled.input`
  width: 100%;
  height: 40px;
`;

export const SearchListContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 10px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: ${theme.radius};
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SearchItemList = styled.li`
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export const SearchItemImg = styled.img`
  width: 70px;
  height: 70px;
`;

export const ItemDec = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ItemText = styled.p`
  font-size: 20px;
  margin-left: 10px;
  margin-bottom: ${props => (props.primary ? '10px' : '0px')};
`;
