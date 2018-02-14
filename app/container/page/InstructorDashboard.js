import {connect} from 'react-redux';
import InstructorDashboardPage from '../../component/page/InstructorDashboardPage';
import { activateInstructorCall } from '../../action/userAction';
import { loadMyCourseListCall } from '../../action/dataAction';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		myCourseList: state.data.myCourseList
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		activateInstructorCall: (data) => {dispatch(activateInstructorCall(data));},
		loadMyCourseListCall: () => {dispatch(loadMyCourseListCall());}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(InstructorDashboardPage);
