import React, {Component} from 'react';
import {connect} from "react-redux";
import FilterSection from "../../component/section/FilterSection"

const mapStateToProps = (state) => {
	return {
		userState: state.userState
	}
}

export default connect(mapStateToProps)(FilterSection);
