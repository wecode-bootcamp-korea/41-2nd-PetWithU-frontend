import React, { useContext, useRef, useState } from 'react';
import * as C from './CommunityStyle';
import { UserContext } from './context/UserContext';
import CommunityImg from './CommunityImg';

const CommunityContainer = ({ addCommunityForm, id }) => {
  const { imgUrl, setImgUrl } = useContext(UserContext);
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
