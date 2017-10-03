import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './app/reducers';
import routes from "./app/routes";

require("./app/asset/style.css");
require("./app/asset/responsive.css");
require("./app/asset/googlefont/roboto.css");
require("./app/asset/bootstrap/css/bootstrap-theme.min.css");
require("./app/asset/bootstrap/css/bootstrap.min.css");

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
    	<div>
    		<Router history={history} routes={routes} />
    	</div>
	</Provider>,
  	document.getElementById('root')
)






