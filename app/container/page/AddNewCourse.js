import {connect} from 'react-redux';
import AddNewCoursePage from '../../component/page/AddNewCoursePage';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui
	};
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         loadList: (query) => {dispatch(loadListCall(query))},
//         cleanList: (query) => {dispatch(cleanList())},        
//     };
// };

export default connect(mapStateToProps)(AddNewCoursePage);
