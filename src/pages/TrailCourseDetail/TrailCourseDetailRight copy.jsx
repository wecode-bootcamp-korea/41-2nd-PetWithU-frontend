import React, { useState } from 'react';
import * as T from './TrailCourseDetailRight.styles';
import { useParams } from 'react-router-dom';
import { IoMdHeartEmpty } from 'react-icons/io';
import { RxBookmark, RxShare1, RxDoubleArrowUp } from 'react-icons/rx';
import { BsChatDots } from 'react-icons/bs';

function TrailCourseDetailRight({
  postId,
  handleScrapNumber,
  handleLikeNumber,
  scrapNumber,
  likeNumber,
  commentNumber,
}) {
  const [isScrapped, setIsScrapped] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [resultMsg, setResultMsg] = useState('');
  const params = useParams();
  const detailId = params.id;

  // const updateScrapCount =
  //   (() => {
  //     setIsScrapped(!isScrapped);
  //     fetch(FETCH_CART_API, {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         id: { id },
  //         scrapCount: { scrapCount } + 1,
  //       }),
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         if (data.message === 'success') {
  //           isScrapped ? setAddScrapNumber(scrapCount + 1) : setAddScrapNumber(scrapCount);
  //           console.log('스크랩 되었습니다');
  //         }
  //       });
  //   },
  //   []);

  const updateLikeAndCollection = value => {
    fetch(`http://3.38.247.226:3000/promenade/${value}/${detailId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTcwNjQ5OH0.pu1WqqhWifWjC4D4Q_CSqQ2vDCJbAISzR7cnWXmNe5g',
      },
    })
      .then(res => res.json())
      .then(result => {
        setResultMsg(result.message);
      });
  };

  const scrapBtnClicked = () => {
    updateLikeAndCollection('collection');
    if (resultMsg.slice(-7) === 'SUCCESS') {
      const current = !isScrapped;
      setIsScrapped(current);
      current
        ? handleScrapNumber(scrapNumber + 1)
        : handleScrapNumber(scrapNumber - 1);
    }
  };

  const likeBtnClicked = () => {
    updateLikeAndCollection('like');
    if (resultMsg.slice(-7) === 'SUCCESS') {
      const current = !isLiked;
      setIsLiked(current);
      current
        ? handleLikeNumber(likeNumber + 1)
        : handleLikeNumber(likeNumber - 1);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <T.DetailRight>
      <T.FloatingBox>
        <T.TrailCourseHeartBtn>
          <IoMdHeartEmpty onClick={likeBtnClicked} />
        </T.TrailCourseHeartBtn>
        {likeNumber}
        <T.TrailCourseBookmarkBtn>
          <RxBookmark onClick={scrapBtnClicked} />
        </T.TrailCourseBookmarkBtn>
        {scrapNumber}
        <T.TrailCourseCommentBtn>
          <BsChatDots />
        </T.TrailCourseCommentBtn>
        {commentNumber}
        <T.TrailCourseShareBtn>
          <RxShare1 />
        </T.TrailCourseShareBtn>
        <T.ScrollToTop onClick={scrollToTop}>
          <RxDoubleArrowUp />
        </T.ScrollToTop>
      </T.FloatingBox>
    </T.DetailRight>
  );
}

export default TrailCourseDetailRight;
