import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as T from './TrailCourseList.styles';
import TrailCourseBox from './TrailCourseBox';
import TrailCourseCategory from './TrailCourseCategory';

function TrailCourseList() {
  const [trailData, setTrailData] = useState([]);
  const [offset, setOffset] = useState(1);
  const [cityId, setCityId] = useState(1);
  const [arrondissementId, setArrondissementId] = useState('all');
  const [searchParams, setSearchParams] = useSearchParams();

  const limit = 9;

  useEffect(() => {
    fetch(
      `http://13.125.233.27:3000/promenade?city=${cityId}&arrondissement=${arrondissementId}&page=${offset}&pagination=${limit}`,
      {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTcwNjQ5OH0.pu1WqqhWifWjC4D4Q_CSqQ2vDCJbAISzR7cnWXmNe5g',
        },
      }
    )
      .then(res => res.json())
      .then(result => {
        setTrailData(prev => [...prev, ...result.postList]);
      });
  }, [offset]);

  console.log(cityId, arrondissementId);
  const handleMoreClick = () => {
    setOffset(offset + 9);
    searchParams.set('page', offset + 9);
    searchParams.set('pagination', limit);
    setSearchParams(searchParams);
  };

  return (
    <>
      <TrailCourseCategory
        setOffset={setOffset}
        setTrailData={setTrailData}
        setCityId={setCityId}
        setArrondissementId={setArrondissementId}
      />
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
