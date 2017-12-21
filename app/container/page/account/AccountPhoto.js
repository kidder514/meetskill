import {connect} from 'react-redux';
import AccountPhotoPage from '../../../component/page/account/AccountPhotoPage';
import { updatePhotoCall } from '../../../action/userAction';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updatePhotoCall: (data, headers) => {dispatch(updatePhotoCall(data, headers));},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountPhotoPage);
