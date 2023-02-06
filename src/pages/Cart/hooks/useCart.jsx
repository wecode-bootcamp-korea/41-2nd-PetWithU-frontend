import React, { useState, useEffect } from 'react';

export default function useCart(item) {
  const [checkList, setCheckList] = useState([]);

  //  아이템 전체 체크박스
  const isAllChecked = item.length === checkList.length && checkList !== 0;

  const allCheck = checked => {
    if (checked) {
      const checkItems = [];
      item.map(cart => checkItems.push(cart.id));
      setCheckList(checkItems);
    } else {
      setCheckList([]);
    }
  };

  // 아이템 체크박스
  const handleCheckBox = (checked, id) => {
    if (checked) {
      setCheckList(prev => [...prev, id]);
    } else {
      setCheckList(checkList.filter(check => check !== id));
    }
  };

  const found = checkList.map(check => {
    return item.filter(el => el.id === check);
  });
  return [
    isAllChecked,
    allCheck,
    handleCheckBox,
    found,
    checkList,
    setCheckList,
  ];
}
