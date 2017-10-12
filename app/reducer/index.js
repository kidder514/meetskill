import { routerReducer as routing} from 'react-router-redux'
import { combineReducers } from 'redux'
import userState from "./userStateReducer"
import ui from "./uiReducer"
import data from "./dataReducer"

const rootReducer = combineReducers({
	userState,
	routing,
	ui,
	data
});

export default rootReducer