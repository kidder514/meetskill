
function userState(state = {}, action) {
	var user;
	switch (action.type){
	case 'LOGIN':
		user = action.data.Data;
		user.isLoggedin = true;
		return user;
	case 'LOGOUT':
		return {};

	case 'UPDATE_PROFILE':
		user = action.data.Data;
		user.isLoggedin = true;
		return user;
	case 'UPDATE_PHOTO':
		return {...state, photo: action.data.Data.photo};
	default:
		return state;
	}
}

export default userState;