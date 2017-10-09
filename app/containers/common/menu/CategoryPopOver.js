import React, {Component} from 'react';
import {connect} from "react-redux";
import CategoryPopOverSection from "../../../components/common/menu/CategoryPopOverSection"

const mapStateToProps = (state) => {
	return {
		categories: state.data.categories
	}
}

export default connect(mapStateToProps)(CategoryPopOverSection);
