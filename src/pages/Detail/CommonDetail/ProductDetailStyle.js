import styled from 'styled-components';

export const ProductContainer = styled.div`
  margin-top: 100px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProductImgBox = styled.div`
  display: flex;
`;
export const ProductSmallImg = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  cursor: pointer;
`;
export const ProductSmallImgItem = styled.img`
  object-fit: cover;
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
  border-radius: ${props => props.theme.radius};
`;
export const ProductBicImg = styled.div`
  margin-left: 10px;
  margin-right: 50px;
  border-radius: ${props => props.theme.radius};
  overflow: hidden;
`;
export const ProductBicImgItem = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
`;

export const ProductContentContainer = styled.div`
  width: 470px;
  height: 400px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export const ProductContentTop = styled.div`
  display: flex;
  flex-flow: column;
`;
export const ProductCategory = styled.p`
  font-size: 0.8rem;
  color: gray;
  margin-bottom: 10px;
`;
export const ProductNameBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProductName = styled.p`
  font-size: 1.7rem;
`;
export const ProductIcons = styled.div`
  font-size: 1.7rem;
  color: gray;
  .bookMark {
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.pointColor};
    }
  }
  .share {
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.pointColor};
    }
  }
`;
export const ProductReview = styled.div`
  margin: 20px 0;
  .heart {
    color: ${props => props.theme.pointColor};
  }
`;

export const ProductPrice = styled.div`
  .bold {
    font-weight: bold;
    font-size: 2rem;
  }
`;
export const ProductContentBottom = styled.div`
  display: flex;
  flex-flow: column;
`;
export const ProductQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const QuantityContent = styled.p``;
export const QuantityCountBox = styled.div`
  display: flex;
  align-items: center;

  .icon {
    cursor: pointer;
  }
`;
export const QuantityCount = styled.p`
  margin: 0 10px;
  font-size: 1.5rem;
`;
export const ProductTotalPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
export const ProductTotalPriceText = styled.p``;
export const ProductTotalPrice = styled.p`
  .bold {
    font-weight: bold;
    font-size: 2rem;
  }
`;

export const ProductButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProductCartButton = styled.button`
  width: 50%;
  padding: 15px;
  border: none;
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.pointColor};
  color: rgb(243, 234, 221);
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export const ProductPurchaseButton = styled.button`
  width: 50%;
  margin-left: 10px;
  border: none;
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.pointColor};
  color: rgb(243, 234, 221);
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
