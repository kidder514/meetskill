import {connect} from 'react-redux';
import AccountPage from '../../component/page/AccountPage';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui
	};
};

// const mapDispatchToProps = (dispatch) => {
//  return {
//         // resetAllServerError: () => {dispatch(resetAllServerError())},
//  }
// }

export default connect(mapStateToProps)(AccountPage);
