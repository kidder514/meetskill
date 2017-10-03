
function homeFoodDishReducer(state = [], action) {
  switch(action.type){
    case "INIT_DISH":
    	return state.concat(action.newDish)
    case "APPEND_DISH":
    	return state.concat(action.newDish)
    case "REFRESH_DISH":
    	return action.newDish.concat(state)
    default:
    	return state
    }
}

export default homeFoodDishReducer