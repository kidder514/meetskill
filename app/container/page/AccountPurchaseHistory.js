import {connect} from 'react-redux';
import AccountPurchaseHistoryPage from '../../component/page/AccountPurchaseHistoryPage';

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

export default connect(mapStateToProps)(AccountPurchaseHistoryPage);
