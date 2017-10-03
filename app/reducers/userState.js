
var initialUserState = {
	userId: "",
	avatarUrl: "",
	userName: "",
	email:"",
	firstName: "",
	lastName: "",
	coordinate:[],
    token: "",
    userAddress:{},
    currentAddress:{},
    likes:[],
    settings:{},
    order:{},
    currentPage:"",
    isLoggedIn: false,
    hasAddress: false,
    rememberLogin: false
}

//initialise user data from localstorage 
if (typeof(Storage) !== "undefined") {
	if(localStorage.user !== undefined){
		var currentState = JSON.parse(localStorage.user);
	}
}

function userState(state = (currentState != undefined) ? currentState : initialUserState, action) {
  	switch (action.type){
	    case "LOGIN":
	    		var user = {
					userId: action.data.userId,
					avatarUrl: action.data.avatarUrl,
					userName: action.data.userName,
					email:action.data.email,
					firstName: action.data.firstName,
					lastName: action.data.lastName,
					coordinate: action.data.coordinate,
				    token: action.data.jwtoken,
				    userAddress: action.data.address,
				    currentAddress:action.data.address,
				    likes:action.data.likes,
				    settings:action.data.settings,
				    order:action.data.order,
				    currentPage:"",
				    isLoggedIn: true,
				    hasAddress: action.data.address != {} && action.data.address != undefined,
				    rememberLogin: action.data.rememberLogin
				};

	    	//store user data into localstorage if user choose to remember login
			if (typeof(Storage) !== "undefined" && action.data.rememberLogin) {
				if (localStorage.user !== undefined){
					localStorage.removeItem("user");
				}
				localStorage.setItem("user", JSON.stringify(user));
			}

	    	return user;
	    case "LOGOUT":
			if (typeof(Storage) !== "undefined") {
				if(localStorage.user !== undefined){
					localStorage.removeItem("user");
				}
			}
	        return initialUserState;
	    case "LOCATE":
	    	return { ...state, 
	    			hasAddress: true, 
	    			currentAddress: action.address, 
	    			coordinate: action.coordinate 
	    		};
	    case "UNLOCATE":
	        return { ...state, 
	        		hasAddress: false, 
	        		currentAddress: "", 
	        		coordinate: ""
	        	};
	    default:
	    	return state
    }
}

export default userState