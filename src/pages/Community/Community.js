import React, { useRef, useState } from 'react';
import CommunityContainer from './CommunityContainer';
import { AiOutlineCamera } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import * as C from './CommunityStyle';

const Community = () => {
  const [data, setData] = useState([]);
  const [imgPreview, setImgPreview] = useState([]);
  const [imgList, setImgList] = useState([]);
  const upload = useRef();
  const navigate = useNavigate();

  const imgUpLoad = e => {
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
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTcwNjQ5OH0.pu1WqqhWifWjC4D4Q_CSqQ2vDCJbAISzR7cnWXmNe5g',
      },
      body: formData,
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    navigate('/feed');
  };

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
