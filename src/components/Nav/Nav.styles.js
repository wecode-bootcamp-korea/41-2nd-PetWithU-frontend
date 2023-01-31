import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 15vh;
  background-color: white;
  border-bottom: 3px solid ${props => props.theme.pointColor};
`;

export const NavBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 100px;
`;

export const Logo = styled.p`
  font-size: 30px;
`;

export const NavMenu = styled.button`
  background-color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const InputBox = styled.input`
  width: 30%;
  height: 50%;
`;

export const MyBtn = styled.button`
  background-color: white;
  border: none;
  font-size: 20px;
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
