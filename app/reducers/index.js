import { routerReducer as routing} from 'react-router-redux'
import { combineReducers } from 'redux'
import userState from "./userStateReducer"

const rootReducer = combineReducers({
	userState,
	routing
});

export default rootReducer