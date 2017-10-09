import React, {Component} from 'react';
import {connect} from "react-redux";
import MyCoursesPage from "../../components/pages/MyCoursesPage"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	}
}

export default connect(mapStateToProps)(MyCoursesPage);
