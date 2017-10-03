import React, {Component} from 'react';
import {connect} from "react-redux";
import FrontPage from "../../components/static/FrontPage"
import { dishListCall } from "../../action/dishAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		dishListData: state.homeFoodDish
	}
}

//replace the postListCall by front page call
// const mapDispatchToProps = (dispatch) => {
//     return {
//         initPost: (query) => {
//             dispatch(postListCall(query))
//         }
//     };
// };

export default connect(mapStateToProps, null)(FrontPage);
