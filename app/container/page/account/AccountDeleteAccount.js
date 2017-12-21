import {connect} from 'react-redux';
import AccountDeleteAccountPage from '../../../component/page/account/AccountDeleteAccountPage';
import { deleteAccountCall } from '../../../action/userAction';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteAccountCall: (data, header) => {dispatch(deleteAccountCall(data, header));},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountDeleteAccountPage);
