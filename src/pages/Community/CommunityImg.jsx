import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';
import * as C from './CommunityStyle';
import { BsTrash } from 'react-icons/bs';
import { GoX } from 'react-icons/go';
import CommunityForm from './CommunityForm';

export default function CommunityImg({ idx, imgUrl, addCommunityForm }) {
  return (
    <C.CommunityBox>
      <C.ImgContainer key={idx}>
        <C.CommunityImg src={imgUrl} alt="img" />
        <BsTrash className="trashIcon" />
        <C.PlusItem />
        <C.Search>
          <C.SearchInputBox>
            <C.SearchInput type="text" placeholder="검색어를 입력하세요" />
            <GoX />
          </C.SearchInputBox>
          <C.SearchList>
            <C.SearchListItem>검색리스트</C.SearchListItem>
          </C.SearchList>
        </C.Search>
      </C.ImgContainer>
      <C.CommunityFormContainer>
        <CommunityForm addCommunityForm={addCommunityForm} />
      </C.CommunityFormContainer>
    </C.CommunityBox>
  );
}
