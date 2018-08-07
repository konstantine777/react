import React from 'react';

export default (props) =>
	(
		<div className="history_page">
			<div className="history_content">
				<table>
					<thead>
					<tr>
						<th>#</th>
						<th>Cores</th>
						<th>Ram, MB</th>
						<th>GPU</th>
						<th>HDD, Gb</th>
						<th>status</th>
						<th>timeline</th>
					</tr>
					</thead>
					<tbody>
					{props.children}
					</tbody>
				</table>
			</div>
		</div>
	)