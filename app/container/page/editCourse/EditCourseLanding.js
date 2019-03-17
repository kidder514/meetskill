import {connect} from 'react-redux';
import EditCourseLandingPage from '../../../component/page/editCourse/EditCourseLandingPage';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui,
		singleMyCourse: state.data.singleMyCourse
	};
};

export default connect(mapStateToProps)(EditCourseLandingPage);
