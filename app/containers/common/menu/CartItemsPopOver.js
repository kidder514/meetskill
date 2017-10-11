import React, {Component} from 'react';
import {connect} from "react-redux";
import CartItemsPopOverSection from "../../../components/common/menu/CartItemsPopOverSection"

const mapStateToProps = (state) => {
	return {
		data: state.data.data
	}
}

export default connect(mapStateToProps)(CartItemsPopOverSection);
