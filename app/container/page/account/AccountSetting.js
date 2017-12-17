import React, {Component} from 'react';
import {connect} from "react-redux";
import AccountSettingPage from "../../../component/page/account/AccountSettingPage"
import { changeSettingCall } from "../../../action/userAction"


const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        changeSettingCall: (data, header) => {dispatch(changeSettingCall(data, header))},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettingPage);
