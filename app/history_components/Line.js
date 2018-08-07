import React from 'react';
import LineWrapper from './line_components/LineWrapper';
import Index from './line_components/Index';
import Ram from './line_components/Ram';
import Cores from './line_components/Cores';
import Gpu from './line_components/Gpu';
import Hdd from './line_components/Hdd';
import Status from './line_components/Status';
import Timeline from './line_components/Timeline';

export default (props) =>
	(
		<LineWrapper>
			<Index/>
			<Cores/>
			<Ram/>
			<Gpu/>
			<Hdd/>
			<Status/>
			<Timeline/>
		</LineWrapper>
	)