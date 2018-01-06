
const initialState = {
	showDialogBox: false,
	dialogType: '',
	showErrorDialogBox: false,
	showLoadingWrapper: false,
	errorMessage: '',
	apiCallType:'',
	apiCalling: false,
	serverErrorMessage: '',
	serverSuccessType:'',
	serverSuccessMessage:''
};

function ui(state = initialState, action) {
	switch (action.type){
	case 'SHOW_LOADING':
		return { ...state, 
			showLoadingWrapper: true
		};
	case 'HIDE_LOADING':
		return { ...state,
			showLoadingWrapper: false
		};
	case 'SHOW_DIALOG':
		return { ...state, 
			showDialogBox: true, 
			dialogType: action.dialogType
		};
	case 'HIDE_DIALOG':
		return { ...state, showDialogBox: false};
	case 'SHOW_ERROR':
		return { ...state, 
			showErrorDialogBox: true,
			errorMessage: action.errorMessage
		};
	case 'HIDE_ERROR':
		return {...state, showErrorDialogBox: false};
	case 'SHOW_SECTION_LOADING':
		return {...state, apiCalling: true};
	case 'HIDE_SECTION_LOADING':
		return {...state, apiCalling: false};
	case 'UPDATE_SERVER_ERROR':
		return {...state, apiCallType: action.resource, serverErrorMessage: action.serverErrorMessage};
	case 'RESET_SERVER_ERROR':
		return {...state, apiCallType: '', serverErrorMessage: ''};     
	case 'UPDATE_SERVER_SUCCESS':
		return {...state, serverSuccessType: action.resource, serverSuccessMessage: action.serverSuccessMessage};
	case 'RESET_SERVER_SUCCESS':
		return {...state, serverSuccessType: '', serverSuccessMessage: ''};
	case 'RESET_ALL_SERVER_MESSAGE':
		return {...state, 
			apiCallType: '',
			serverErrorMessage: '',
			serverSuccessType: '',
			serverSuccessMessage: ''
		};
	default:
		return state;
	}
}

export default ui;
