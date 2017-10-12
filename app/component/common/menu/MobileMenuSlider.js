import React, {Component} from 'react';
import {Link} from "react-router";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, ListGroup, ListGroupItem } from 'reactstrap';
import strings from "../../../String"

class MobileMenuSection extends Component {
	constructor(props) {
		super(props);
    }
    
    render() {
	    return (
	        <div className="mobile-slider">
                <ListGroup>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
			</div>
		)
    }
}


export default MobileMenuSection;
