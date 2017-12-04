import React, {Component} from 'react';
import {connect} from "react-redux";
import AccountViewPublicProfilePage from "../../../component/page/account/AccountViewPublicProfilePage"

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

export default connect(mapStateToProps)(AccountViewPublicProfilePage);
