import React, {Component} from 'react';
import {connect} from "react-redux";
import InstructorDashboardPage from "../../component/page/InstructorDashboardPage"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	}
}

export default connect(mapStateToProps)(InstructorDashboardPage);
