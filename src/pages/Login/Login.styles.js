import styled from 'styled-components';
import theme from '../../styles/theme';

export const Login = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 70vh;
`;

export const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  height: 100%;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 700;
  padding: 30px;
  font-family: Gugi, cursive;
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  padding: 20px;
`;

export const InputBox = styled.div`
  width: 60%;
  overflow: hidden;
  border: 1px solid ${theme.pointColor};
  border-radius: ${theme.radius};
  border-bottom: none;
`;

export const IdInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid black;
`;

export const LoginBtn = styled.button`
  width: 60%;
  height: 50px;
  margin: 20px 0px 5px 0px;
  color: white;
  background-color: ${theme.pointColor};
  border: none;
  border-radius: ${theme.radius};
  font-size: 15px;
  cursor: pointer;
`;

export const SotialBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 50px;
  margin: 5px 0px 5px 0px;
  border: 1px;
  border-radius: ${theme.radius};
  background-color: ${props => (props.primary ? 'yellow' : 'skyblue')};
  font-size: 20px;
  cursor: pointer;
`;

export const SotialText = styled.p`
  font-size: 15px;
  margin-left: 10px;
`;

export const ToSignup = styled.a`
  text-decoration: none;
  margin: 10px 0px 10px 0px;
`;
