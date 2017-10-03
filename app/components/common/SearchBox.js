import React, {Component} from 'react';
import TextField from '../../uicomponent/form/TextField';
import SingleSelection from '../../uicomponent/form/SingleSelection';
import OptionItem from '../../uicomponent/form/OptionItem';
import IconButton from '../../uicomponent/button/IconButton'
import Gautocomplete from "../../helpers/GoogleAutocomplete"
import { removeValue, addArray } from '../../helpers/Array'

class SearchBox extends Component {

	constructor(props){
		super(props);
		this.state = this.props.search;
		this.state.isExpandOpened = "close";
		this.initialState = JSON.parse(JSON.stringify(this.props.search));
		this.onChange = this.onChange.bind(this);
		this.autocompleteOnChange = this.autocompleteOnChange.bind(this);
		this.handleLocaltion = this.handleLocaltion.bind(this);
		this.checkboxOnChange = this.checkboxOnChange.bind(this);
		this.reset = this.reset.bind(this);
		this.toggleMore = this.toggleMore.bind(this);
		this.submit = this.submit.bind(this);
	}

	componentDidMount(){
		if (this.props.search.searchOptions == ""){
			this.props.initSearchOptions(this.props.userState.currentAddress);
		}
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}

	handleLocaltion(locationObj){
		if(locationObj.formatted_address != null && locationObj.geometry != null){
			this.setState({location:locationObj.formatted_address,
				coordinate: String(locationObj.geometry.location.lat()) + "," + String(locationObj.geometry.location.lng())});
		}
	}

	autocompleteOnChange(e){
		this.setState({location: e.target.value});
	}

	checkboxOnChange(e){

		switch (e.target.name){
			case "eatingOptions":
				var newOptions = this.state.options;
				if (e.target.checked){
					if (e.target.value === "All")
					{
						addArray(newOptions, this.props.search.searchOptions.eatingOptions);
					}else{
						newOptions.push(e.target.value);
					}

					this.setState({options: newOptions})
				}else{
					if (e.target.value === "All")
					{
						newOptions = [];
					}else{
						newOptions = removeValue(newOptions, "All");
					}

					this.setState({options: removeValue(newOptions, e.target.value)})
				}
			break;
			case "fromKitchen":
				var newOptions = this.state.fromKitchen;
				if (e.target.checked){
					if (e.target.value === "All")
					{
						addArray(newOptions, this.props.search.searchOptions.fromKitchen);
					}else{
						newOptions.push(e.target.value);
					}

					this.setState({fromKitchen: newOptions})
				}else{
					if (e.target.value === "All")
					{
						newOptions = [];
					}else{
						newOptions = removeValue(newOptions, "All");
					}

					this.setState({fromKitchen: removeValue(newOptions, e.target.value)})
				}
			break;
			case "date":
				var newOptions = this.state.date;
				if (e.target.checked){
					newOptions.push(e.target.value);
					this.setState({date: newOptions})
				}else{
					this.setState({date: removeValue(newOptions, e.target.value)})
				}
			break;
			case "other date":
				if (e.target.checked){
					this.setState({showCalendar: true});
				}else{
					this.setState({showCalendar: false});
				}
			break;
			default:
			break;
		}
	}

	reset(e){
		e.preventDefault();
		this.initialState.isExpandOpened = this.state.isExpandOpened
		this.setState(JSON.parse(JSON.stringify(this.initialState)));
		this.gaAutocomplete.autocompleteInput.value = "";
	}

	submit(e){
		e.preventDefault();
		this.props.doSearch(this.state);
	}

	toggleMore(){
		if (this.state.isExpandOpened === "close"){
			this.setState({isExpandOpened: "open"});
		}else{
			this.setState({isExpandOpened: "close"});
		}
	}

