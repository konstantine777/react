import React from 'react';

export default (prpos) =>
	(
		<div className="status_item hdd_status">
			<p className="status_item_title">HDD</p>
			{prpos.children}
		</div>
	)