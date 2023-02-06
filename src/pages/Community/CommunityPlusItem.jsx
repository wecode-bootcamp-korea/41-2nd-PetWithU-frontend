import React, { useEffect, useState } from 'react';
import * as C from './CommunityStyle';
import { GoX } from 'react-icons/go';
import CommunitySearch from './CommunitySearch';
import axios from 'axios';

export default function CommunityPlusItem({
  item,
  setProductId,
  productId,
  findedItem,
  plusItem,
}) {
  const [searchBox, setSearchBox] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [searchData, setSearchData] = useState([]);
  console.log('2', productId);
  const searchInputValue = e => {
    setSearchInput(e.target.value);
  };

  const handleSearchBox = e => {
    setSearchBox(!searchBox);
  };
  useEffect(() => {
    const mockData = async () => {
      const res = await axios.get('http://localhost:3001/mock/mock.json');
      setSearchData(res.data);
    };
    mockData();
  }, [searchInput]);
  const handleSearch = e => {
    if (e.key === 'Enter') {
      setSearchData(
        searchData.filter(e => {
          return e.name.includes(searchInput);
        })
      );
    }
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
            value={searchInput}
            onChange={searchInputValue}
            onKeyUp={handleSearch}
          />
          <GoX onClick={handleSearchBox} className="x" />
        </C.SearchInputBox>
        {searchInput === ''
          ? ''
          : searchData.map(product => {
              return (
                <CommunitySearch
                  key={product.id}
                  product={product}
                  setProductId={setProductId}
                  productId={productId}
                  findedItem={findedItem}
                  handleSearchBox={handleSearchBox}
                />
              );
            })}
      </C.Search>
    </>
  );
}
