
function userState(state = {}, action) {
  	switch (action.type){
		case "LOGIN":
				var user = action.data.Data;
				user.isLoggedin = true;
	    	return user;
	    case "LOGOUT":
	        return {};
	    case "LOCATE":
	    	// return { ...state, 
			// 		location: action.data.location,
			// 		language: action.data.language
			// 	};
			return state;
	    case "UNLOCATE":
	        return { ...state, 
					location: "", 
					language: ""
	        	};
	    default:
	    	return state
    }
}

export default userState