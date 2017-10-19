import React , {Component}from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './app/reducer';
import route from "./app/route";
import 'bootstrap/dist/css/bootstrap.css';
import { persistStore, autoRehydrate } from 'redux-persist'

require("./app/asset/style.css");
require("./app/asset/responsive.css");

const logger = createLogger();
const store = compose(
	autoRehydrate(),
	applyMiddleware(thunk, logger),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(rootReducer)
const history = syncHistoryWithStore(browserHistory, store);


// need to create a app to integrate with redux-persist.
class App extends Component {
	constructor(props) {
		super(props)
		this.state = { rehydrated: false }
	}

	componentWillMount() {
		persistStore(store, { whitelist: ['userState'] }, () => {
			this.setState({ rehydrated: true })
		})
	}

	render() {
		if (!this.state.rehydrated) {
			return <div className="global-config-text">rehydrating store ... </div>
		}
		return (
			<Provider store={store}>
				<Router history={history} routes={route} />
			</Provider>
		)
	}
}

render(
	<App />,
	document.getElementById('root')	
);
