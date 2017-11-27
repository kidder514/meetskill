const isPasswordValid = (password) => {

	//rule: must be longer that 8 characters
	//contains at least 1 letter
	//contains at least 1 number
	//should not have any invalid characters like #$%^&*()
	if(/[a-z]/.test(password)&&
		/[1-9]/.test(password)&&
		(!/\W/g.test(password))&&
		(password.length >= 8)
		){
		return true
	}else{
		return false;
	}
};

export default isPasswordValid;