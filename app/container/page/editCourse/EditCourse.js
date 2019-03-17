import {connect} from 'react-redux';
import EditCoursePage from '../../../component/page/editCourse/EditCoursePage';
import { loadSingleMyCourseCall } from '../../../action/dataAction';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui,
		singleMyCourse: state.data.singleMyCourse
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadSingleMyCourseCall: () => {dispatch(loadSingleMyCourseCall());},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCoursePage);
