import React from 'react';
import Form from './StatusForm';
import Statistics from './Statistics';

export default (props) =>
	(
		<div className="status_content">
			<Form data={props.data}/>
			<Statistics/>
		</div>
	)