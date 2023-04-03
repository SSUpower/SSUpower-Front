import MarkerY from '../../assets/images/Marker_Yellow.png'

const { kakao } = window;

export default function KakaoMapScript() {
    const container = document.getElementById('myMap');
    const options = {
        center: new kakao.maps.LatLng(37.4944064, 126.9599747), //중심 좌표
        level: 3 //확대 레벨
    };

    const positions = [
        {
          title: '정보과학관',
          latlng: new kakao.maps.LatLng(37.4944064, 126.9599747)
        },
        {
          title: '전산관',
          latlng: new kakao.maps.LatLng(37.495422, 126.959512)
        },
        {
          title: '진리관',
          latlng: new kakao.maps.LatLng(37.496895, 126.957446)
        }
      ];

    const map = new kakao.maps.Map(container, options); //지도 생성
    let imageSize = new kakao.maps.Size(50, 50); // 마커이미지의 크기입니다
    const markerImage = new kakao.maps.MarkerImage(MarkerY, imageSize); //마커 이미지 생성

    //마커 좌표
    // let markerPosition = new kakao.maps.LatLng(37.4944064, 126.9599747);
  
    // //마커 생성
    // let marker = new kakao.maps.Marker({
    //     position: markerPosition,
    //     image: markerImage // 마커이미지 설정 
    // });

    positions.forEach(position => {
        const marker = new kakao.maps.Marker({
          map: map,
          position: position.latlng,
          title: position.title,
          image: markerImage
        });
        //마커 표시
        marker.setMap(map);
      });
    
}