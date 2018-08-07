import React from 'react';
import Status from './side_bar_components/Status';
import Orders from './side_bar_components/Orders';
import History from './side_bar_components/History';
import Logo from './side_bar_components/Logo';

export default () =>
	(
		<div className="navbar">
			<Logo/>
			<Status/>
			<Orders/>
			<History/>
		</div>
	)