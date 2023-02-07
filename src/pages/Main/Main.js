import React, { useEffect, useState } from 'react';
import * as M from './Main.styles';

function Main() {
  const [allProducts, setAllProducts] = useState([]);
  const [todayItems, setTodayItems] = useState([]);

  useEffect(() => {
    fetch('/data/mainData.json')
      .then(res => res.json())
      .then(data => {
        setTodayItems(data.todayProducts);
        setAllProducts(data.allProducts);
      });
  }, []);

  return (
    <M.MainContainer>
      <M.MainImgBox>
        <img src="/images/123.png" alt="그림" />
      </M.MainImgBox>
      <div>
        <M.TodayItemBox>
          <M.ListTitle>오늘의 상품</M.ListTitle>
          <M.TodayItemWrap>
            {todayItems.map(({ id, thumbnail, name, price }) => {
              return (
                <M.ItemList key={id}>
                  <M.TodayItem>
                    <M.ItemImg src={thumbnail} />
                    <M.ItemTitle>{name}</M.ItemTitle>
                    <M.ItemPrice>{Math.floor(price)}원</M.ItemPrice>
                  </M.TodayItem>
                </M.ItemList>
              );
            })}
          </M.TodayItemWrap>
        </M.TodayItemBox>
        <M.AllItemBox>
          <M.ListTitle>모든 상품</M.ListTitle>
          <M.AllItemListWrap>
            <M.ItemList>
              {allProducts.map(({ id, thumbnail, name, price }) => {
                return (
                  <M.AllItem key={id}>
                    <M.ItemImg src={thumbnail} />
                    <M.ItemTitle>{name}</M.ItemTitle>
                    <M.ItemPrice>{Math.floor(price)}원</M.ItemPrice>
                  </M.AllItem>
                );
              })}
            </M.ItemList>
          </M.AllItemListWrap>
        </M.AllItemBox>
      </div>
    </M.MainContainer>
  );
}

export default Main;
