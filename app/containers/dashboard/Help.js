import React, {Component} from 'react';
import {connect} from "react-redux";
import HelpPage from "../../components/dashboard/HelpPage"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		userData: state.userData
	}
}

export default connect(mapStateToProps)(HelpPage);