import React from 'react';
import LineWrapper from './line_components/LineWrapper';
import Index from './line_components/Index';
import Cores from './line_components/Cores';
import Ram from './line_components/Ram';
import Gpu from './line_components/Gpu';
import Hdd from './line_components/Hdd';
import Status from './line_components/Status';
import Expiration from './line_components/Expiration';


export default () =>
	(
		<LineWrapper>
			<Index/>
			<Cores/>
			<Ram/>
			<Gpu/>
			<Hdd/>
			<Status/>
			<Expiration/>
		</LineWrapper>
	)
