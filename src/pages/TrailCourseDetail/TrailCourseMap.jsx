import React, { useEffect } from 'react';

const { kakao } = window;
function TrailCourseMap({ Lat, Lng }) {
  useEffect(() => {
    const mapContainer = document.getElementById('TrailCourseMap');

    const mapOptions = {
      center: new kakao.maps.LatLng(Lat, Lng),
      level: 3,
    };

    const map = new kakao.maps.Map(mapContainer, mapOptions);

    const markerPosition = new kakao.maps.LatLng(Lat, Lng);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, [Lat, Lng]);

  return <div id="TrailCourseMap" style={{ width: '100%', height: '100%' }} />;
}

export default TrailCourseMap;
