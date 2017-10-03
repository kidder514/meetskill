import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import homeFoodDishReducer from "./homeFoodDishReducer"
import myDishReducer from "./myDishReducer"
import uiReducer from "./uiReducer"
import userState from "./userState"
import userData from "./userData"
import singleDishData from "./singleDishData"
import cookData from "./cookData"
import search from "./searchReducer"

const rootReducer = combineReducers({
  homeFoodDish: homeFoodDishReducer,
  myDish:myDishReducer,
  ui: uiReducer,
  userState,  
  userData,
  singleDishData,
  cookData,
  search,
  routing
})

export default rootReducer
