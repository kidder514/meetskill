import {connect} from 'react-redux';
import FilterSection from '../../component/section/FilterSection';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		search: state.search
	};
};

export default connect(mapStateToProps)(FilterSection);
