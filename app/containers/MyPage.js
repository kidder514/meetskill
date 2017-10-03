import React, {Component} from 'react';
import {connect} from "react-redux";
import MyPagePage from "../components/MyPagePage"
import { myDishListCall } from "../action/dishAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		myDishListData: state.myDish
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        initMyDish: (query) => {
            dispatch(myDishListCall(query))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPagePage);
