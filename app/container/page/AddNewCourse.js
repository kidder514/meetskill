import {connect} from 'react-redux';
import AddNewCoursePage from '../../component/page/AddNewCoursePage';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui
	};
};

export default connect(mapStateToProps)(AddNewCoursePage);
