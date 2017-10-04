import React, {Component} from 'react';
import {connect} from "react-redux";
import SignoutPage from "../../components/user/SignoutPage"
import {logoutAction} from "../../action/userAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signout: () =>{
			dispatch(logoutAction());
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SignoutPage);
