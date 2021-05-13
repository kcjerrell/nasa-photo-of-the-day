import React from 'react';

const Thumbnail = (props) => {
	const { apod, selectImage, isSelected, loadMore } = props;

	const img_onClick = () => {
		selectImage(apod);
	};

	const style = {};

	if (apod)
		style.backgroundImage = `url("${apod.url}")`;

	if (apod)
		return (

			<div className="thumbnail-container">
				<div style={style} cursor='pointer'
					onClick={() => img_onClick()} alt={apod.title}
					className={isSelected ? "thumbnail-image thumbnail-selected" : "thumbnail-image"} ></div>
			</div>
		);

	else
		return (
			<div className="thumbnail-container" style={{ height: 'auto' }}>
				<div className="thumbnail-image" onClick={() => loadMore()}><h3>Load more...</h3></div>
			</div>
		);
}

export default Thumbnail;