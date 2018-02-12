import {connect} from 'react-redux';
import SearchFieldSection from '../../../component/common/menu/SearchFieldSection';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	};
};

export default connect(mapStateToProps)(SearchFieldSection);
