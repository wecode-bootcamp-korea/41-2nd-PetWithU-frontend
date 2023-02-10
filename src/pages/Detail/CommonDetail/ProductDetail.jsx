import React, { useState, useEffect } from 'react';
import ProductContentContainer from './ProductContentContainer';
import * as P from './ProductDetailStyle';
import ProductImgBox from './ProductImgBox';

export default function ProductDetail() {
  const [imgData, setImgData] = useState();
  useEffect(() => {
    fetch('http://3.38.247.226:3000/products/1', {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTcwNjQ5OH0.pu1WqqhWifWjC4D4Q_CSqQ2vDCJbAISzR7cnWXmNe5g',
      },
    })
      .then(res => res.json())
      .then(data => setImgData(data));
  }, []);
  // console.log(imgData);

  return (
    <P.ProductContainer>
      {imgData && (
        <>
          <ProductImgBox imgData={imgData} setImgData={setImgData} />
          <ProductContentContainer imgData={imgData} setImgData={setImgData} />
        </>
      )}
    </P.ProductContainer>
  );
}
