import React, {Component} from 'react';
import {connect} from "react-redux";
import AccountPage from "../../components/pages/AccountPage"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	}
}

export default connect(mapStateToProps)(AccountPage);
