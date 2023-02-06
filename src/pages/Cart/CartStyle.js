import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const CartLeft = styled.div`
  width: 60%;
`;
export const CartLeftTop = styled.div`
  padding-left: 40px;
  display: flex;
  align-items: center;
  .selectLabel {
  }
`;
export const CartTotalSelect = styled.input`
  appearance: none;
  width: 1.3rem;
  height: 1.3rem;
  border: 2px solid ${props => props.theme.pointColor};
  border-radius: ${props => props.theme.radius};

  &:checked {
    background-color: ${props => props.theme.pointColor};
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(243, 234, 221)' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;
export const CartListContainer = styled.div`
  margin-top: 20px;
  padding: 50px 40px;
  background-color: #fff;
  border: 1px solid ${props => props.theme.pointColor};
  border-radius: ${props => props.theme.radius};
`;
export const CartList = styled.ul``;
export const CartListTotal = styled.div`
  width: 100%;
  background-color: ${props => props.theme.pointColor};
  color: rgb(243, 234, 221);
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 30px 40px;
  border-radius: ${props => props.theme.radius};
`;
export const CartListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  text-align: left;
  &:last-of-type {
    margin-bottom: 0;
  }
  .close {
    cursor: pointer;
  }
`;
export const CartListItemCheck = styled.input`
  margin-right: 10px;
  appearance: none;
  width: 1.3rem;
  height: 1.3rem;
  border: 2px solid ${props => props.theme.pointColor};
  border-radius: ${props => props.theme.radius};

  &:checked {
    background-color: ${props => props.theme.pointColor};
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(243, 234, 221)' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;
export const CartListImgBox = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;
export const CartListImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: ${props => props.theme.radius};
  object-fit: cover;
`;
export const CartListText = styled.p`
  width: 100px;
`;
export const CartListQuantity = styled.p`
  width: 100px;
  display: flex;
  align-items: center;
  .quantity {
    font-weight: bold;
    margin: 0 10px;
  }
  .plus {
  }
  .minus {
  }
`;

export const CartListPrice = styled.p`
  width: 100px;
`;

export const CartRight = styled.div`
  width: 400px;
  margin-top: 45px;
`;
export const CartRightList = styled.ul`
  width: 100%;
  background-color: #fff;
  border: 1px solid ${props => props.theme.pointColor};
  border-radius: ${props => props.theme.radius};
  padding: 20px;

  li {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    span {
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`;
export const CartRightListPrice = styled.li``;
export const CartRightListDelivery = styled.li``;
export const CartRightListDiscount = styled.li``;
export const CartRightListTotal = styled.li``;
export const CartButton = styled.button`
  width: 100%;
  font-size: 1.4rem;
  background-color: ${props => props.theme.pointColor};
  color: rgb(243, 234, 221);
  border: none;
  border-radius: ${props => props.theme.radius};
  padding: 15px 0;
  margin-top: 20px;
  cursor: pointer;
`;
