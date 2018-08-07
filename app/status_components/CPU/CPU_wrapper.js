import React from 'react';

export default (props) =>
	(
		<div className="status_item cpu_status">
			<p className="status_item_title">CPU</p>
			{props.children}
		</div>
	)