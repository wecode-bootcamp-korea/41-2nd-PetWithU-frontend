import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import * as I from './FeedSlideBox.styles';

const FeedPoints = ({ item, idx }) => {
  const [modalOn, setModalOn] = useState(false);
  const mouseOn = () => {
    setModalOn(true);
  };
  const mouseOff = () => {
    setModalOn(false);
  };

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch('/data/mainData.json')
      .then(res => res.json())
      .then(data => {
        setAllProducts(data.allProducts);
      });
  }, []);
  return (
    <>
      <I.Point
        onMouseOver={mouseOn}
        // onMouseLeave={mouseOff}
        key={idx}
        style={{ left: item.point_x, top: item.point_y }}
      >
        +
      </I.Point>
      {modalOn && (
        <Modal
          onMouseOver={mouseOn}
          mouseOff={mouseOff}
          item={item}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
        />
      )}
    </>
  );
};

export default FeedPoints;
