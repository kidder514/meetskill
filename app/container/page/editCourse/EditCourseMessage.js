import {connect} from 'react-redux';
import EditCourseMessagePage from '../../../component/page/editCourse/EditCourseMessagePage';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui,
		singleMyCourse: state.data.singleMyCourse
	};
};

export default connect(mapStateToProps)(EditCourseMessagePage);
