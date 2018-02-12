import {connect} from 'react-redux';
import InboxPage from '../../component/page/InboxPage';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	};
};

export default connect(mapStateToProps)(InboxPage);
