import React, {Component} from 'react';
import {connect} from "react-redux";
import DeliveryFeeSection from "../components/DeliveryFeeSection"
import { setAddress } from "../action/userAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAddress: (addressObj) => {dispatch(setAddress(addressObj))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryFeeSection);
