import {connect} from 'react-redux';
import CoursePage from '../../component/page/CoursePage';
import { buyCourse, addToCart } from '../../action/paymentAction';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		course: state.data.course
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyCourse: (id) => {dispatch(buyCourse(id));},
		addToCart: (id) => {dispatch(addToCart(id));}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
