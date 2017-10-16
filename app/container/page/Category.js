import React, {Component} from 'react';
import {connect} from "react-redux";
import CategoryPage from "../../component/page/CategoryPage"

const mapStateToProps = (state) => {
	return {
		userState: state.userState
	}
}

export default connect(mapStateToProps)(CategoryPage);
