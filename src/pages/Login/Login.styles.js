import styled from 'styled-components';
import theme from '../../styles/theme';

export const Login = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 700px;
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
  font-family: 'Luckiest Guy', cursive;
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

export const BtnList = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
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
  width: 80px;
  height: 80px;
  margin: 5px 0px 5px 0px;
  border: none;
  border-radius: 50%;
  background-color: ${props => (props.primary ? '#f9e000' : 'white')};
  font-size: 60px;
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
