if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

import React from 'react';
import ReactDOM from 'react-dom';

import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from '@uirouter/react';
import router from './app.config';

router.start();

ReactDOM.render(
	<UIRouter router={router}>
		<UIView/>
	</UIRouter>,
	document.getElementById('app')
);
