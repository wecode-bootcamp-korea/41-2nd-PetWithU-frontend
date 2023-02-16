import React from 'react';
import * as C from './CommunityStyle';

export default function CommunityImgItem({ img, handlePlusItem }) {
  return (
    <>
      <C.CommunityImg
        key={img.id + 1}
        src={img.img}
        alt="img"
        onClick={handlePlusItem}
      />
      <></>
    </>
  );
}
