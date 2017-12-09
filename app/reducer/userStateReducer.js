
function userState(state = {}, action) {
  	switch (action.type){
		case "LOGIN":
				var user = action.data.Data;
				user.isLoggedin = true;
	    	return user;
	    case "LOGOUT":
	        return {};

	    case "UPDATE_PROFILE":
				var user = action.data.Data;
				user.isLoggedin = true;
			return user;
	    default:
	    	return state
    }
}

export default userState