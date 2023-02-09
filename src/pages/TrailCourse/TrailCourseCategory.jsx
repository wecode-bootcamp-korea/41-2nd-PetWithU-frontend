import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as T from './TrailCourseCategory.styles';
import TrailCourseFilter from './TrailCourseFilter';
import { IoIosArrowDown } from 'react-icons/io';

function TrailCourseCategory({
  setOffset,
  setTrailData,
  setCityId,
  setArrondissementId,
}) {
  const [viewFilter, setViewFilter] = useState(false);
  const [locationFilter, setLocationFilter] = useState('');
  const [showFiltered, setShowFiltered] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    setViewFilter(!viewFilter);
  };

  const handleReset = () => {
    setLocationFilter('');
    setShowFiltered(false);
    setOffset(1);
    searchParams.set('city', 1);
    searchParams.set('arrondissement', 'all');
    searchParams.set('page', 1);
    setSearchParams(searchParams);
    fetchQueryData(searchParams.toString());
  };

  const fetchQueryData = queryString => {
    fetch(`http://3.38.247.226:3000/promenade?${queryString}`, {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTcwNjQ5OH0.pu1WqqhWifWjC4D4Q_CSqQ2vDCJbAISzR7cnWXmNe5g',
      },
    })
      .then(res => res.json())
      .then(result => setTrailData(result.postList));
  };

  return (
    <>
      <T.CategoryWrapper>
        <T.PlaceCategory onClick={handleClick}>
          지역
          <IoIosArrowDown />
        </T.PlaceCategory>
        {showFiltered && (
          <T.FilteredCategory>
            <T.FilterBackground>
              <T.Filter>{locationFilter}</T.Filter>
            </T.FilterBackground>
            <T.ResetFilter onClick={handleReset}>초기화</T.ResetFilter>
          </T.FilteredCategory>
        )}
      </T.CategoryWrapper>
      {viewFilter && (
        <TrailCourseFilter
          setViewFilter={setViewFilter}
          setLocationFilter={setLocationFilter}
          setShowFiltered={setShowFiltered}
          setOffset={setOffset}
          setTrailData={setTrailData}
          setCityId={setCityId}
          setArrondissementId={setArrondissementId}
        />
      )}
    </>
  );
}

export default TrailCourseCategory;
