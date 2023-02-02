import React from 'react';
import * as C from './CommunityStyle';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function CommunityForm({ addCommunityForm }) {
  return (
    <>
      {' '}
      <C.CommunityForm>
        <C.CommunityP></C.CommunityP>
        <IoMdArrowDropdown className="dropDown" />
        <C.CommunityList>
          <C.CommunityList>list</C.CommunityList>
        </C.CommunityList>
      </C.CommunityForm>
      <C.CommunityText placeholder="사진에 대해 설명해주세요" />
      <C.CommunityTextBox>
        <C.HashTagInput type="text" />
        <C.CommunityTextList>
          <C.CommunityTextListItem></C.CommunityTextListItem>
        </C.CommunityTextList>
      </C.CommunityTextBox>
    </>
  );
}
