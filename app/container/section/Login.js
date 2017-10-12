import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoginSection from '../../component/section/LoginSection'

const mapStateToProps = (state) => {
	return {
		section: state.userState,
	}
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateDish: (query) => {dispatch(dishListCall(query))},
//     };
// };

export default connect(mapStateToProps)(LoginSection);