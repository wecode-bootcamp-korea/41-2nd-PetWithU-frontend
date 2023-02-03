import React, { useState } from 'react';
import * as C from './CommunityStyle';
import { IoMdArrowDropdown } from 'react-icons/io';
import CommunityHashTag from './CommunityHashTag';

export default function CommunityForm({ findedItem }) {
  const [categoryBox, setCategoryBox] = useState();
  const [categoryList, setCategoryList] = useState('CATEGORY');
  const [hashTagItems, setHashTagItems] = useState([]);
  const [content, setContent] = useState('');
  const [hashTag, setHashTag] = useState(['#']);

  const handleHashTag = e => {
    e.preventDefault();
    setHashTag(e.target.value);
  };
  const hadlecontent = e => {
    setContent(e.target.value);
    findedItem.content = e.target.value;
  };

  const addHashTag = e => {
    e.preventDefault();
    if (hashTagItems.length > 5) {
      return;
    }
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      setHashTagItems([hashTag, ...hashTagItems]);
      setHashTag('#');
      findedItem.hashTag = [hashTag, ...findedItem.hashTag];
    }
  };
  const selected = () => {
    setCategoryBox(!categoryBox);
  };
  const changeSelect = e => {
    const { innerText } = e.target;
    setCategoryList(innerText);

    findedItem.category = e.target.innerText;
  };

  return (
    <>
      {' '}
      <C.CommunityForm onClick={selected} primery={categoryBox}>
        <C.CommunityP>{categoryList}</C.CommunityP>
        <IoMdArrowDropdown className="dropDown" />
        <C.CommunityList primery={categoryBox} onClick={changeSelect}>
          {CommunityListItems.map(item => {
            return (
              <C.CommunityListItem key={item.id}>
                {item.name}
              </C.CommunityListItem>
            );
          })}
        </C.CommunityList>
      </C.CommunityForm>
      <C.CommunityText
        placeholder="사진에 대해 설명해주세요"
        value={content}
        onChange={hadlecontent}
      />
      <C.CommunityTextBox>
        <C.HashTagInput
          type="text"
          value={hashTag}
          onChange={handleHashTag}
          style={{ width: `${hashTag.length}ch` }}
          onKeyUp={e => addHashTag(e)}
        />
        {hashTagItems.map((hashTagItems, idx) => {
          return <CommunityHashTag key={idx} hashTagItems={hashTagItems} />;
        })}
      </C.CommunityTextBox>
    </>
  );
}
const CommunityListItems = [
  {
    id: 11,
    name: 'CATEGORY',
  },
  {
    id: 1,
    name: '상품추천',
  },
  {
    id: 2,
    name: '병원찾기',
  },
  {
    id: 3,
    name: '정보공유',
  },
  {
    id: 4,
    name: '꿀팁',
  },
  {
    id: 5,
    name: '피드',
  },
];
