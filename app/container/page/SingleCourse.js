import {connect} from 'react-redux';
import SingleCoursePage from '../../component/page/SingleCoursePage';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		course: state.data.course
	};
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateDish: (query) => {dispatch(dishListCall(query))},
//         updateSearchOptions: (query) => {dispatch(updateSearchOptionsCall(query))}
//     };
// };

export default connect(mapStateToProps)(SingleCoursePage);
