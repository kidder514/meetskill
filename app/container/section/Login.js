import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoginSection from '../../component/section/LoginSection'
import { loginCall } from "../../action/userAction" 

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginCall: (query) => {dispatch(loginCall(query))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSection);