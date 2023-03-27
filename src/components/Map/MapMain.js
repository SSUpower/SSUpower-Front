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
	display: flex;
	align-items: center;
	text-align: center;
	// flex-flow: column wrap;
	// padding-top: 40px;
	// padding-left: 30px;
	// padding-right: 30px;
	// padding-bottom: 20px;
	// border-bottom: 2px solid #e9ecef;
`;