import React, { useState } from 'react';
import * as P from './ProductDetailStyle';

export default function ProductImgBox() {
  const [img, setImg] = useState(1);
  return (
    <P.ProductImgBox>
      <P.ProductSmallImg>
        {THUMBNAIL_IMAGE.map(item => {
          return (
            <P.ProductSmallImgItem
              src={item.url}
              alt="img"
              key={item.id}
              onMouseEnter={() => setImg(item.id)}
            ></P.ProductSmallImgItem>
          );
        })}
      </P.ProductSmallImg>
      <P.ProductBicImg>
        <P.ProductBicImgItem src={THUMBNAIL_IMAGE[img - 1].url} alt="" />
      </P.ProductBicImg>
    </P.ProductImgBox>
  );
}
const THUMBNAIL_IMAGE = [
  {
    id: 1,
    url: 'https://plus.unsplash.com/premium_photo-1663852248581-71959bd6b5f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1520721973443-8f2bfd949b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1620954492246-f1f107f4ec89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 4,
    url: 'https://plus.unsplash.com/premium_photo-1664371206060-ce36dd67a5fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
  },
];
