import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoginSection from '../../component/section/LoginSection'
import { loginCall } from "../../action/userAction" 
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
        showDialog: (content) => {dispatch(showDialog(content))},
        resetServerError: () => {dispatch(resetServerError())}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSection);