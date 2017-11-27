import React, {Component} from 'react';
import { connect } from 'react-redux';
import SignupSection from '../../component/section/SignupSection'
import { signupCall } from "../../action/userAction" 
import { hideDialog, resetServerError } from "../../action/uiAction"

const mapStateToProps = (state) => {
	return {
        userState: state.userState,
        ui: state.ui
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        signupCall: (query) => {dispatch(signupCall(query))},
        hideDialog: () => {dispatch(hideDialog())},
        resetServerError: () => {dispatch(resetServerError())}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupSection);