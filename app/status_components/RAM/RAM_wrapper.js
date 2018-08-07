import React from 'react';

export default (props) =>
	(
		<div className="status_item ram_status">
			<p className="status_item_title">RAM</p>
			{props.children}
		</div>
	)