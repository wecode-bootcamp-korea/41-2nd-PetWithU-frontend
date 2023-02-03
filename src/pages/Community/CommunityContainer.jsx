import React from 'react';
import * as C from './CommunityStyle';
import CommunityImg from './CommunityImg';

const CommunityContainer = ({ addCommunityForm, data, setData }) => {
  return (
    <C.CommunityContainer>
      {data.map((item, idx) => {
        return (
          <CommunityImg
            key={item.id}
            data={data}
            item={item}
            setData={setData}
            idx={idx}
            addCommunityForm={addCommunityForm}
          />
        );
      })}
    </C.CommunityContainer>
  );
};

export default CommunityContainer;
