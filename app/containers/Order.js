import React, {Component} from 'react';
import {connect} from "react-redux";
import OrderSection from "../components/OrderSection"
import placeOrder from "../action/orderAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        placeOrder: (order) => {dispatch(placeOrder(order))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderSection);
