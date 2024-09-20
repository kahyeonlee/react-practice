import React, { useEffect, useState } from "react";
import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import useKakaoLoader from "../components/useKaKaoLoader";
import api from "../api";


const MapComponent = () => {
  useKakaoLoader();

  const [isOpen, setIsOpen] = useState(false); // 상태 추가
  const [position, setPosition] = useState(null);

  // 현재 위치(위경도) 확인
  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("현재위치:", position);
    });
  };

  // 서버로부터 위치 정보 요청
  const getData = async () => {
    let res = await api.get("/place/position");
    setPosition(res.data.position);
  };

  useEffect(() => {
    getCurrentPosition();
    getData();
  }, []);


  const EventMarkerContainer = ({ position, title }) => {
    const map = useMap()
    const [isVisible, setIsVisible] = useState(false)

    return (
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        onClick={(marker) => map.panTo(marker.getPosition())}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        {isVisible && <div style={{ padding: "5px", color: "#000" }}>{title}</div>}
      </MapMarker>
    )
  }


  return (
    <div>
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 35.14660238685539,
          lng: 126.92224696711476,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "350px",
        }}
        level={3} // 지도의 확대 레벨
      >
        {position?.map((pos, index) => (
           <EventMarkerContainer
           key={`EventMarkerContainer-${pos.latlng.lat}-${pos.latlng.lng}`}
           position={pos.latlng}
           title={pos.title}
         />

          // <MapMarker // 마커를 생성합니다
          //   position={{
          //     // 마커가 표시될 위치입니다
          //     lat: data.latlng.lat,
          //     lng: data.latlng.lng,
          //   }}
          //   clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
          //   // 마커에 마우스오버 이벤트를 등록합니다
          //   onMouseOver={() => setIsOpen(true)}
          //   // 마커에 마우스아웃 이벤트를 등록합니다
          //   onMouseOut={() => setIsOpen(false)}
          // >
          //   {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
          //   {isOpen && (
          //     <div style={{ padding: "5px", color: "#000" }}>
          //       {data.title}
          //     </div>
          //   )}
          // </MapMarker>
        ))}
      </Map>
    </div>
  );
};

export default MapComponent;
