import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as T from './TrailCourseFilter.styles';
import { IoIosArrowForward } from 'react-icons/io';

export default function TrailCourseFilter({
  setViewFilter,
  setLocationFilter,
  setShowFiltered,
  setOffset,
}) {
  const [currentFilter, setCurrentFilter] = useState('');
  const [viewSmallFilter, setViewSmallFilter] = useState(false);
  const [stateCate, setStateCate] = useState([]);
  const [seoulCate, setSeoulCate] = useState([]);
  const [gyeonggiCate, setGyeonggiCate] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/TrailCourseFilterCate.json')
      .then(res => res.json())
      .then(result => {
        setStateCate(result[0].STATE_CATEGORY);
        setSeoulCate(result[1].SEOUL_CATEGORY);
        setGyeonggiCate(result[2].GG_CATEGORY);
      });
  }, []);

  const handleCityCate = state => {
    setCurrentFilter(state);
    setViewSmallFilter(true);
  };

  const handleCity = currentFilter === '서울특별시' ? seoulCate : gyeonggiCate;

  const filterClose = () => {
    setViewFilter(false);
  };

  const applyFilter = (currentFilter, id) => {
    setShowFiltered(true);
    setOffset(1);
    searchParams.set('page', 1);
    searchParams.set('pagination', 9);
    searchParams.set('city', currentFilter === '서울특별시' ? 1 : 2);
    searchParams.set('arrondissement', id);
    setSearchParams(searchParams);
    filterClose();
  };

  return (
    <T.TrailCourseFilter onMouseLeave={filterClose}>
      <T.BigCategoryFilter>
        {stateCate.map(({ id, state }) => {
          return (
            <T.State key={id} onMouseOver={() => handleCityCate(state)}>
              {state}
              <IoIosArrowForward className="arrowForward" />
            </T.State>
          );
        })}
      </T.BigCategoryFilter>
      {viewSmallFilter && (
        <T.SmallCategoryFilter>
          {handleCity.map(({ id, city }) => {
            return (
              <T.City
                key={id}
                onClick={() => {
                  setLocationFilter(currentFilter + ' ' + city);
                  applyFilter(currentFilter, id);
                }}
              >
                {city}
              </T.City>
            );
          })}
        </T.SmallCategoryFilter>
      )}
    </T.TrailCourseFilter>
  );
}
