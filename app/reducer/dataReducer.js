
var initialUserState = {
	data:[],
	category:[]
}

function dataList(state = initialUserState, action) {
  	switch (action.type){
	    case "LOAD_DATA":
			return { ...state, 
				data: action.data
			};
		case "LOAD_CATEGORIES":
			return { ...state, 
				category: action.category
			};
	    default:
	    	return state
    }
}

export default dataList