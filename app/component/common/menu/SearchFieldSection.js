import React, {Component} from 'react';
import IconButton from '../../../helper/uicomponent/IconButton';
import string from '../../../String';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

class SearchSection extends Component {
	constructor(props) {
		super(props);
		this.search = this.search.bind(this);
	}

	search(){
	}

	render() {
		return (
			<InputGroup className={'search-section ' + (this.props.className ? this.props.className : '')}>
				<Input name="keyword" placeholder={string.SearchEnterKeyWord} />
				<InputGroupAddon onClick={this.search} className="search-field-icon">
					<IconButton icon="search" />
				</InputGroupAddon>
			</InputGroup>
		);
	}
}

export default SearchSection;
