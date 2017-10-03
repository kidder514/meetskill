import React, {Component} from 'react';
import {connect} from "react-redux";
import { dishListCall } from "../../action/dishAction"
import { updateSearchOptionsCall } from "../../action/searchAction"
import SearchBox from "../../components/common/SearchBox"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		search:state.search
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		doSearch: (query) =>{dispatch(dishListCall(query))},
		initSearchOptions: (query) =>{dispatch(updateSearchOptionsCall(query))}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);