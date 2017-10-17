import React, {Component} from 'react';
import {connect} from "react-redux";
import CategoryPage from "../../component/page/CategoryPage"
import {cleanData, loadDataCall} from "../../action/dataAction"
const mapStateToProps = (state) => {
	return {
        userState: state.userState,
        data: state.data.data
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: (query) => {dispatch(loadDataCall(query))},
        cleanData: (query) => {dispatch(cleanData())},        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
