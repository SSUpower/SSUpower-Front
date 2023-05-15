import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import KakaoMapScript from "./KakaoMapScript";
import GlobalStyle from "../../fonts/GlobalStyle";
import axios from 'axios';

const MapMain = () => {

	const [positions, setPositions] = useState([]);
	useEffect(() => {
		axios.get('/map/select')
			.then((response) => {
				console.log(response.data);
				setPositions(response.data); // 받아온 데이터를 state에 저장
		})
		.catch((error) => {
			console.log(error);
		});
	}, [])

	useEffect(() => {
		if (positions.length > 0) {
			KakaoMapScript({ positions });
		}
	}, [positions]);

    return (
		<Wrapper>
			<GlobalStyle />
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