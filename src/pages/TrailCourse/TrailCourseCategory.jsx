import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as T from './TrailCourseCategory.styles';
import TrailCourseFilter from './TrailCourseFilter';
import { IoIosArrowDown } from 'react-icons/io';

function TrailCourseCategory({ setOffset }) {
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
    searchParams.set('page', 1);
    searchParams.set('pagination', 9);
    searchParams.delete('city');
    searchParams.delete('arrondissement');
    setSearchParams(searchParams);
    // fetchQueryData(searchParams);
  };

  // const fetchQueryData = queryString => {
  //   fetch(`http://13.125.233.27?${queryString}`)
  //     .then(res => res.json())
  //     .then(result => setTrailData(result.postList));
  // };

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
        />
      )}
    </>
  );
}

export default TrailCourseCategory;
