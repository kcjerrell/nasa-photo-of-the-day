import React from 'react';
import Thumbnail from './Thumbnail';

const Thumbnails = (props) => {
	const { apods, selectImage, selected, loadMore} = props;

	return (
		<div className="sidebar">
				{
					apods.map(apod => (
						<Thumbnail apod={apod} selectImage={selectImage} isSelected={selected === apod} key={apod.date} />
					))
				}
				<Thumbnail loadMore={loadMore} isSelected={false} />
			</div>
	);
};

export default Thumbnails;