import React, {Component} from 'react';

export default class MaxAvailable extends Component {

	render() {

		return (
			<div className="status_item_settings">
				<p className="status_item_settings_title">Max Available:</p>
				<div className="forma_group input">
					<label>
						<input type="text"/>
						Mb
					</label>
				</div>
			</div>
		)

	}

}