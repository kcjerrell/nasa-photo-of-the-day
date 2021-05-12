import React from 'react';

const Thumbnail = (props) => {
	const { apod, select, isSelected, loadMore } = props;

	const img_onClick = () => {
		select(apod);
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
				<div className="thumbnail-image" onClick={() => img_onClick()}><h3>Load more...</h3></div>
			</div>
		);
}

export default Thumbnail;