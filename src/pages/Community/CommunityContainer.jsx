import React, { useContext, useRef, useState } from 'react';
import * as C from './CommunityStyle';
import { ImgContext } from './context/ImageContext';
import CommunityImg from './CommunityImg';

const CommunityContainer = ({ addCommunityForm, id }) => {
  const { imgUrl, setImgUrl } = useContext(ImgContext);

  return (
    <C.CommunityContainer key={id}>
      {imgUrl.map((imgUrl, idx) => {
        return (
          <CommunityImg
            imgUrl={imgUrl}
            idx={idx}
            addCommunityForm={addCommunityForm}
          />
        );
      })}
    </C.CommunityContainer>
  );
};

export default CommunityContainer;
