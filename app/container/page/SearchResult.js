import React, {Component} from 'react';
import {connect} from "react-redux";
import HomeFoodPage from "../component/HomeFoodPage"
import { dishListCall } from "../action/dishAction"
import { updateSearchOptionsCall } from "../action/searchAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		dishListData: state.homeFoodDish
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDish: (query) => {dispatch(dishListCall(query))},
        updateSearchOptions: (query) => {dispatch(updateSearchOptionsCall(query))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFoodPage);
