import {connect} from 'react-redux';
import AccountAccountPage from '../../../component/page/account/AccountAccountPage';
import { changePasswordCall } from '../../../action/userAction';
import { resetAllServerError } from '../../../action/uiAction';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changePasswordCall: (data, header) => {dispatch(changePasswordCall(data, header));},
		resetAllServerError: () => {dispatch(resetAllServerError());},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountAccountPage);
