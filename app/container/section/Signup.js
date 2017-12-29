import { connect } from 'react-redux';
import SignupSection from '../../component/section/SignupSection';
import { signupCall, setRememberLogin } from '../../action/userAction'; 
import { hideDialog, resetAllServerError } from '../../action/uiAction';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signupCall: (query) => {dispatch(signupCall(query));},
		hideDialog: () => {dispatch(hideDialog());},
		resetAllServerError: () => {dispatch(resetAllServerError());},
		setRememberLogin: (rememberLogin) => {dispatch(setRememberLogin(rememberLogin));}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupSection);