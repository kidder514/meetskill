import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoginSection from '../../component/section/LoginSection'
import { loginCall, googleLoginCall,facebookLoginCall } from "../../action/userAction" 
import { showDialog, hideDialog,resetServerError } from "../../action/uiAction"

const mapStateToProps = (state) => {
	return {
        userState: state.userState,
        ui: state.ui
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginCall: (query) => {dispatch(loginCall(query))},
        googleLoginCall: (data) => {dispatch(googleLoginCall(data))},
        facebookLoginCall: (data) => {dispatch(facebookLoginCall(data))},                
        showDialog: (content) => {dispatch(showDialog(content))},
        resetServerError: () => {dispatch(resetServerError())}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSection);