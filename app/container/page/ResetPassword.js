import {connect} from 'react-redux';
import ResetPasswordPage from '../../component/page/ResetPasswordPage';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	};
};

// const mapDispatchToProps = (dispatch) => {
//  return {
//         recoverPasswordCall: (data) => {dispatch(recoverPasswordCall(data))},
//  }
// }

export default connect(mapStateToProps)(ResetPasswordPage);
