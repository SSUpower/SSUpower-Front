import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import MarkerC from "../../assets/images/Marker_Cat.png";
import MarkerD from "../../assets/images/Marker.png";
import Modal from "./Modal";
import DupModal from "./dupModal";
const { kakao } = window;

const KakaoMapScript = ({ positions }) => {
  const container = document.getElementById("myMap");
  const options = {
    center: new kakao.maps.LatLng(37.4944064, 126.9599747), //중심 좌표
    level: 3, //확대 레벨
  };

  const map = new kakao.maps.Map(container, options); //지도 생성
  let imageSize = new kakao.maps.Size(40, 50); // 마커이미지의 크기
  const markerImage = new kakao.maps.MarkerImage(MarkerD, imageSize); //마커 이미지 생성

  // 중복된 마커 배열
  let dupPositions = [],
    tempPositions = [];
  positions.forEach((position) => {
    if (
      tempPositions.some((pos) => pos.building_name === position.building_name)
    ) {
      dupPositions.push(position);
      return;
    }
    tempPositions.push(position);
  });

  // 중복되지 않는 배열 display
  positions.forEach((position) => {
    if (
      dupPositions.some((pos) => pos.building_name === position.building_name)
    ) {
      return;
    }

    const latlng = new kakao.maps.LatLng(position.latitude, position.longitude); // 위도, 경도 정보를 LatLng 객체로 변환
    const marker = new kakao.maps.Marker({
      map: map,
      position: latlng,
      title: position.building_name,
      image: markerImage,
      buildingId: position.buildingId,
      classID: position.classID,
    });

    //마우스 이벤트 핸들러 함수
    const handleMouseOver = () => {
      const newSize = new kakao.maps.Size(48, 60); // 마커 크기를 더 크게 조정
      marker.setImage(new kakao.maps.MarkerImage(MarkerC, newSize));
    };

    const handleMouseOut = () => {
      marker.setImage(markerImage); // 원래 크기로 되돌리기
    };

    const handleMarkerClick = () => {
      // 모달 팝업 열기
      const modalRoot = document.getElementById("modal-root");
      ReactDOM.render(
        <Modal
          isOpen={true}
          closeModal={() => ReactDOM.unmountComponentAtNode(modalRoot)}
          positionId={position.buildingId}
          classId={position.classID}
        />,
        modalRoot
      );
    };

    // 이벤트 등록
    kakao.maps.event.addListener(marker, "mouseover", handleMouseOver);
    kakao.maps.event.addListener(marker, "mouseout", handleMouseOut);
    kakao.maps.event.addListener(marker, "click", handleMarkerClick);

    //마커 표시
    marker.setMap(map);
    return marker;
  });

  dupPositions.forEach((position) => {
    const latlng = new kakao.maps.LatLng(position.latitude, position.longitude); // 위도, 경도 정보를 LatLng 객체로 변환
    const marker = new kakao.maps.Marker({
      map: map,
      position: latlng,
      title: position.building_name,
      image: markerImage,
      buildingId: position.buildingId,
      classID: position.classID,
    });

    //마우스 이벤트 핸들러 함수
    const handleMouseOver = () => {
      const newSize = new kakao.maps.Size(48, 60); // 마커 크기를 더 크게 조정
      marker.setImage(new kakao.maps.MarkerImage(MarkerC, newSize));
    };

    const handleMouseOut = () => {
      marker.setImage(markerImage); // 원래 크기로 되돌리기
    };

    const handleMarkerClick = () => {
      // 모달 팝업 열기
      const modalRoot = document.getElementById("modal-root");
      ReactDOM.render(
        <DupModal
          isOpen={true}
          closeModal={() => ReactDOM.unmountComponentAtNode(modalRoot)}
          positionId={position.buildingId}
          classId={position.classID}
          positions={positions}
        />,
        modalRoot
      );
    };

    // 이벤트 등록
    kakao.maps.event.addListener(marker, "mouseover", handleMouseOver);
    kakao.maps.event.addListener(marker, "mouseout", handleMouseOut);
    kakao.maps.event.addListener(marker, "click", handleMarkerClick);

    //마커 표시
    marker.setMap(map);
    return marker;
  });
};

KakaoMapScript.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default KakaoMapScript;
