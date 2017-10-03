import React, {Component} from 'react';
import {connect} from "react-redux";
import CookPage from "../components/CookPage"
import { dishListCall } from "../action/dishAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		dishListData: state.homeFoodDish
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        initCookCall: (query) => {
            dispatch(dishListCall(query))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CookPage);