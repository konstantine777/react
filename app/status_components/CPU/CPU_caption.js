import React from 'react';

export default (props) => {

	let answer = props.data;

	return (
		<div className="status_item_info">
			<p>Name: <span>{answer.name}</span></p>
			<p>Frequency: <span>{answer.cores[0].max_freq_hz} GHz</span></p>
			<p>Cores:<span>{(answer.cores[0].virtual) ?
				(+answer.cores.length / 2) :
				answer.cores.length
			}</span></p>
			<p>Threads:<span>{answer.cores.length}</span></p>
		</div>
	)

}