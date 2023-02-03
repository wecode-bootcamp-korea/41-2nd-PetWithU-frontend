import React, { useState } from 'react';
import * as C from './CommunityStyle';
import { GoX } from 'react-icons/go';
import CommunitySearch from './CommunitySearch';

export default function CommunityPlusItem({
  item,
  product,
  productItem,
  findedItem,
  setProductId,
}) {
  const [searchBox, setSearchBox] = useState();
  const [searchInput, setSearchInput] = useState();

  const searchInputValue = e => {
    setSearchInput(e.target.value);
  };

  const handleSearchBox = () => {
    setSearchBox(!searchBox);
  };
  return (
    <>
      <C.PlusItem
        key={item.id}
        style={{ left: item.offset.x, top: item.offset.y }}
        onClick={handleSearchBox}
      >
        +
      </C.PlusItem>

      <C.Search
        style={{ left: item.offset.x, top: item.offset.y }}
        primery={searchBox}
      >
        <C.SearchInputBox>
          <C.SearchInput
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchInput || ''}
            onChange={searchInputValue}
            onKeyUp={productItem}
          />
          <GoX onClick={handleSearchBox} className="x" />
        </C.SearchInputBox>
        {product.map(product => {
          return (
            <CommunitySearch
              product={product}
              findedItem={findedItem}
              setProductId={setProductId}
            />
          );
        })}
      </C.Search>
    </>
  );
}
