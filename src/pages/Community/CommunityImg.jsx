import React, { useContext, useRef } from 'react';
import * as C from './CommunityStyle';
import { BsTrash } from 'react-icons/bs';
import CommunityForm from './CommunityForm';
import CommunityPlusItem from './CommunityPlusItem';
import { PlusContext } from './context/PlusContext';

export default function CommunityImg({ idx, imgUrl, addCommunityForm }) {
  const { plusItem, setPlusItem } = useContext(PlusContext);
  const plusId = useRef(0);
  const handlePlusItem = e => {
    setPlusItem([
      ...plusItem,
      {
        id: plusId.current++,
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
      },
    ]);
  };
  console.log(plusItem);
  return (
    <C.CommunityBox>
      <C.ImgContainer key={idx}>
        <C.CommunityImg src={imgUrl} alt="img" onClick={handlePlusItem} />
        <BsTrash className="trashIcon" />
        {plusItem.map(item => {
          return <CommunityPlusItem item={item} />;
        })}
      </C.ImgContainer>
      <C.CommunityFormContainer>
        <CommunityForm addCommunityForm={addCommunityForm} />
      </C.CommunityFormContainer>
    </C.CommunityBox>
  );
}
