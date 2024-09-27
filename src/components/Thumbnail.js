import React from 'react';
import styled from 'styled-components';

const ThumbnailContainer = styled.div`
  border-width: 1px;
  border-color: ${props => props.isSelected ? '#bbbbbb' : 'black'};
  border-style: solid;
  /* aspect-ratio: 1; */
	/* height: 18%; */
flex-grow: 1;
	margin: 0px;
	background-size: cover;
	background-position: center;
	background-image: url(${props => props.url});

	&:hover {
		border-color: white;
	}
`;

const Thumbnail = (props) => {
	const { apod, selectImage, isSelected, loadMore } = props;

	const img_onClick = () => {
		selectImage(apod);
	};

	if (apod)
		return (
			<ThumbnailContainer isSelected={isSelected} url={apod.url} onClick={() => img_onClick()} alt={apod.title} />
		);

	else
		return (
			<div className="thumbnail-container" style={{ height: 'auto' }}>
				<div className="thumbnail-image" onClick={() => loadMore()}><h3>Load more...</h3></div>
			</div>
		);
}

export default Thumbnail;