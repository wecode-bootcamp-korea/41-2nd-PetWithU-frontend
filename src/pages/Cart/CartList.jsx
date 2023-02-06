import React, { useEffect, useState } from 'react';
import * as Ci from './CartStyle';
import { GrClose } from 'react-icons/gr';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

export default function CartList({
  item,
  handleCheckBox,
  checkList,
  handleQuantity,
  handleRemove,
}) {
  return (
    <Ci.CartListItem>
      <Ci.CartListImgBox>
        <Ci.CartListItemCheck
          type="checkbox"
          onChange={e => handleCheckBox(e.currentTarget.checked, item.id)}
          checked={checkList.includes(item.id)}
          value=""
        />
        <Ci.CartListImg src={item.url} />
      </Ci.CartListImgBox>
      <Ci.CartListText>{item.name}</Ci.CartListText>
      <Ci.CartListQuantity>
        <AiOutlineMinus
          className="minus"
          onClick={() => handleQuantity('plus', item.id, item.quantity - 1)}
        />
        <span className="quantity">{item.quantity}</span>
        <AiOutlinePlus
          onClick={() => handleQuantity('plus', item.id, item.quantity + 1)}
        />
      </Ci.CartListQuantity>
      <Ci.CartListPrice>{item.price * item.quantity}원</Ci.CartListPrice>
      <GrClose className="close" onClick={() => handleRemove(item.id)} />
    </Ci.CartListItem>
  );
}
