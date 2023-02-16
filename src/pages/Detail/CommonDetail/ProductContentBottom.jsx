import React, { useState } from 'react';
import { BiPlusMedical } from 'react-icons/bi';
import { ImMinus } from 'react-icons/im';
import * as P from './ProductDetailStyle';

export default function ProductContentBottom({ imgData, setImgData }) {
  const [count, setCount] = useState(1);

  const handleQuantity = value => {
    if (count === 1 && value === -1) return null;
    setCount(prev => prev + value);
  };

  return (
    <P.ProductContentBottom>
      <P.ProductQuantity>
        <P.QuantityContent>총 수량</P.QuantityContent>
        <P.QuantityCountBox>
          <ImMinus className="icon" onClick={() => handleQuantity(-1)} />
          <P.QuantityCount>{count}</P.QuantityCount>
          <BiPlusMedical className="icon" onClick={() => handleQuantity(1)} />
        </P.QuantityCountBox>
      </P.ProductQuantity>
      <P.ProductTotalPriceBox>
        <P.ProductTotalPriceText>주문금액</P.ProductTotalPriceText>
        <P.ProductTotalPrice>
          <span className="bold">{(imgData.price * count).toString()}</span>원
        </P.ProductTotalPrice>
      </P.ProductTotalPriceBox>

      <P.ProductButtonBox>
        <P.ProductCartButton>장바구니</P.ProductCartButton>
        <P.ProductPurchaseButton>구매하기</P.ProductPurchaseButton>
      </P.ProductButtonBox>
    </P.ProductContentBottom>
  );
}
