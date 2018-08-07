import React from 'react';

export default () =>
	(
		<div className="status_page_head">
			<label >
				<input type="radio"/>
				<span className="radio_custom"/>
				<p>Online</p>
			</label>
			<div className="head_button" form="status_content">
				<button type="button">Apply</button>
			</div>
		</div>
	)