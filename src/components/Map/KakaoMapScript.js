import MarkerY from '../../assets/images/Marker_Yellow.png'
import Modal from './Modal'; 
import ReactDOM from 'react-dom';

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
          latlng: new kakao.maps.LatLng(37.4944064, 126.9599747),
          id : 1
        },
        {
          title: '전산관',
          latlng: new kakao.maps.LatLng(37.495422, 126.959512),
          id : 2
        },
        {
          title: '진리관',
          latlng: new kakao.maps.LatLng(37.496895, 126.957446),
          id : 3
        }
    ];

    const map = new kakao.maps.Map(container, options); //지도 생성
    let imageSize = new kakao.maps.Size(50, 50); // 마커이미지의 크기입니다
    const markerImage = new kakao.maps.MarkerImage(MarkerY, imageSize); //마커 이미지 생성

    positions.forEach(position => {
        const marker = new kakao.maps.Marker({
          map: map,
          position: position.latlng,
          title: position.title,
          image: markerImage
        });
        
        //마우스 이벤트 핸들러 함수
        const handleMouseOver = () => {
            const newSize = new kakao.maps.Size(60, 60); // 마커 크기를 더 크게 조정
            marker.setImage(new kakao.maps.MarkerImage(MarkerY, newSize));
        };

        const handleMouseOut = () => {
            marker.setImage(markerImage); // 원래 크기로 되돌리기
        };

        const handleMarkerClick = () => {
            // 인포윈도우 생성
            // const infowindow = new kakao.maps.InfoWindow({
            //     content: position.content,
            //     removable: true // 팝업 닫을 수 있도록 설정
            // });
            // // 인포윈도우 지도에 표시
            // infowindow.open(map, marker);

            // 모달 팝업 열기
            const modalRoot = document.getElementById('modal-root');
            ReactDOM.render(<Modal isOpen={true} closeModal={() => ReactDOM.unmountComponentAtNode(modalRoot)} positionId={position.id} />, modalRoot);
        };

        // 이벤트 등록
        kakao.maps.event.addListener(marker, 'mouseover', handleMouseOver);
        kakao.maps.event.addListener(marker, 'mouseout', handleMouseOut);
        kakao.maps.event.addListener(marker, 'click', handleMarkerClick);

        //마커 표시
        marker.setMap(map);
        return marker;
      });
}