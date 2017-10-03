import React, {Component} from 'react';
import {connect} from "react-redux";
import LoginPage from "../../components/user/LoginPage"
import {loginCall} from "../../action/userAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: (userInfo,rememberLogin) =>{
			dispatch(loginCall(userInfo,rememberLogin));
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
