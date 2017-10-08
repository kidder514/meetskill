import React, {Component} from 'react';
import {connect} from "react-redux";
import MenuSection from "../../components/common/MenuSection"
import { showDialog, ShowErrorDialog } from "../../actions/uiActions"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        showDialog: (dialogType) => {dispatch(showDialog(dialogType))},
        ShowErrorDialog: (errorMessage) => {dispatch(ShowErrorDialog(errorMessage))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuSection);
