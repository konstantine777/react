import React from 'react';

export default (props) =>
	(
		<div className="status_item gpu_status">
			<p className="status_item_title">GPU</p>
			{props.children}
		</div>
	)