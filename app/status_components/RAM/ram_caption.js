import React from 'react';

export default (props) => {

	let caption = props.caption;

	return (
		<div className="status_item_info">
			<p>Frequency: <span>3400 MHz</span></p>
			<p>Latency: <span>16-18-18-35</span></p>
			<p>Available:<span>{(caption.available_memory_mb / 1024).toFixed(4)} Gb</span></p>
			<p>In Use:<span>{(caption.side_used_memory_mb / 1024).toFixed(4)} Gb</span></p>
		</div>
	)

}