import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledFullView = styled.div`
	flex-grow: 1;
	background-color: #222222;
`;

const StyledImg = styled.img`
	height: 100%;
	width: 100%;
	margin: auto;
	object-fit: ${(props) => props.contain ? 'contain' : 'cover'};
	cursor: ${(props) => props.contain ? 'zoom-in' : 'zoom-out'};
	object-position: center;
`;

const FullView = (props) => {
	const { selected } = props;
	const [contain, setContain] = useState(true);

	const img_onClick = (event) => {
		setContain(!contain);
	}

	if (!props.selected)
		return (
			<StyledFullView>
			Loading
		</StyledFullView>
		);

	return (
		<StyledFullView>
			<StyledImg src={selected.hdurl} alt={selected.title} contain={contain} onClick={img_onClick}/>
		</StyledFullView>
	);
};

export default FullView;