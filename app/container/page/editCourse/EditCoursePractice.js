import {connect} from 'react-redux';
import EditCoursePracticePage from '../../../component/page/editCourse/EditCoursePracticePage';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui,
		singleMyCourse: state.data.singleMyCourse
	};
};

export default connect(mapStateToProps)(EditCoursePracticePage);
