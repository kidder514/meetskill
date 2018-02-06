import {connect} from 'react-redux';
import MobileMenuSection from '../../../component/common/menu/MobileMenuSection';
import { loadCategoryCall } from '../../../action/dataAction';
import { showDialog } from '../../../action/uiAction';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		category: state.data.category
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadCategory: () => {dispatch(loadCategoryCall());},
		showDialog: (content) => {dispatch(showDialog(content));}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenuSection);
