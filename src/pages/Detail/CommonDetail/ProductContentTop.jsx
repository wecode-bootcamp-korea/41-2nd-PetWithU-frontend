import React from 'react';
import * as P from './ProductDetailStyle';
import { BsBookmark } from 'react-icons/bs';
import { BsShare } from 'react-icons/bs';
import { IoIosHeart } from 'react-icons/io';
export default function ProductContentTop({ detailContent }) {
  return (
    <P.ProductContentTop>
      <P.ProductCategory>카테고리</P.ProductCategory>
      <P.ProductNameBox>
        <P.ProductName>CAT TOWER</P.ProductName>
        <P.ProductIcons>
          <BsBookmark className="bookMark" />
          <BsShare className="share" />
        </P.ProductIcons>
      </P.ProductNameBox>

      <P.ProductReview>
        {ICON.map(item => {
          return <IoIosHeart key={item.id} className="heart" />;
        })}
      </P.ProductReview>

      <P.ProductPrice>
        <span className="bold">{detailContent.price}</span>원
      </P.ProductPrice>
    </P.ProductContentTop>
  );
}
const ICON = [
  {
    id: 11,
  },
  {
    id: 12,
  },
  {
    id: 13,
  },
  {
    id: 14,
  },
  {
    id: 15,
  },
];
