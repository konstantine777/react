import React from 'react';
import {Switch, Route} from 'react-router-dom';
import WrapperMain from './helpers/WrapperMain';
import Status from './pages/Status';
import Orders from './pages/Orders';
import History from './pages/History';

export default () =>
	(
		<WrapperMain>
			<Switch>
				<Route exact path='/' component={Status}/>
				<Route exact path='/orders' component={Orders}/>
				<Route exact path='/history' component={History}/>
			</Switch>
		</WrapperMain>
	)