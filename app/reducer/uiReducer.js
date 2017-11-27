
const initialState = {
	showDialogBox: false,
	dialogType: "",
	showErrorDialogBox: false,
	errorMessage: "",
	serverError: "",
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
		case "UPDATE_SERVER_ERROR":
			return {...state, serverError: action.serverError}
		case "RESET_SERVER_ERROR":
			return {...state, serverError: ""}	
	    default:
	    	return state;
    }
}

export default ui
