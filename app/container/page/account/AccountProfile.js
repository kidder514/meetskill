import {connect} from 'react-redux';
import AccountProfilePage from '../../../component/page/account/AccountProfilePage';
import { updateProfileCall } from '../../../action/userAction';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateProfileCall: (data) => {dispatch(updateProfileCall(data));},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountProfilePage);
