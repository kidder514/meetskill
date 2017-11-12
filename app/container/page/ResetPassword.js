import React, {Component} from 'react';
import {connect} from "react-redux";
import ResetPasswordPage from "../../component/page/ResetPasswordPage"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	}
}

export default connect(mapStateToProps)(ResetPasswordPage);
