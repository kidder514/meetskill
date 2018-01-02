import { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logout } from '../action/userAction';

class Logout extends Component {

	componentWillMount() {
		this.props.logout();
		this.props.router.replace('/');
	}

	render() {
		return null;
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => {dispatch(logout());}
	};
};

export default withRouter(connect(null, mapDispatchToProps)(Logout));