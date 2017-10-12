import React, {Component} from 'react';
import {connect} from "react-redux";
import { loadDataCall } from "../../../action/dataAction"
import SearchFieldSection from "../../../component/common/menu/SearchFieldSection"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
       	loadData: (keywork) => {dispatch(loadDataCall(keywork))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFieldSection);
