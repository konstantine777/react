import React from 'react';
import {Link} from 'react-router-dom';
import path from './../helpers/path';

const link = "/history";

export default () =>
	(
		(path() === link) ?
			<div className='navbar_item active'>
				<p className="navbar_item_title">History</p>
			</div> :
			<Link to={link}>
				<div className='navbar_item'>
					<p className="navbar_item_title">History</p>
				</div>
			</Link>

	)