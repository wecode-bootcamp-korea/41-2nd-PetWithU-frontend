import React from 'react';
import ProductContentBottom from './ProductContentBottom';
import ProductContentTop from './ProductContentTop';
import * as P from './ProductDetailStyle';

export default function ProductContentContainer({ imgData, setImgData }) {
  return (
    <P.ProductContentContainer>
      <ProductContentTop imgData={imgData} setImgData={setImgData} />
      <ProductContentBottom imgData={imgData} setImgData={setImgData} />
    </P.ProductContentContainer>
  );
}
