
var initialUserState = {
	data:{},
	categories:{}
}

function dataList(state = initialUserState, action) {
  	switch (action.type){
	    case "LOAD_DATA":
			return { ...state, 
				data: action.data
			};
		case "LOAD_CATEGORIES":
			return { ...state, 
				categories: action.categories
			};
	    default:
	    	return state
    }
}

export default dataList