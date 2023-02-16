import React, { useState, useEffect } from 'react';
import CartRight from './CartRight';
import * as Ci from './CartStyle';
import CartLeft from './CartLeft';

function Cart() {
  const [item, setItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setItem(CART_ITEM);
  }, []);
  console.log(item);
  return (
    <Ci.CartContainer>
      <CartLeft
        item={item}
        setItem={setItem}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
      <CartRight totalPrice={totalPrice} />
    </Ci.CartContainer>
  );
}

export default Cart;
const CART_ITEM = [
  {
    id: 1,
    name: '고양이 사료',
    url: 'https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    price: 10000,
    quantity: 1,
  },
  {
    id: 2,
    name: '강아지 사료',
    url: 'https://images.unsplash.com/photo-1647616350787-6428e907a7fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
    price: 20000,
    quantity: 1,
  },
  {
    id: 3,
    name: '애완용품',
    url: 'https://images.unsplash.com/photo-1527150602-a98f7a6f2746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    price: 30000,
    quantity: 1,
  },
];
