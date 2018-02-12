import {connect} from 'react-redux';
import AuthorPage from '../../component/page/AuthorPage';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	};
};

export default connect(mapStateToProps)(AuthorPage);
