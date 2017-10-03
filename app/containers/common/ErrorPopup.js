import React, {Component} from 'react';
import {connect} from "react-redux";
import {popupError} from "../../action/errorAction"
import ErrorPage from "../../components/common/ErrorPage"

const mapStateToProps = (state) => {
	return {
		error:state.ui.errorMessage
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    popupError: (msg) => {
      dispatch(popupError(msg))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage)
