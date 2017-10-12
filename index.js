import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './app/reducer';
import route from "./app/route";
import 'bootstrap/dist/css/bootstrap.css';

require("./app/asset/style.css");
require("./app/asset/responsive.css");

const logger = createLogger();
const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, logger),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	 	)
	);
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
    	<div>
    		<Router history={history} routes={route} />
    	</div>
	</Provider>,
  	document.getElementById('root')
)






