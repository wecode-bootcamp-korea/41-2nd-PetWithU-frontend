import React, { useEffect, useRef, useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import CommunityForm from './CommunityForm';
import CommunitySearch from './CommunitySearch';
import CommunityImgItem from './CommunityImgItem';
import * as C from './CommunityStyle';

export default function CommunityImg({
  idx,
  data,
  item,
  setData,
  imgPreview,
  setImgPreview,
}) {
  const [plusItem, setPlusItem] = useState([]);
  const plusItemId = useRef(0);
  const findedItem = data.find(data => data.id === item.id);

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
  };
  const removeItem = e => {
    let newArr = [...imgPreview];
    setImgPreview(newArr.filter(item => item.id !== e.id));
    setData(data.filter(item => item.id !== e.id));
  };

  return (
    <C.CommunityBox key={idx}>
      <C.ImgContainer>
        <CommunityImgItem
          img={imgPreview.filter(list => list.id === item.id)[0]}
          handlePlusItem={handlePlusItem}
        />
        <BsTrash className="trashIcon" onClick={() => removeItem(item)} />
        {plusItem.map(item => {
          return (
            <div key={item.id}>
              <C.PlusItem style={{ left: item.offset.x, top: item.offset.y }}>
                +
              </C.PlusItem>
              <CommunitySearch item={item} findedItem={findedItem} />
            </div>
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
