import React, {Component} from 'react';
import {connect} from "react-redux";
import { loadDataCall } from "../../../actions/dataActions"
import SearchSection from "../../../components/common/menu/SearchSection"

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

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);
