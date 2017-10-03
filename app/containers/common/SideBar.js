import React, {Component} from 'react';
import {connect} from "react-redux";
import SideBarPage from "../../components/common/SideBarPage"

const mapStateToProps = (state) => {
	return {
		userState:state.userState
	}
}

export default connect(mapStateToProps, null)(SideBarPage)
