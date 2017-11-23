import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoginSection from '../../component/section/LoginSection'
import { loginCall } from "../../action/userAction" 
import { showDialog, hideDialog } from "../../action/uiAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginCall: (query) => {dispatch(loginCall(query))},
        showDialog: (content) => {dispatch(showDialog(content))},
        hideDialog: () => {dispatch(hideDialog())}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSection);