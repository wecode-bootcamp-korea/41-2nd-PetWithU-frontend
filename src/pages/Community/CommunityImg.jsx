import React, { useContext, useEffect, useRef, useState } from 'react';
import * as C from './CommunityStyle';
import { BsTrash } from 'react-icons/bs';
import CommunityForm from './CommunityForm';
import CommunityPlusItem from './CommunityPlusItem';
import axios from 'axios';

export default function CommunityImg({ idx, data, item, setData }) {
  const [plusItem, setPlusItem] = useState([]);
  const plusItemId = useRef(0);
  const [product, setProduct] = useState([]);
  const findedItem = data.find(data => data.id === item.id);
  const [productId, setProductId] = useState(0);

  const productItem = async e => {
    if (e.key === 'Enter') {
      const res = await axios.get(
        'http://10.58.52.81:3001/products/search?keyword=강아지'
      );
      setProduct(res.data);
    }
  };
  const handlePlusItem = e => {
    setPlusItem([
      ...plusItem,
      {
        id: plusItemId.current++,
        offset: {
          x: e.nativeEvent.offsetX,
          y: e.nativeEvent.offsetY,
        },
      },
    ]);
    addTagList(e);
  };
  const addTagList = e => {
    findedItem.tagList = [
      ...findedItem.tagList,
      {
        id: plusItemId.current++,
        offset: {
          x: e.nativeEvent.offsetX,
          y: e.nativeEvent.offsetY,
        },
        productId: productId,
      },
    ];
  };
  const removeItem = e => {
    setData(data.filter(item => item.id !== e.id));
  };

  return (
    <C.CommunityBox>
      <C.ImgContainer key={idx}>
        <C.CommunityImg src={item.img} alt="img" onClick={handlePlusItem} />
        <BsTrash className="trashIcon" onClick={e => removeItem(item)} />
        {plusItem.map((item, idx) => {
          return (
            <CommunityPlusItem
              item={item}
              key={idx}
              data={data}
              setData={setData}
              product={product}
              setProductId={setProductId}
              productItem={productItem}
              findedItem={findedItem}
            />
          );
        })}
      </C.ImgContainer>
      <C.CommunityFormContainer>
        <CommunityForm
          item={item}
          data={data}
          setData={setData}
          findedItem={findedItem}
        />
      </C.CommunityFormContainer>
    </C.CommunityBox>
  );
}
