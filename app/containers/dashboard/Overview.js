import React, {Component} from 'react';
import {connect} from "react-redux";
import OverviewPage from "../../components/dashboard/OverviewPage"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		userData: state.userData
	}
}

export default connect(mapStateToProps, null)(OverviewPage);