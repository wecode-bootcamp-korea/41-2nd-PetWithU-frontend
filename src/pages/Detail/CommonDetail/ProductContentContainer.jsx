import React from 'react';
import ProductContentBottom from './ProductContentBottom';
import * as P from './ProductDetailStyle';
import ProductContentTop from './ProductContentTop';

export default function ProductContentContainer({ imgData, setImgData }) {
  return (
    <P.ProductContentContainer>
      <ProductContentTop imgData={imgData} setImgData={setImgData} />
      <ProductContentBottom imgData={imgData} setImgData={setImgData} />
    </P.ProductContentContainer>
  );
}
