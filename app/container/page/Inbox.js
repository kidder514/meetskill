import {connect} from 'react-redux';
import InboxPage from '../../component/page/InboxPage';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	};
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         loadList: (query) => {dispatch(loadListCall(query))},
//         cleanList: (query) => {dispatch(cleanList())},        
//     };
// };

export default connect(mapStateToProps)(InboxPage);
