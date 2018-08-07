import React from 'react';

export default (props) =>
	(
		<table>
			<thead>
			<tr>
				<th>#</th>
				<th>Cores</th>
				<th>Ram, MB</th>
				<th>GPU</th>
				<th>HDD, Gb</th>
				<th>status</th>
				<th>expiration</th>
			</tr>
			</thead>
			<tbody>
			{props.children}
			</tbody>
		</table>
	)