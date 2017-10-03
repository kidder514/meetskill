import React, {Component} from 'react';
import {connect} from "react-redux";
import NotificationPage from "../../components/dashboard/NotificationPage"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		userData: state.userData
	}
}

export default connect(mapStateToProps)(NotificationPage);