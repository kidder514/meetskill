import { connect } from 'react-redux';
import ForgotPasswordSection from '../../component/section/ForgotPasswordSection';
import { forgotPasswordCall } from '../../action/userAction';
import { resetAllServerError } from '../../action/uiAction';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		forgotPasswordCall: (data) => {dispatch(forgotPasswordCall(data));},
		resetAllServerError: () => {dispatch(resetAllServerError());},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordSection);