import {connect} from 'react-redux';
import {InitAppCall} from '../action/appAction';
import OutterWrapper from '../component/OutterWrapper';

const mapStateToProps = (state) => {
	return {
		app: state.app,
		ui: state.ui
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		InitAppCall: () => {dispatch(InitAppCall());},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(OutterWrapper);
