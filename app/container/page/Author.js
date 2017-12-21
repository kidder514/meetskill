
import React, {Component} from 'react';
import {connect} from "react-redux";
import AuthorPage from "../../component/page/AuthorPage"

const mapStateToProps = (state) => {
	return {
        userState: state.userState,
	}
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         loadList: (query) => {dispatch(loadListCall(query))},
//         cleanList: (query) => {dispatch(cleanList())},        
//     };
// };

export default connect(mapStateToProps)(AuthorPage);