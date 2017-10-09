import React, {Component} from 'react';
import {connect} from "react-redux";
import InstructorDashboardPage from "../../components/pages/InstructorDashboardPage"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	}
}

export default connect(mapStateToProps)(InstructorDashboardPage);
