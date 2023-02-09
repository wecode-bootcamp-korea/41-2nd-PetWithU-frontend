import React from 'react';
import * as T from './TrailCourseDetailContent.styles';

function TrailCourseDetailContent({ img, text }) {
  return (
    <T.TrailCourseDetailContent>
      <T.DetailContentImg src={img} alt="img" />
      <T.DetailContentText>{text}</T.DetailContentText>
    </T.TrailCourseDetailContent>
  );
}

export default TrailCourseDetailContent;
