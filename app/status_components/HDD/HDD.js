import React from 'react';
import HDDWrapper from './hdd_wrapper';
import HDDCaption from './hdd_caption';
import HDDForm from './hdd_form';

export default (props) => {

	let hdd = props.hdd;

	return (
		<HDDWrapper>
			<HDDCaption caption={hdd}/>
			<HDDForm/>
		</HDDWrapper>
	)

}