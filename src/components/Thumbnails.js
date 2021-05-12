import React from 'react';
import Thumbnail from './Thumbnail';

const Thumbnails = (props) => {
	const { apods, select, selected } = props;

	const loadMore = () => {

	};

	return (
		<div className="sidebar">
				{
					apods.map(apod => (
						<Thumbnail apod={apod} select={select} isSelected={selected === apod} />
					))
				}
				<Thumbnail select={loadMore} isSelected={false} />
			</div>
	);
};

export default Thumbnails;