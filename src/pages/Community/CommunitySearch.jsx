import React from 'react';
import * as C from './CommunityStyle';

export default function CommunitySearch({
  product,
  setProductId,
  handleSearchBox,
  productId,
}) {
  const FindedId = () => {
    handleSearchBox();
    setProductId(product.id);
  };
  console.log('3', productId);
  return (
    <C.SearchList>
      <C.SearchListItem onClick={FindedId}>
        <C.SearchItemImgBox>
          <C.SearchItemImg src={product.url} alt="img"></C.SearchItemImg>
        </C.SearchItemImgBox>
        <C.SearchItemText>{product.name}</C.SearchItemText>
      </C.SearchListItem>
    </C.SearchList>
  );
}
