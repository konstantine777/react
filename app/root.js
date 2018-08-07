import React from 'react';
import SideBar from './SideBar';
import Main from './Main';

export default () =>
	(
		<div className="main_wrapper">
			<SideBar/>
			<Main/>
		</div>
	)