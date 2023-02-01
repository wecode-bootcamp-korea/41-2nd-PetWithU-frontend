import React, { useRef, useState, useEffect } from 'react';
import * as C from './CommunityStyle';
import { BsTrash } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import { GoX } from 'react-icons/go';

function Community() {
  return (
    <C.Community>
      <C.CommunityContainer>
        <C.ImgContainer>
          <C.CommunityImg src="" alt="img" />
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

        <C.InputFileStyle type="file" id="file" accept="image/*" />

        <C.CommunityFormContainer>
          <C.CommunityForm>
            <C.CommunityP></C.CommunityP>
            <IoMdArrowDropdown className="dropDown" />
            <C.CommunityList>
              <C.CommunityList>list</C.CommunityList>
            </C.CommunityList>
          </C.CommunityForm>

          <C.CommunityText placeholder="사진에 대해 설명해주세요" />
          <div>
            <C.HashTagInput type="text" />
            <ul>
              <li></li>
            </ul>
          </div>
          <C.CommunityBtn>추가하기</C.CommunityBtn>
        </C.CommunityFormContainer>
      </C.CommunityContainer>
      <C.AddBtn>올리기</C.AddBtn>
    </C.Community>
  );
}

export default Community;
