import React from 'react';
import Caption from './CPU_caption';
import FormData from './form_cpu_data';
import CPUWrapper from './CPU_wrapper';
import CoresWrapper from './cores_wrapper';
import CoreFree from './core/core_free';
import CoreUsed from './core/core_used';


export default (props) => {

	let answer = props.data;
	let cores = answer.cores;

	return (
		<CPUWrapper>
			<Caption data={answer}/>
			<FormData/>
			<CoresWrapper>
				{
					cores.map((elem, index) => (
						(elem.in_use) ?
							<CoreUsed key={index}/> :
							<CoreFree key={index}/>
					))
				}
			</CoresWrapper>
		</CPUWrapper>
	);

}