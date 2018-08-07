import React from 'react';

export default () =>
	(
		<div className="status_item_settings">
			<p className="status_item_settings_title">Cores per container:</p>
			<div className="forma_group input">
				<label>
					<span>Min:</span>
					<input type="text"/>
				</label>
			</div>
			<div className="forma_group input">
				<label>
					<span>Max:</span>
					<input type="text"/>
				</label>
			</div>
		</div>
	)