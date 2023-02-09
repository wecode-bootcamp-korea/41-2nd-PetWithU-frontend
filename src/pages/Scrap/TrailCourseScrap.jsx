import React, { useEffect, useState } from 'react';
import TrailCourseScrapBox from '../TrailCourse/TrailCourseBox';
import * as S from './TrailCourseScrap.styles';

const { kakao } = window;

function TrailCourseScrap() {
  const [scrapMapData, setScrapMapData] = useState([]);

  useEffect(() => {
    fetch('/data/TrailCourseScrapData.json')
      .then(res => res.json())
      .then(result => {
        setScrapMapData(result);
      });
  }, []);

  useEffect(() => {
    const mapContainer = document.getElementById('TrailCourseScrapMap');

    const mapOptions = {
      center: new kakao.maps.LatLng(37.56690076474186, 126.97852772722267),
      level: 10,
    };

    const map = new kakao.maps.Map(mapContainer, mapOptions);

    let imageSrc =
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

    for (let i = 0; i < scrapMapData.length; i++) {
      let imageSize = new kakao.maps.Size(24, 35);
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      let Lat = Number(scrapMapData[i].postMaps[0].Lat);
      let Lng = Number(scrapMapData[i].postMaps[0].Lng);

      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(Lat, Lng),
        title: scrapMapData[i].postMaps[0].text,
        image: markerImage,
      });

      let infowindow = new kakao.maps.InfoWindow({
        content: scrapMapData[i].postMaps[0].text,
      });

      kakao.maps.event.addListener(
        marker,
        'mouseover',
        makeOverListener(map, marker, infowindow)
      );

      kakao.maps.event.addListener(
        marker,
        'mouseout',
        makeOutListener(infowindow)
      );
    }
  });

  function makeOverListener(map, marker, infowindow) {
    return function () {
      infowindow.open(map, marker);
    };
  }

  function makeOutListener(infowindow) {
    return function () {
      infowindow.close();
    };
  }

  return (
    <>
      <S.MapWrapper>
        <div
          id="TrailCourseScrapMap"
          style={{ width: '100%', height: '100%' }}
        />
      </S.MapWrapper>
      {/* <S.ScrapBoxWrapper>
        <TrailCourseScrapBox />
      </S.ScrapBoxWrapper> */}
    </>
  );
}

export default TrailCourseScrap;
