import React, {Component} from 'react';
import {connect} from "react-redux";
import ShoppingCartPage from "../../component/page/ShoppingCartPage"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	}
}

export default connect(mapStateToProps)(ShoppingCartPage);
