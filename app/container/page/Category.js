import {connect} from 'react-redux';
import CategoryPage from '../../component/page/CategoryPage';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		list: state.data.list
	};
};

export default connect(mapStateToProps)(CategoryPage);
