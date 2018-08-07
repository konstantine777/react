import React from 'react';
import CPU from './CPU/CPU';
import FormWrapper from './wrappers/FormWrapper';
import RAM from './RAM/RAM';
import GPU from './GPU/GPU';
import HDD from './HDD/HDD';

export default (props) => {

	let cpu = props.data.processor;
	let ram = props.data.ram;
	let gpu = props.data.gpus;
	let hdd = props.data.hdd;

	return (
		<FormWrapper>
			<CPU data={cpu}/>
			<RAM data={ram}/>
			<GPU gpuElements={gpu}/>
			<HDD hdd={hdd}/>
		</FormWrapper>
	)


}