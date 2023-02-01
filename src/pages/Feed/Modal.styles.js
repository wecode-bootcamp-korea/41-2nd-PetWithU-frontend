import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 200px;
  height: 100px;
  background-color: white;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
`;

export const ModalWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 100px;
`;

export const ModalList = styled.li`
  width: 100%;
  display: flex;
  color: #000;
  cursor: pointer;
  .div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    p {
      font-size: 12px;
    }
  }
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
`;
