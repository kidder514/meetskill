
import {connect} from 'react-redux';
import HelpPage from '../../component/page/HelpPage';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	};
};

export default connect(mapStateToProps)(HelpPage);
