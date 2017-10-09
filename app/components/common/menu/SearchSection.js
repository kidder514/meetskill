import React, {Component} from 'react';
import {Link} from "react-router";
import IconButton from "../../../helpers/uicomponent/IconButton";
import strings from "../../../Strings"

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
	        <div className={"search-section " + (this.props.className ? this.props.className : "")}>
				<input name="keyword" placeholder={strings.SearchEnterKeyWord} />
	        	<IconButton className="search-icon" onClick={this.search} icon="search" />	
	        </div>
	    )
    }
}

export default SearchSection;
