import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './app/reducers';
import routes from "./app/routes";
import 'bootstrap/dist/css/bootstrap.css';

require("./app/asset/style.css");
require("./app/asset/responsive.css");

const logger = createLogger();
const enhancers = compose( window.devToolsExtension ? window.devToolsExtension() : f => f );
const store = createStore(rootReducer, applyMiddleware(thunk, logger), enhancers);
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
    	<div>
    		<Router history={history} routes={routes} />
    	</div>
	</Provider>,
  	document.getElementById('root')
)






