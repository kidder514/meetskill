import React, {Component} from 'react';
import {connect} from "react-redux";
import {InitApp} from "../action/appAction"
import OutterWrapper from "../component/OutterWrapper"

const mapStateToProps = (state) => {
	return {
		app: state.app
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        InitApp: () => {dispatch(InitApp())},
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutterWrapper);
