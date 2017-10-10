import React, {Component} from 'react';
import {Link} from "react-router";
import IconButton from "../../../helpers/uicomponent/IconButton";
import strings from "../../../Strings"
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

class SearchSection extends Component {
	constructor(props) {
		super(props);
		this.search = this.search.bind(this);
	}

	search(){
		this.props.loadData("should be the key word here");
	}

    render() {
	    return (
			<InputGroup className={"search-section " + (this.props.className ? this.props.className : "")}>
				<Input name="keyword" placeholder={strings.SearchEnterKeyWord} />
				<InputGroupAddon onClick={this.search} className="search-icon">
					<IconButton   icon="search" />	
				</InputGroupAddon>
			</InputGroup>
	    )
    }
}

export default SearchSection;
