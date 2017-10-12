import React, {Component} from 'react';
import {connect} from "react-redux";
import CategoryPopOverSection from "../../../component/common/menu/CategoryPopOverSection"

const mapStateToProps = (state) => {
	return {
		category: state.data.category
	}
}

export default connect(mapStateToProps)(CategoryPopOverSection);
