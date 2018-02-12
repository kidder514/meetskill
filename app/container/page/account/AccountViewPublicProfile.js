import {connect} from 'react-redux';
import AccountViewPublicProfilePage from '../../../component/page/account/AccountViewPublicProfilePage';

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

export default connect(mapStateToProps)(AccountViewPublicProfilePage);
