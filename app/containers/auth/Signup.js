import React, {Component} from 'react';
import {connect} from "react-redux";
import SignupPage from "../../components/user/SignupPage"
import {signupCall} from "../../action/userAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signup: (userInfo) =>{
			dispatch(signupCall(userInfo));
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
