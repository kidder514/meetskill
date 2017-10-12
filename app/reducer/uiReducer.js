
const initialState = {
	showDialogBox: false,
	dialogType: "",
	errorMessage: ""
};

function userState(state = initialState, action) {
  	switch (action.type){
  		case "SHOW_DIALOG":
	    	return { ...state, 
    			showDialogBox: true, 
    			dialogType: action.dialogType
    		};
    	case "SHOW_ERROR":
	    	return { ...state, 
    			showDialogBox: true, 
    			dialogType: action.dialogType,
    			errorMessage: action.errorMessage
    		};
  		case "HIDE_DIALOG":
  			return initialState;
	    default:
	    	return state;
    }
}

export default userState