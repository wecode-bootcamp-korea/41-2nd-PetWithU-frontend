import styled from 'styled-components';
import theme from '../../styles/theme';

export const Nav = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100px;
  background-color: white;
  border-bottom: 1px solid ${props => props.theme.pointColor};
  z-index: 10;
`;

export const NavBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const Logo = styled.p`
  font-size: 30px;
  cursor: pointer;
`;

export const NavMenu = styled.button`
  background-color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const InputBox = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: ${theme.radius};
  padding: 15px;
`;

export const MyBtnList = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyBtn = styled.button`
  background-color: white;
  border: none;
  margin: 0px 10px 0px 10px;
  font-size: ${props => (props.primary ? '20px' : '30px')};
  cursor: pointer;
`;

export const AddFeedBtn = styled.button`
  width: 100px;
  height: 35px;
  background-color: ${props => props.theme.pointColor};
  border: none;
  border-radius: ${props => props.theme.radius};
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

export const WriteList = styled.ul`
  position: absolute;
  top: 80px;
  right: 50px;
  width: 200px;
  height: 100px;
  border: 1px solid black;
  border-radius: ${theme.radius};
  background-color: white;
  overflow: hidden;
`;
export const WriteBtn = styled.li`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 20px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.pointColor};
    color: white;
  }
`;
