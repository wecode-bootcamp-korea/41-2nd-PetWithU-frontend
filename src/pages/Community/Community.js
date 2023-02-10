import React, { useRef, useState } from 'react';
import * as C from './CommunityStyle';
import CommunityContainer from './CommunityContainer';
import { AiOutlineCamera } from 'react-icons/ai';

const Community = () => {
  const [data, setData] = useState([]);
  const [imgPreview, setImgPreview] = useState([]);
  const [imgList, setImgList] = useState([]);
  const upload = useRef();

  const imgUpLoad = e => {
    console.log(e.target.files);
    setImgPreview(prev => [
      ...prev,
      {
        id: imgPreview.length,
        img: URL.createObjectURL(upload.current.files[0]),
      },
    ]);

    setImgList(prev => [...prev, e.target.files[0]]);
    setData(prev => [
      ...prev,
      {
        id: data.length,
        tagList: [],
        categoryId: 0,
        content: '',
        hashTag: [],
      },
    ]);
  };

  console.log(data);
  const fileCheck = e => {
    e.preventDefault();

    if (data.every(item => item.categoryId === 0))
      return alert('카테고리를 선택해주세요');

    const formData = new FormData();

    for (let i = 0; i < imgList.length; i++) {
      formData.append('images', imgList[i]);
    }
    formData.append('data', JSON.stringify(data));

    fetch('http://3.38.247.226:3000/community/', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: formData,
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

    console.log(data);
  };

  console.log(typeof data.categoryId);
  return (
    <C.Community>
      {data.length === 0 ? (
        <C.Empty>
          <AiOutlineCamera className="camera" />
        </C.Empty>
      ) : (
        <CommunityContainer
          data={data}
          setData={setData}
          imgPreview={imgPreview}
          setImgPreview={setImgPreview}
        />
      )}
      <C.CommunityBtnBox>
        <C.LabelFileStyle htmlFor="file">파일추가</C.LabelFileStyle>
        <C.InputFileStyle
          type="file"
          id="file"
          ref={upload}
          accept="image/*"
          multiple="multiple"
          onChange={imgUpLoad}
          name="images"
        />
        <C.CommunityBtn onClick={fileCheck}>올리기</C.CommunityBtn>
      </C.CommunityBtnBox>
    </C.Community>
  );
};

export default Community;
