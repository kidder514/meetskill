import {connect} from 'react-redux';
import HomeFoodPage from '../component/HomeFoodPage';
import { dishListCall } from '../action/dishAction';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		dishListData: state.homeFoodDish
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateDish: (query) => {dispatch(dishListCall(query));},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFoodPage);
