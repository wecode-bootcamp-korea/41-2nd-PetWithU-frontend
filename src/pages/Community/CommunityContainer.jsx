import React from 'react';
import * as C from './CommunityStyle';
import { BsTrash } from 'react-icons/bs';
import CommunityImg from './CommunityImg';
import CommunityForm from './CommunityForm';

const CommunityContainer = ({
  data,
  setData,
  imgPreview,
  setImgPreview,
  removeImg,
}) => {
  return (
    <C.CommunityContainer>
      {data.map((item, idx) => {
        return (
          <div key={item.id}>
            <CommunityImg
              idx={idx}
              data={data}
              item={item}
              setData={setData}
              imgPreview={imgPreview}
              setImgPreview={setImgPreview}
              removeImg={removeImg}
            />
          </div>
        );
      })}
    </C.CommunityContainer>
  );
};

export default CommunityContainer;
