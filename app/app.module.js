if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

import './stylesheets/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from '@uirouter/react';
import router from './app.config';

import stores from './stores';

ReactDOM.render(
	<UIRouter router={router}>
		<UIView render={(Component, props) => 
      <Component {...props} stores={stores}/>
    }/>
	</UIRouter>,
	document.getElementById('app')
);
