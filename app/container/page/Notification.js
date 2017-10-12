import React, {Component} from 'react';
import {connect} from "react-redux";
import NotificationPage from "../../component/page/NotificationPage"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	}
}

export default connect(mapStateToProps)(NotificationPage);
