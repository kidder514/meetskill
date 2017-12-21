import {connect} from 'react-redux';
import { loadListCall } from '../../../action/dataAction';
import SearchFieldSection from '../../../component/common/menu/SearchFieldSection';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadList: (keywork) => {dispatch(loadListCall(keywork));}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFieldSection);
