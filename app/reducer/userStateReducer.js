const initialState = {
	rememberLogin: false
};


function userState(state = initialState, action) {
	var user;
	switch (action.type){
	case 'LOGIN':
		user = action.data.Data;
		user.isLoggedin = true;
		user.rememberLogin = state.rememberLogin;
		return user;
	case 'LOGOUT':
		return initialState;

	case 'UPDATE_PROFILE':
		user = action.data.Data;
		user.isLoggedin = true;
		user.rememberLogin = state.rememberLogin;
		return user;
	case 'UPDATE_PHOTO':
		return {...state, photo: action.data.Data.photo};
	case 'SET_REMEMBER_LOGIN':
		return {...state, rememberLogin: action.rememberLogin};
	case 'persist/REHYDRATE':
		if (action.payload.userState.rememberLogin)
			return action.payload.userState;
		else 
			return state;
	default:
		return state;
	}
}

export default userState;