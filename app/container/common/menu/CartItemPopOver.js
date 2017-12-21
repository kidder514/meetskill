import {connect} from 'react-redux';
import CartItemPopOverSection from '../../../component/common/menu/CartItemPopOverSection';

const mapStateToProps = (state) => {
	return {
		list: state.data.list
	};
};

export default connect(mapStateToProps)(CartItemPopOverSection);
