import React from 'react';

export default (props) =>
	(
		<div className="status_form_wrapper">
			<form action="" className="status_form">
				{props.children}
			</form>
		</div>
	)