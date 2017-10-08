import { routerReducer as routing} from 'react-router-redux'
import { combineReducers } from 'redux'
import userState from "./userStateReducer"
import ui from "./uiReducer"

const rootReducer = combineReducers({
	userState,
	routing,
	ui
});

export default rootReducer