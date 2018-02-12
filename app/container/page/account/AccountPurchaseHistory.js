import {connect} from 'react-redux';
import AccountPurchaseHistoryPage from '../../../component/page/account/AccountPurchaseHistoryPage';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	};
};

export default connect(mapStateToProps)(AccountPurchaseHistoryPage);
