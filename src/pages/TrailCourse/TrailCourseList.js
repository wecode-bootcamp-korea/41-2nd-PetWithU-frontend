import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as T from './TrailCourseList.styles';
import TrailCourseBox from './TrailCourseBox';
import TrailCourseCategory from './TrailCourseCategory';

function TrailCourseList() {
  const [trailData, setTrailData] = useState([]);
  const [offset, setOffset] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  // const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/TrailCourseListData.json')
      .then(res => res.json())
      .then(result => setTrailData(result.postList));
  }, []);

  const handleMoreClick = () => {
    setOffset(offset + 9);
    searchParams.set('page', offset + 9);
    searchParams.set('pagination', 9);
    setSearchParams(searchParams);
    // fetchQueryData(searchParams);
  };

  // const fetchQueryData = queryString => {
  //   fetch(`http://13.125.233.27?${queryString}`)
  //     .then(res => res.json())
  //     .then(result => setTrailData(prev => [...prev, ...result.postList]));
  // };

  return (
    <>
      <TrailCourseCategory setOffset={setOffset} />
      <T.TotalPosts>전체 135</T.TotalPosts>
      <T.TrailCourseWrapper>
        {trailData.map(
          ({
            postId,
            thumbnail,
            title,
            profileImage,
            nickname,
            collectionCount,
            likeCount,
            collectionState,
          }) => {
            return (
              <TrailCourseBox
                key={postId}
                thumbnail={thumbnail}
                title={title}
                profileImage={profileImage}
                nickname={nickname}
                collectionCount={collectionCount}
                likeCount={likeCount}
                collectionState={collectionState}
              />
            );
          }
        )}
      </T.TrailCourseWrapper>
      <T.HandleMoreBtn onClick={handleMoreClick}>
        <p>더보기</p>
      </T.HandleMoreBtn>
    </>
  );
}

export default TrailCourseList;
