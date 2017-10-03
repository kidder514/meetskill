import React, {Component} from 'react';
import {connect} from "react-redux";
import CheckoutPage from "../components/CheckoutPage"

const mapStateToProps = (state) => {
	return {
		userState: state.userState
	}
}

export default connect(mapStateToProps)(CheckoutPage);
