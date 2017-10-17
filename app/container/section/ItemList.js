import React, {Component} from 'react';
import {connect} from "react-redux";
import ItemListSection from "../../component/section/ItemListSection"

const mapStateToProps = (state) => {
	return {
		userState: state.userState
	}
}

export default connect(mapStateToProps)(ItemListSection);
