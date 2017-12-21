import { routerReducer as routing} from 'react-router-redux';
import { combineReducers } from 'redux';
import userState from './userStateReducer';
import ui from './uiReducer';
import data from './dataReducer';
import search from './searchReducer';
import app from './appReducer';

const rootReducer = combineReducers({
	app,
	userState,
	routing,
	ui,
	data,
	search
});

export default rootReducer;