import {connect} from 'react-redux';
import EditCoursePricePage from '../../../component/page/editCourse/EditCoursePricePage';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui,
		singleMyCourse: state.data.singleMyCourse
	};
};

export default connect(mapStateToProps)(EditCoursePricePage);
