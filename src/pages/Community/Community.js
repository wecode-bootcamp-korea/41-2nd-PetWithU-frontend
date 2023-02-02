import React, { useRef, useState, useEffect } from 'react';
import * as C from './CommunityStyle';
import { GrLinkUp } from 'react-icons/gr';
import CommunityContainer from './CommunityContainer';
import { UserContext } from './context/UserContext';

const Community = () => {
  const [imgUrl, setImgUrl] = useState([]);
  const topToScroll = useRef();
  const upload = useRef();
  const imgUpLoad = e => {
    setImgUrl(prev => [...prev, URL.createObjectURL(upload.current.files[0])]);
  };

  const goToTop = () => {
    topToScroll.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <UserContext.Provider value={{ imgUrl, setImgUrl }}>
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
    </UserContext.Provider>
  );
};

export default Community;
