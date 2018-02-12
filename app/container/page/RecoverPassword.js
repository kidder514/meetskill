import {connect} from 'react-redux';
import RecoverPasswordPage from '../../component/page/RecoverPasswordPage';
import {updatePasswordCall} from '../../action/userAction';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updatePasswordCall: (data) => {dispatch(updatePasswordCall(data));},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPasswordPage);
