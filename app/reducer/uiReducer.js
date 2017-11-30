
const initialState = {
	showDialogBox: false,
	dialogType: "",
	showErrorDialogBox: false,
	errorMessage: "",
	serverLoginError:"",
	serverSignupError: "",
	serverGoogleLoginError:"",
	serverFacebookLoginError: "",
};

function ui(state = initialState, action) {
  	switch (action.type){
  		case "SHOW_DIALOG":
	    	return { ...state, 
    			showDialogBox: true, 
    			dialogType: action.dialogType
    		};
  		case "HIDE_DIALOG":
			return { ...state, showDialogBox: false};
		case "SHOW_ERROR":
			return { ...state, 
				showErrorDialogBox: true,
				errorMessage: action.errorMessage
			};
		case "HIDE_ERROR":
			return {...state, showErrorDialogBox: false}
		case "UPDATE_LOGIN_ERROR":
			return {...state, serverLoginError: action.serverLoginError}
		case "RESET_LOGIN_ERROR":
			return {...state, serverLoginError:''}
		case "UPDATE_SIGNUP_ERROR":
			return {...state, serverSignupError: action.serverSignupError}
		case "RESET_SIGNUP_ERROR":
			return {...state, serverSignupError:''}
		case "UPDATE_GOOGLE_LOGIN_ERROR":
			return {...state, serverGoogleLoginError: action.serverGoogleLoginError}
		case "RESET_GOOGLE_LOGIN_ERROR":
			return {...state, serverGoogleLoginError:''}
		case "UPDATE_FACEBOOK_LOGIN_ERROR":
			return {...state, serverFacebookLoginError: action.serverFacebookLoginError}
		case "RESET_FACEBOOK_LOGIN_ERROR":
			return {...state, serverFacebookLoginError:''}
		case "RESET_ALL_SERVER_ERROR":
			return {...state, 
				serverLoginError:'', 
				serverSignupError:'',
				serverGoogleLoginError:'',
				serverFacebookLoginError:''
			}	
	    default:
	    	return state;
    }
}

export default ui
