import React from 'react';
import ProductContentContainer from './ProductContentContainer';
import * as P from './ProductDetailStyle';
import ProductImgBox from './ProductImgBox';

export default function ProductDetail() {
  console.log(detailContent.price);
  return (
    <P.ProductContainer>
      <ProductImgBox />
      <ProductContentContainer detailContent={detailContent} />
    </P.ProductContainer>
  );
}
const detailContent = {
  id: 1,
  name: 'cat Tower',
  price: '20000',
};
