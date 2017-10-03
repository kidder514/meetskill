import {connect} from "react-redux";
import LoadingPage from "../../components/common/LoadingPage"

const mapStateToProps = (state) => {
	return {
		loading: state.ui.loading
	};
};

export default connect(mapStateToProps, null)(LoadingPage);
