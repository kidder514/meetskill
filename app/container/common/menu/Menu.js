import React, {Component} from 'react';
import {connect} from "react-redux";
import MenuSection from "../../../component/common/menu/MenuSection"
import { loadCategoryCall } from "../../../action/dataAction"
import { showDialog } from "../../../action/uiAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
        ui: state.ui,
        category: state.data.category
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCategory: () => {dispatch(loadCategoryCall())},
        showDialog: (content) => {dispatch(showDialog(content))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuSection);
