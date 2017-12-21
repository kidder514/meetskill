import React, {Component} from 'react';
import Menu from '../../../container/common/menu/Menu';
import MobileMenu from '../../../container/common/menu/MobileMenu';
class MenuWrapper extends Component {
	render() {
		return ([
			<Menu key="menu" />,
			<MobileMenu key="mobile-menu" />
		]);
	}
}

export default MenuWrapper;
