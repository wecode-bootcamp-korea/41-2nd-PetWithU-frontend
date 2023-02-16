import React, { useEffect } from 'react';
import CartList from './CartList';
import * as Ci from './CartStyle';
import useCart from './hooks/useCart';

export default function CartLeft({ item, setItem, totalPrice, setTotalPrice }) {
  const [
    isAllChecked,
    allCheck,
    handleCheckBox,
    found,
    checkList,
    setCheckList,
  ] = useCart(item);

  //  아이템 수량 구하기
  const handleQuantity = (type, id, quantity) => {
    const found = item.filter(el => el.id === id)[0];
    const idx = item.indexOf(found);
    if (quantity === 0) {
      return;
    }
    const itemBox = {
      id: found.id,
      name: found.name,
      url: found.url,
      price: found.price,
      quantity: quantity,
    };
    if (type === 'plus') {
      setItem([...item.slice(0, idx), itemBox, ...item.slice(idx + 1)]);
    } else {
      setItem([...item.slice(9, idx), itemBox, ...item.slice(idx + 1)]);
    }
  };

  const handleRemove = id => {
    setItem(item.filter(el => el.id !== id));
    setCheckList(checkList.filter(check => check !== id));
  };

  // 전체 수량의 총 합계
  useEffect(() => {
    if (found) {
      const filter = found.filter(item => item.length !== 0);

      const sum = filter.map(item => item[0].price * item[0].quantity);
      const reducer = (a, b) => a + b;

      if (sum.length === 0) {
        setTotalPrice(0);
        return;
      }
      const itemTotal = sum.reduce(reducer);
      setTotalPrice(itemTotal);
    } else {
      setTotalPrice(0);
    }
  }, [item, found]);
  return (
    <Ci.CartLeft>
      <Ci.CartLeftTop>
        <Ci.CartTotalSelect
          type="checkbox"
          id="select"
          checked={isAllChecked}
          onChange={e => {
            allCheck(e.currentTarget.checked);
          }}
        />
        <label htmlFor="select" className="selectLabel">
          전체선택
        </label>
      </Ci.CartLeftTop>

      <Ci.CartListContainer>
        <Ci.CartList>
          {item.map(e => {
            return (
              <CartList
                item={e}
                key={e.id}
                setTotalPrice={setTotalPrice}
                checkList={checkList}
                handleCheckBox={handleCheckBox}
                handleRemove={handleRemove}
                found={found}
                handleQuantity={handleQuantity}
              />
            );
          })}
        </Ci.CartList>
      </Ci.CartListContainer>
      <Ci.CartListTotal>
        총금액<span>{totalPrice} 원</span>
      </Ci.CartListTotal>
    </Ci.CartLeft>
  );
}
