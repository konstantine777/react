import React, {Component} from 'react';

export default class HDDForm extends Component {

	render() {

		return (
			<div className="status_item_settings">
				<p className="status_item_settings_title">Max Available:</p>
				<div className="forma_group input">
					<label>
						<input type="text"/>
						Gb
					</label>
				</div>
				<p className="status_item_settings_title">Min per container:</p>
				<div className="forma_group input">
					<label>
						<input type="text"/>
						Gb
					</label>
				</div>
				<p className="status_item_settings_title">Max per container:</p>
				<div className="forma_group input">
					<label>
						<input type="text"/>
						Gb
					</label>
				</div>
			</div>
		)

	}

}