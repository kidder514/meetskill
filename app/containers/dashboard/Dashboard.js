import React, {Component} from 'react';
import {connect} from "react-redux";
import DashboardPage from "../../components/dashboard/DashboardPage"
import { userDataCall } from "../../action/userAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		userData: state.userData
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        initUserData: (query) => {
            dispatch(userDataCall(query))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);