 	render() {

 		if (this.props.search.searchOptions == "")
 		{
 			return (<div>Loading search options</div>);
 		}else{
			return (
		    	<div className="search-wrapper container-fluid">
		    		<div className="search-main-wrapper row" >
						<Gautocomplete
							className="col-sm-5 col-xs-10 search-main-left"
							fieldClass="search-main-left-input"
		    				placeholder="Search for location..."
		    				handleLocaltion={this.handleLocaltion}
		    				autocompleteOnChange={this.autocompleteOnChange}
							ref={(c) => this.gaAutocomplete = c}
							types="(cities)"
		    			/>
			    		<TextField 
			    			id="id"
			    			className="col-sm-5 col-xs-10 search-main-right"
			    			fieldClass="search-main-right-input"
			    			value={this.state.keyword}
			    			onChange={this.onChange}
			    			name="keyword"
			    			placeholder="Search keyword"
				    	/>
				    	<div className="col-md-2 col-xs-2 search-main-button">
				            <IconButton
				            	onClick={this.submit}
				            	icon="search"
				            />
			            </div>
		    		</div>
	    			<div className="search-expand clearfix" >
			            <div className="more-options-button pull-right" onClick={this.toggleMore}>
			            	<i className="material-icons">{this.state.isExpandOpened === "close"? "keyboard_arrow_down" : "keyboard_arrow_up" }</i>
			            	<span>{this.state.isExpandOpened === "close"? "More Options" : "Less Options" }</span>
			            </div>
		    			<div className="reset-button pull-right" onClick={this.reset}>
		    				<i className="material-icons" >restore</i>
		    				<span>Restore</span>
			            </div>
	    			</div>
	    			<div id="more-options" className={this.state.isExpandOpened}>
		    			<div className="section-1 row clearfix">
						    <div className="col-sm-2">
								<label>
						    		Category
						    	</label>
						    	<SingleSelection
									className=""
						        	onChange={this.onChange}
									value={this.state.category}
						        	name="category"
						        >
									{this.props.search.searchOptions.category.map((item, i) => 
										<OptionItem 
											key={"category" + i} 
											value={item} 
											label={item} />)
									}
						        </SingleSelection>
						    </div>	
						    <div className="col-sm-2">
						    	<label>
						    		Region
						    	</label>
						    	<SingleSelection
					    			className=""
				                	onChange={this.onChange}
					    			value={this.state.region}
				                	name="region"
				                >
									{this.props.search.searchOptions.region.map((item, i) => 
										<OptionItem 
											key={"region" + i} 
											value={item} 
											label={item} />)}
				                </SingleSelection>
						    </div>
						    <div className="col-sm-2">
						    	<label>
						    		allergen
						    	</label>
						    	<SingleSelection
					    			className=""
				                	onChange={this.onChange}
					    			value={this.state.allergen}
				                	name="allergen"
				                >
									{this.props.search.searchOptions.allergen.map((item, i) => 
										<OptionItem 
											key={"allergen" + i} 
											value={item} 
											label={item} />)}
				                </SingleSelection>
						    </div>
						    <div className="col-sm-2">
						    	<label>
						    		Ratio
						    	</label>
						    	<SingleSelection
					    			className=""
				                	onChange={this.onChange}
					    			value={this.state.ratio}
				                	name="ratio"
				                >
									{this.props.search.searchOptions.ratio.map((item, i) => 
										<OptionItem 
											key={"ratio" + i} 
											value={item} 
											label={item} />)}
				                </SingleSelection>
						    </div>
						    <div className="col-sm-2">
						    	<label>Order By</label>
						    	<SingleSelection
					    			className=""
				                	onChange={this.onChange}
					    			value={this.state.orderBy}
				                	name="orderBy"
				                >
									{
										this.props.search.searchOptions.orderBy.map((item, i) => 
											<OptionItem 
												key={"orderBy" + i} 
												value={item} 
												label={item} />
											)
									}
				                </SingleSelection>
						    </div>
		    			</div>
		    			<div className="section-2 row clearfix">
		    				<div className="col-sm-3">
		 						<label>eating options</label>
				                {
				                	this.props.search.searchOptions.eatingOptions.map((item, i) => 
										<div key={"eatingOptions" + i}>
											<input 
												type="checkbox" 
												name="eatingOptions" 
												checked={this.state.options.indexOf(item) != -1}
												onChange={this.checkboxOnChange}
												value={item}/>
											<span>{item}</span>
										</div>)
				            	}
		    				</div>
		    				<div className="col-sm-3">
								<label>From</label>
								<br />
				                {
				                	this.props.search.searchOptions.fromKitchen.map((item, i) => 
										<div key={"fromKitchen" + i}>
											<input 
												type="checkbox" 
												name="fromKitchen" 
												checked={this.state.fromKitchen.indexOf(item) != -1}
												onChange={this.checkboxOnChange}
												value={item}/>
											<span>{item}</span>
										</div>)
				            	}
		    				</div>
		    				<div className="col-sm-3">
								<label>Date to eat</label>
								<br />
				                {
				                	this.props.search.searchOptions.date.map((item, i) => 
										<div key={"date" + i}>
											<input 
												type="checkbox" 
												name="date" 
												checked={this.state.date.indexOf(item) != -1}
												onChange={this.checkboxOnChange}
												value={item}/>
											<span>{item}</span>
										</div>)
				            	}
		    				</div>
		    			</div>
		            </div>
		    	</div>	
		    );
 		}
 	}
}

export default SearchBox;
