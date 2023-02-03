import React from 'react';
import * as C from './CommunityStyle';

export default function CommunitySearch({ product, findedItem, setProductId }) {
  const productId = () => {
    setProductId(product.id);
  };
  return (
    <C.SearchList>
      <C.SearchListItem onClick={productId}>
        <C.SearchItemImgBox>
          <C.SearchItemImg src={product.thumbnail} alt="img"></C.SearchItemImg>
        </C.SearchItemImgBox>
        <C.SearchItemText>{product.name}</C.SearchItemText>
      </C.SearchListItem>
    </C.SearchList>
  );
}
