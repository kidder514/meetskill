import {connect} from 'react-redux';
import HomePage from '../../component/page/HomePage';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	};
};

export default connect(mapStateToProps)(HomePage);
