import React, {Component} from 'react';
import { connect } from 'react-redux';
import ForgotPasswordSection from '../../component/section/ForgotPasswordSection'

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	}
}

export default connect(mapStateToProps)(ForgotPasswordSection);