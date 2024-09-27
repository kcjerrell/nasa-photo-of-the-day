import React from 'react'
import styled from "styled-components";


const StyledInfo = styled.div`
	position: relative;
	text-align: center;
	z-index: 100;
	width: 45%;
	margin-left: 35%;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	div {
	color: black;
	background-color: #dddddddd;
	margin: 0;
	padding: 20px;
	width: 100%;
	border-radius: 4px;
	}

	h2 {
	padding: 10px 25px;
	background-color: #dddddddd;
	margin: 0;
	border-radius: 4px 4px 0 0;
	}
`;

const Info = (props) => {
	const { apod } = props;

	return (
		<StyledInfo>
			<h2>{apod.title}</h2>
			<div>
			<p>{apod.explanation}</p>
			<p>Originally Posted: {apod.date}</p>
			<p>{apod.copyright}</p>
			</div>
		</StyledInfo>
	);
}

export default Info;