import React, {Component} from 'react';

export default class RAMPerContainer extends Component {

	render() {

		return (
			<div className="status_item_settings">
				<p className="status_item_settings_title">ram per container:</p>
				<div className="forma_group input">
					<label>
						<span>Min:</span>
						<input type="text"/>
						Mb
					</label>
				</div>
				<div className="forma_group input">
					<label>
						<span>Max:</span>
						<input type="text"/>
						Mb
					</label>
				</div>
			</div>
		)

	}

}