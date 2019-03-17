import {connect} from 'react-redux';
import AddNewCoursePage from '../../component/page/AddNewCoursePage';
import { createNewCourseTitleCall } from '../../action/dataAction';

const mapStateToProps = (state) => {
	return {
		user: state.userState,
		ui: state.ui,
		singleMyCourse: state.data.singleMyCourse
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		createNewCourseTitleCall: (data) => {dispatch(createNewCourseTitleCall(data));},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCoursePage);
