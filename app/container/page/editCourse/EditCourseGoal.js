import {connect} from 'react-redux';
import EditCourseGoalPage from '../../../component/page/editCourse/EditCourseGoalPage';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui,
		singleMyCourse: state.data.singleMyCourse
	};
};

export default connect(mapStateToProps)(EditCourseGoalPage);
