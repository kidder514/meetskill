import React, {Component} from 'react';
import {connect} from "react-redux";
import ProfilePopOverSection from "../../../component/common/menu/ProfilePopOverSection"

const mapStateToProps = (state) => {
	return {
		list: state.data.list
	}
}

export default connect(mapStateToProps)(ProfilePopOverSection);
