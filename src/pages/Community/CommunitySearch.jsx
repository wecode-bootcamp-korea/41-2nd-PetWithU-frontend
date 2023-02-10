import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoX } from 'react-icons/go';
import * as C from './CommunityStyle';

export default function CommunitySearch({ item, findedItem }) {
  const [searchBox, setSearchBox] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchData, setSearchData] = useState([]);
  const handleSearchBox = () => {
    setSearchBox(!searchBox);
  };
  // useEffect(() => {
  //   const mockData = async () => {
  //     const res = await axios.get(
  //       `localhost:3000/products/search?keyword=${searchInput}`
  //     );
  //     setSearchData(res.data);
  //   };
  //   mockData();
  // }, [searchInput, findedItem]);

  const searchInputValue = e => {
    setSearchInput(e.target.value);
  };

  const handleSearch = async e => {
    if (e.key === 'Enter') {
      fetch(`http://3.38.247.226:3000/products/search?keyword=${searchInput}`, {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then(res => res.json())
        .then(data => setSearchData(data));
    }
  };

  const ADDplusItemId = e => {
    findedItem.tagList = [
      ...findedItem.tagList,
      {
        id: e,
        offset: {
          x: item.offset.x,
          y: item.offset.y,
        },
      },
    ];
  };

  return (
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
      {searchInput.length === 0
        ? ''
        : searchData.map(product => {
            return (
              <C.SearchList key={product.id}>
                <C.SearchListItem onClick={() => ADDplusItemId(product.id)}>
                  <C.SearchItemImgBox>
                    <C.SearchItemImg
                      src={product.thumbnail}
                      alt="img"
                      onClick={handleSearchBox}
                    ></C.SearchItemImg>
                  </C.SearchItemImgBox>
                  <C.SearchItemText>{product.name}</C.SearchItemText>
                </C.SearchListItem>
              </C.SearchList>
            );
          })}
    </C.Search>
  );
}
