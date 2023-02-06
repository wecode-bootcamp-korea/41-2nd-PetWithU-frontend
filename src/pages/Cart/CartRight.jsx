import React from 'react';
import * as Ci from './CartStyle';
const SHIPPING_FEE = 3000;
export default function CartRight({ totalPrice }) {
  return (
    <Ci.CartRight>
      <Ci.CartRightList>
        <Ci.CartRightListPrice>
          상품가격 <span>0원</span>
        </Ci.CartRightListPrice>
        <Ci.CartRightListDelivery>
          배송비 <span>{SHIPPING_FEE}원</span>
        </Ci.CartRightListDelivery>
        <Ci.CartRightListDiscount>
          할인 <span>0원</span>
        </Ci.CartRightListDiscount>
        <Ci.CartRightListTotal>
          총금액 <span>{totalPrice + SHIPPING_FEE}원</span>
        </Ci.CartRightListTotal>
      </Ci.CartRightList>
      <Ci.CartButton>결제하기</Ci.CartButton>
    </Ci.CartRight>
  );
}
