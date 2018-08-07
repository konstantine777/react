import React from 'react';

export default (props) =>
	(
		<div className="orders_page">
			<div className="orders_content">
				{props.children}
			</div>
		</div>
	)