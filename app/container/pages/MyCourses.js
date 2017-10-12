import React, {Component} from 'react';
import {connect} from "react-redux";
import MyCoursePage from "../../component/page/MyCoursePage"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	}
}

export default connect(mapStateToProps)(MyCoursePage);
