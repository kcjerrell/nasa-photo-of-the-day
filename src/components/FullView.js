import React, { useEffect } from 'react';

const FullView = (props) => {
	const { selected } = props;

	//useEffect(() => {
	//
	//}, [selected]);

	if (!props.selected)
		return (
			<div className="fullView">
				<h3>Loading...</h3>
			</div>
		);

	return (
		<div className="fullView">
			<img src={selected.hdurl} alt={selected.title} />
		</div>
	);
};

export default FullView;