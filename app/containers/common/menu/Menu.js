import React, {Component} from 'react';
import {connect} from "react-redux";
import MenuSection from "../../../components/common/menu/MenuSection"
import { loadCategoriesCall } from "../../../actions/dataActions"
import { showDialog } from "../../../actions/uiActions"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
        ui: state.ui,
        categories: state.data.categories
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCategories: () => {dispatch(loadCategoriesCall())},
        showDialog: (content) => {dispatch(showDialog(content))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuSection);
