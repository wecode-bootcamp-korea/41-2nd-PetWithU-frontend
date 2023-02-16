import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as M from './Modal.styles';

const Modal = ({ item, allProducts, mouseOff }) => {
  const navigate = useNavigate();

  return (
    <M.ModalContainer
      onClick={() => {
        navigate(`/productDetail/${item.product_id}`);
      }}
      style={{ left: item.point_x, top: item.point_y }}
    >
      <M.ModalWrap onMouseLeave={mouseOff} key={item.product_id}>
        <M.ModalList>
          {allProducts.length > 1 && (
            <>
              <M.Img
                src={allProducts[item.product_id].thumbnail}
                alt="item"
                key={item.id}
              />
              <div className="div">
                <p>{allProducts[item.product_id].name}</p>
                <p>{Math.floor(allProducts[item.product_id].price)}원</p>
              </div>
            </>
          )}
        </M.ModalList>
      </M.ModalWrap>
    </M.ModalContainer>
  );
};

export default Modal;
