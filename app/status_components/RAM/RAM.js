import React from 'react';
import RAMWrapper from './RAM_wrapper';
import RAMCaption from './ram_caption';
import RamFormData from './ram_form_data';

export default (props) => {

	let caption = props.data;

	return (
		<RAMWrapper>
			<RAMCaption caption={caption}/>
			<RamFormData/>
		</RAMWrapper>
	)

}
