import {connect} from 'react-redux';
import FooterSection from '../../component/common/FooterSection';

const mapStateToProps = (state) => {
	return {
		userState: state.userState
	};
};

export default connect(mapStateToProps)(FooterSection);
