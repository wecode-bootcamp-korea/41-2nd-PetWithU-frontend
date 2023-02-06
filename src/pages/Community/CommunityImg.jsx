import React, { useCallback, useRef, useState } from 'react';
import * as C from './CommunityStyle';
import { BsTrash } from 'react-icons/bs';
import CommunityForm from './CommunityForm';
import CommunityPlusItem from './CommunityPlusItem';

export default function CommunityImg({ idx, data, item, setData }) {
  const [plusItem, setPlusItem] = useState([]);
  const plusItemId = useRef(0);
  const findedItem = data.find(data => data.id === item.id);
  const [productId, setProductId] = useState();

  const handlePlusItem = e => {
    setPlusItem([
      ...plusItem,
      {
        id: plusItemId.current++,
        offset: {
          x: e.nativeEvent.offsetX,
          y: e.nativeEvent.offsetY,
        },
      },
    ]);
    addTagList(e);
    console.log('1', productId);
  };
  const addTagList = e => {
    findedItem.tagList = [
      ...findedItem.tagList,
      {
        id: productId,
        offset: {
          x: e.nativeEvent.offsetX,
          y: e.nativeEvent.offsetY,
        },
      },
    ];
  };

  const removeItem = e => {
    setData(data.filter(item => item.id !== e.id));
  };

  return (
    <C.CommunityBox>
      <C.ImgContainer key={idx}>
        <C.CommunityImg src={item.img} alt="img" onClick={handlePlusItem} />
        <BsTrash className="trashIcon" onClick={e => removeItem(item)} />
        {plusItem.map((item, idx) => {
          return (
            <CommunityPlusItem
              key={idx}
              item={item}
              setProductId={setProductId}
              productId={productId}
              findedItem={findedItem}
              plusItem={plusItem}
            />
          );
        })}
      </C.ImgContainer>
      <C.CommunityFormContainer>
        <CommunityForm
          item={item}
          data={data}
          setData={setData}
          findedItem={findedItem}
        />
      </C.CommunityFormContainer>
    </C.CommunityBox>
  );
}
