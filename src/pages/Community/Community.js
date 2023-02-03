import React, { useRef, useState, useEffect } from 'react';
import * as C from './CommunityStyle';
import { GrLinkUp } from 'react-icons/gr';
import CommunityContainer from './CommunityContainer';
import { AiOutlineCamera } from 'react-icons/ai';

const Community = () => {
  const topToScroll = useRef();
  const [data, setData] = useState([]);
  const upload = useRef();

  const imgUpLoad = () => {
    setData(prev => [
      ...prev,
      {
        id: data.length,
        img: URL.createObjectURL(upload.current.files[0]),
        tagList: [],
        category: '',
        content: '',
        hashTag: [],
      },
    ]);
  };

  const goToTop = () => {
    topToScroll.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <C.Community ref={topToScroll}>
      {data.length === 0 ? (
        <C.Empty>
          <AiOutlineCamera className="camera" />
        </C.Empty>
      ) : (
        <CommunityContainer data={data} setData={setData} />
      )}

      <C.CommunityBtnBox>
        <C.LabelFileStyle htmlFor="file">파일추가</C.LabelFileStyle>
        <C.InputFileStyle
          type="file"
          id="file"
          ref={upload}
          multiple
          onChange={imgUpLoad}
        />
        <C.CommunityBtn onClick={() => console.log(data)}>
          올리기
        </C.CommunityBtn>
      </C.CommunityBtnBox>
      <GrLinkUp className="goTo" onClick={goToTop} />
    </C.Community>
  );
};

export default Community;
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
