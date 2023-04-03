import React from 'react';
import { useEffect } from 'react';
import styled from "styled-components";
import KakaoMapScript from "./KakaoMapScript";

const {kakao} = window;

const MapMain = () => {

	useEffect(() => {
        KakaoMapScript();
    }, []);

    return (
		<Wrapper>
			<div id='myMap' style={{
				width: '100vw',
				height: '100vh'
			}}></div>
		</Wrapper>
    );
}

export default MapMain;

const Wrapper = styled.div`
	position: relative; // 추가
	display: flex;
	align-items: center;
	text-align: center;
	width: 100%;
	height: 100vh;
`;