import {connect} from 'react-redux';
import CategoryPage from '../../component/page/CategoryPage';
import {cleanList, loadListCall} from '../../action/dataAction';
const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		list: state.data.list
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadList: (query) => {dispatch(loadListCall(query));},
		cleanList: () => {dispatch(cleanList());},        
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
