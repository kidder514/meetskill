import React, {Component} from 'react';
import {connect} from "react-redux";
import { loadDataCall } from "../../../actions/dataActions"
import SearchFieldSection from "../../../components/common/menu/SearchFieldSection"

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
