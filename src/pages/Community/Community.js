import React, { useRef, useState, useEffect } from 'react';
import * as C from './CommunityStyle';
import { GrLinkUp } from 'react-icons/gr';
import CommunityContainer from './CommunityContainer';
import { ImgContext } from './context/ImageContext';
import { PlusContext } from './context/PlusContext';

const Community = () => {
  const [imgUrl, setImgUrl] = useState([]);
  const [plusItem, setPlusItem] = useState([]);
  const topToScroll = useRef();
  const upload = useRef();

  const imgUpLoad = e => {
    setImgUrl(prev => [...prev, URL.createObjectURL(upload.current.files[0])]);
  };

  const goToTop = () => {
    topToScroll.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ImgContext.Provider value={{ imgUrl, setImgUrl }}>
      <PlusContext.Provider value={{ plusItem, setPlusItem }}>
        <C.Community ref={topToScroll}>
          <CommunityContainer />
          <C.CommunityBtnBox>
            <C.LabelFileStyle htmlFor="file">파일추가</C.LabelFileStyle>
            <C.InputFileStyle
              type="file"
              id="file"
              ref={upload}
              multiple
              onChange={imgUpLoad}
            />

            <C.CommunityBtn>올리기</C.CommunityBtn>
          </C.CommunityBtnBox>
          <GrLinkUp className="goTo" onClick={goToTop} />
        </C.Community>
      </PlusContext.Provider>
    </ImgContext.Provider>
  );
};

export default Community;
