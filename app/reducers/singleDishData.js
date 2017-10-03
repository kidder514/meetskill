
function singleDishData(state = [], action) {
  switch(action.type){
    case "INIT_SINGLE_DISH":
    	return state.concat(action.newDish)
    case "APPEND_MY_DISH":
    	return state.concat(action.newDish)
    case "REFRESH_MY_DISH":
    	return action.newDish.concat(state)
    default:
    	return state
    }
}

export default singleDishData
