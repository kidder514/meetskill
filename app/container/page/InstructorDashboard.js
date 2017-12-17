import React, {Component} from 'react';
import {connect} from "react-redux";
import InstructorDashboardPage from "../../component/page/InstructorDashboardPage"
import { activateInstructorCall } from "../../action/userAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        activateInstructorCall: (data, headers) => {dispatch(activateInstructorCall(data, headers))},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(InstructorDashboardPage);
