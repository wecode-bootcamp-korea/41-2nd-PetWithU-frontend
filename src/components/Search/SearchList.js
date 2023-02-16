import * as S from './Search.styles';
import React from 'react';

const SearchList = ({ searchItemList }) => {
  return (
    <S.SearchListContainer>
      <ul>
        {searchItemList.map(({ id, name, thumbnail, price }) => {
          return (
            <S.SearchItemList key={id}>
              <S.SearchItemImg src={thumbnail} />
              <S.ItemDec>
                <S.ItemText primary>{name}</S.ItemText>
                <S.ItemText>{Math.floor(price)}원</S.ItemText>
              </S.ItemDec>
            </S.SearchItemList>
          );
        })}
      </ul>
    </S.SearchListContainer>
  );
};

export default SearchList;
