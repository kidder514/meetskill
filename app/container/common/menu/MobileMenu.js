import React, {Component} from 'react';
import {connect} from "react-redux";
import MobileMenuSection from "../../../component/common/menu/MobileMenuSection"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	}
}

export default connect(mapStateToProps)(MobileMenuSection);