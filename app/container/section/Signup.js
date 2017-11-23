import React, {Component} from 'react';
import { connect } from 'react-redux';
import SignupSection from '../../component/section/SignupSection'
import { signupCall } from "../../action/userAction" 
import { hideDialog } from "../../action/uiAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        signupCall: (data) => {dispatch(signupCall(data))},
        hideDialog: () => {dispatch(hideDialog())}        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupSection);