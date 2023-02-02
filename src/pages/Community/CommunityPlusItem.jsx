import React, { useRef } from 'react';
import * as C from './CommunityStyle';
import { GoX } from 'react-icons/go';

export default function CommunityPlusItem({ item }) {
  return (
    <>
      <C.PlusItem key={item.id} style={{ left: item.x, top: item.y }}>
        아이템
      </C.PlusItem>

      <C.Search>
        <C.SearchInputBox>
          <C.SearchInput type="text" placeholder="검색어를 입력하세요" />
          <GoX />
        </C.SearchInputBox>
        <C.SearchList>
          <C.SearchListItem>검색리스트</C.SearchListItem>
        </C.SearchList>
      </C.Search>
    </>
  );
}
