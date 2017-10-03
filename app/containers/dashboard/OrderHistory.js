import React, {Component} from 'react';
import {connect} from "react-redux";
import OrderHistoryPage from "../../components/dashboard/OrderHistoryPage"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		userData: state.userData
	}
}

export default connect(mapStateToProps)(OrderHistoryPage);