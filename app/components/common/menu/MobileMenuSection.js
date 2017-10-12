import React, {Component} from 'react';
import {Link} from "react-router";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, ListGroup, ListGroupItem } from 'reactstrap';
import LoadingSpinner from "../../../helpers/uicomponent/LoadingSpinner"
import IconButton from "../../../helpers/uicomponent/IconButton";
import SearchField from "../../../containers/common/menu/SearchField"
import strings from "../../../Strings"
import config from "../../../config"
import pagePath from "../../../pagePath"

class MobileMenuSection extends Component {
	constructor(props) {
		super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
    }
        
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
	    return (
	        <div className="menu-wrapper mobile-menu">
                <Navbar color="faded" light>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar>
                        <ListGroup>
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Morbi leo risus</ListGroupItem>
                            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </Nav>
                    </Collapse>
                </Navbar>
			</div>
		)
    }
}


export default MobileMenuSection;
