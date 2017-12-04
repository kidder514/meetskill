import React, {Component} from 'react';
import {connect} from "react-redux";
import AccountPreferencePage from "../../../component/page/account/AccountPreferencePage"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
//         // recoverPasswordCall: (data) => {dispatch(recoverPasswordCall(data))},
//         // resetAllServerError: () => {dispatch(resetAllServerError())},
// 	}
// }

export default connect(mapStateToProps)(AccountPreferencePage);
