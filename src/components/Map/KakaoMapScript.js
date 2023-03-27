import MarkerY from '../../assets/images/Marker_Yellow.png'

const { kakao } = window;

export default function KakaoMapScript() {
    const container = document.getElementById('myMap');
    const options = {
        center: new kakao.maps.LatLng(37.4944064, 126.9599747), //중심 좌표
        level: 3 //확대 레벨
    };

    const map = new kakao.maps.Map(container, options); //지도 생성

    let imageSize = new kakao.maps.Size(50, 50), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    let markerImage = new kakao.maps.MarkerImage(MarkerY, imageSize, imageOption);

    //마커 좌표
    let markerPosition = new kakao.maps.LatLng(37.4944064, 126.9599747);
  
    //마커 생성
    let marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage // 마커이미지 설정 
    });
  
    //마커 표시
    marker.setMap(map);
}