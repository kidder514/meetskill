import React, {Component} from 'react';
import {connect} from "react-redux";
import CartItemPopOverSection from "../../../component/common/menu/CartItemPopOverSection"

const mapStateToProps = (state) => {
	return {
		data: state.data.data
	}
}

export default connect(mapStateToProps)(CartItemPopOverSection);
