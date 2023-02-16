import React, { useState } from 'react';
import * as P from './ProductDetailStyle';

export default function ProductImgBox({ imgData }) {
  const [img, setImg] = useState(0);
  return (
    <P.ProductImgBox>
      <P.ProductSmallImg>
        {imgData.imageUrl.map((item, idx) => {
          return (
            <P.ProductSmallImgItem
              src={item}
              alt="img"
              key={idx}
              onMouseEnter={() => setImg(idx)}
            ></P.ProductSmallImgItem>
          );
        })}
      </P.ProductSmallImg>
      <P.ProductBicImg>
        <P.ProductBicImgItem src={imgData.imageUrl[img]} alt="" />
      </P.ProductBicImg>
    </P.ProductImgBox>
  );
}
