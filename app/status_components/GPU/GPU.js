import React from 'react';
import GPUWrapper from './gpu_wrapper';
import GPUElement from './Gpu_element';

export default (props) => {

	let gpuElements = props.gpuElements;

	return (
		<GPUWrapper>
			{
				gpuElements.map((elem, index) => (
					<GPUElement key={index} gpu={elem}/>
				))
			}
		</GPUWrapper>
	)
}