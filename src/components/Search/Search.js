import React, { useEffect, useState } from 'react';
import * as S from './Search.styles';
import SearchList from './SearchList';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [searchItemList, setSearchItemList] = useState([]);

  const setText = e => {
    setSearchText(e.target.value);
  };

  // 통신
  // useEffect(() => {
  //   fetch(`http://10.58.52.161:3000/products/search?keyword=${searchText}`, {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => setSearchItemList(data));
  // }, [searchText]);
  // 쓰로틀, 디바운스
  return (
    <S.SearchContainer>
      <S.SearchBox placeholder="검색어 입력" onChange={setText} />
      {searchItemList.length >= 1 && (
        <SearchList searchItemList={searchItemList} />
      )}
    </S.SearchContainer>
  );
};

export default Search;
