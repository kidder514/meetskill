import {connect} from 'react-redux';
import ProfilePopOverSection from '../../../component/common/menu/ProfilePopOverSection';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		data: state.data
	};
};

export default connect(mapStateToProps)(ProfilePopOverSection);
