import React, {Component} from 'react';
import {connect} from "react-redux";
import MenuSection from "../../../components/common/menu/MenuSection"
import { loadCategoriesCall } from "../../../actions/dataActions"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
        ui: state.ui,
        categories: state.data.categories
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCategories: () => {dispatch(loadCategoriesCall())}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuSection);
