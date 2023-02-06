import React from 'react';
import ProductContentBottom from './ProductContentBottom';
import ProductContentTop from './ProductContentTop';
import * as P from './ProductDetailStyle';

export default function ProductContentContainer({ detailContent }) {
  return (
    <P.ProductContentContainer>
      <ProductContentTop detailContent={detailContent} />
      <ProductContentBottom detailContent={detailContent} />
    </P.ProductContentContainer>
  );
}
