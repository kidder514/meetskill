
const initialState = {
	options:{},
	selectedOptions:{}
};

function search(state = initialState, action) {
	switch (action.type){
	case 'UPDATE_SEARCH':
		return { ...state, 
			showDialogBox: true, 
			dialogType: action.dialogType
		};
	case 'RESET_SEARCH':
		return initialState;
	default:
		return state;
	}
}

export default search;