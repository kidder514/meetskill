import React, {Component} from 'react';
import {connect} from "react-redux";
import ProfilePopOverSection from "../../../component/common/menu/ProfilePopOverSection"
import { logout } from "../../../action/userAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		list: state.data.list
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (query) => {dispatch(logout(query))},
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePopOverSection);
