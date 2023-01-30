import React, { useState } from 'react';
import * as T from './TrailCourseBox.styles';
import { RiBookmarkFill } from 'react-icons/ri';

function TrailCourseBox({
  thumbnail,
  title,
  profileImage,
  nickname,
  collectionCount,
  likeCount,
  collectionState,
}) {
  const collectionBoolean = JSON.parse(collectionState);
  const [clickScrap, setClickScrap] = useState(collectionBoolean);

  const handleScrap = () => {
    setClickScrap(!clickScrap);
    // 백엔드 통신으로 보내기
  };

  return (
    <T.TrailCourse>
      <T.TrailCourseImgBox>
        <T.TrailCourseImg src={thumbnail} alt="산책로" />
        <T.TrailScrapBtn onClick={handleScrap} clickScrap={clickScrap}>
          <RiBookmarkFill className="bookmarkBtn" />
        </T.TrailScrapBtn>
      </T.TrailCourseImgBox>
      <T.TrailCourseTitle>{title}</T.TrailCourseTitle>
      <T.UserInfo>
        <T.ProfileImg src={profileImage} alt="닉네임" />
        <T.UserNickName>{nickname}</T.UserNickName>
      </T.UserInfo>
      <T.PostInfo>
        스크랩&nbsp;{collectionCount}&nbsp;.&nbsp;하트&nbsp;{likeCount}
      </T.PostInfo>
    </T.TrailCourse>
  );
}
export default TrailCourseBox;
