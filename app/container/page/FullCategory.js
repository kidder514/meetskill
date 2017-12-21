import {connect} from 'react-redux';
import FullCategoryPage from '../../component/page/FullCategoryPage';

const mapStateToProps = (state) => {
	return {
		userState: state.userState
	};
};

export default connect(mapStateToProps)(FullCategoryPage);
