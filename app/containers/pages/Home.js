import React, {Component} from 'react';
import {connect} from "react-redux";
import HomePage from "../../components/pages/HomePage"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	}
}

export default connect(mapStateToProps)(HomePage);
