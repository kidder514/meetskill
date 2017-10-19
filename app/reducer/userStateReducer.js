
var initialUserState = {
	userId: "",
	avatarUrl: "",
	userName: "",
	email:"",
	firstName: "Duo",
	lastName: "Lu",
    token: "",
    country: "",
    language: "",
    likes:[],
    settings:{},
    order:{},
    currentPage:"",
    isLoggedIn: false,
    rememberLogin: false
}


function userState(state = initialUserState, action) {
  	switch (action.type){
	    case "LOGIN":
	    		var user = {
					userId: action.data.userId,
					avatarUrl: action.data.avatarUrl,
					userName: action.data.userName,
					email:action.data.email,
					firstName: action.data.firstName,
					lastName: action.data.lastName,
				    token: action.data.jwtoken,
				    location: action.data.location,
				    language: action.data.language,
				    likes:action.data.likes,
				    settings:action.data.settings,
				    order:action.data.order,
				    currentPage:"",
				    isLoggedIn: true,
				    rememberLogin: action.data.rememberLogin
				};
	    	return user;
	    case "LOGOUT":
	        return initialUserState;
	    case "LOCATE":
	    	return { ...state, 
	    			location: action.location
	    		};
	    case "UNLOCATE":
	        return { ...state, 
	        		location: "", 
	        	};
	    default:
	    	return state
    }
}

export default userState