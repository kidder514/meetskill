import { connect } from 'react-redux';
import LoginSection from '../../component/section/LoginSection';
import { loginCall, googleLoginCall,facebookLoginCall, setRememberLogin } from '../../action/userAction'; 
import { showDialog,resetAllServerError } from '../../action/uiAction';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loginCall: (query) => {dispatch(loginCall(query));},
		googleLoginCall: (data) => {dispatch(googleLoginCall(data));},
		facebookLoginCall: (data) => {dispatch(facebookLoginCall(data));},                
		showDialog: (content) => {dispatch(showDialog(content));},
		resetAllServerError: () => {dispatch(resetAllServerError());},
		setRememberLogin: (rememberLogin) => {dispatch(setRememberLogin(rememberLogin));}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSection);