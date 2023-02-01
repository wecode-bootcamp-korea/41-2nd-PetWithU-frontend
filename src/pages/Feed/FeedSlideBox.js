import React from 'react';
import * as I from './FeedSlideBox.styles';
import * as F from './Feed.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import FeedPoints from './FeedPoints';

const FeedSlideBox = ({ postContent }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // console.log(postContent[0].points);
  return (
    <div>
      <I.ImgList>
        <I.StyledSlider {...settings}>
          {postContent.map(({ category_id, image_url, points }) => {
            return (
              <I.PlusItem key={category_id}>
                <I.SlideImg src={image_url} alt="이미지" />
                {points.map((item, idx) => {
                  return <FeedPoints key={idx} item={item} idx={idx} />;
                })}
              </I.PlusItem>
            );
          })}
        </I.StyledSlider>
      </I.ImgList>
      <I.ComentAndTag>
        <p>{postContent.content}</p>
        {postContent.map(({ hashtags }, index) => {
          return <F.Tag key={index}>#{hashtags}</F.Tag>;
        })}
      </I.ComentAndTag>
    </div>
  );
};

export default FeedSlideBox;
