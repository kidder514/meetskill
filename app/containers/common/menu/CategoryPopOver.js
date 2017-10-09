import React, {Component} from 'react';
import {connect} from "react-redux";
import CategoryPopOverSection from "../../../components/common/menu/CategoryPopOverSection"
import { loadCategoriesCall } from "../../../actions/dataActions";

const mapStateToProps = (state) => {
	return {
		categories: state.data.categories
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCategories: (query) => {dispatch(loadCategoriesCall(query))},
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPopOverSection);
