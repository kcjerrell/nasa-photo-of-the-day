import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';
import { THUMB_PAGE_COUNT } from "../constants";

const StyledThumbnails = styled.div`
	width: 15%;
  overflow-y: auto;
	overflow-x: hidden;
  background-color: #222222;
  border: black 2px solid;
	flex-shrink: 0;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content:  space-evenly;
`;

const MoreBack = styled.div`

`;

const Thumbnails = (props) => {
	const { apods, selectImage, selected, changeOffset } = props;

	return (
		<StyledThumbnails className="sidebar">
			{
				apods.map(apod => (
					<Thumbnail apod={apod} selectImage={selectImage} isSelected={selected === apod} key={apod.date} />
				))
			}

		<MoreBack>
<button onClick={() => changeOffset(0 - THUMB_PAGE_COUNT)}>Back</button>
<button onClick={() => changeOffset(THUMB_PAGE_COUNT)}>More</button>
			</MoreBack>

		</StyledThumbnails>


	);
};

export default Thumbnails;