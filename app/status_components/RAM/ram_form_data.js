import React from 'react';
import RAMPerContainer from './ram_per_container';
import MaxAvailable from './Max_available';

export default () =>
	(
		[
			<RAMPerContainer key="1"/>,
			<MaxAvailable key="2"/>
		]
	)