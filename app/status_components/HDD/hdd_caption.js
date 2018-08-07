import React from 'react';

export default (props) => {

	let caption = props.caption;

	return (
		<div className="status_item_info">
			<p>Available:<span>{(caption.available_memory_mb / 1024).toFixed(4)} Gb</span></p>
			<p>In Use:<span>{(caption.side_used_memory_mb / 1024).toFixed(4)} Gb</span></p>
		</div>
	)

}