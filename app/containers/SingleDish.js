import React, {Component} from 'react';
import {connect} from "react-redux";
import SingleDishPage from "../components/SingleDishPage"
import { singleDishCall } from "../action/singleDishAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		singleDishData: state.singleDishData
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadSingleDish: (query) => {
            dispatch(singleDishCall(query))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleDishPage);
