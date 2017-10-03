import React, {Component} from 'react';
import DishList from "./common/DishList"
import SideBar from "../containers/common/SideBar"
import SearchBox from "../containers/common/Search"
import Googlemap from "../helpers/GoogleMap"
import config from "../config"

class HomeFoodPage extends Component{
	constructor(props){
		super(props);
		this.ItemOnMouseEnter = this.ItemOnMouseEnter.bind(this);
		this.ItemOnMouseLeave = this.ItemOnMouseLeave.bind(this);
		this.toggleMap = this.toggleMap.bind(this);
		this.setMarkers = this.setMarkers.bind(this);
		this.changeMarker = this.changeMarker.bind(this);
		this.markers = [];
	}

	ItemOnMouseEnter(cookId){
		this.changeMarker(cookId, config.mouseInMarker);
	}

	ItemOnMouseLeave(cookId){
		this.changeMarker(cookId, config.mouseOutMarker);
	}

	toggleMap(showMap){
		var dishListDom = this.dishListDom;
		var mapDom = this.mapDom;

		if (showMap){
			dishListDom.className = dishListDom.className.replace(" mobile-show", "");
			if (mapDom.className.indexOf(" mobile-show") == -1){
				mapDom.className += " mobile-show";
			}
			var currCenter = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(currCenter);
		} else {
			if (dishListDom.className.indexOf(" mobile-show") == -1){
				this.dishListDom.className += " mobile-show";
			}
			mapDom.className = this.mapDom.className.replace(" mobile-show", " ");
		}
	}

	setMarkers(markers){
		this.markers = markers;
	}

	changeMarker(cookId, icon){
		this.markers.forEach((item, index) => {
			if (item.id === cookId){
				item.setIcon(icon);
			}
		});
	}

  	render(){
  		if(this.props.dishListData.length > 0){
	  		return(
	  			<div className="">
		  			<div className="row">
		  				<div ref={(c) => this.dishListDom = c} className="col-md-8 col-xs-12">
		  					<SearchBox />
		  					<DishList 
		  						data={this.props.dishListData}
		  						onMouseEnter={this.ItemOnMouseEnter}
		  						onMouseLeave={this.ItemOnMouseLeave}
		  						/>
		  				</div>
						<div ref={(c) => this.mapDom = c} className="col-xs-12 col-sm-12 col-md-4 map-wrapper">
		            		<Googlemap 
		            			centerLocation={{lat: -33.872110, lng: 151.206559}}
		            			data={this.props.dishListData}
		            			setMarkers= {this.setMarkers}
		            			/>
		                </div>
		                <div className="view-switcher">
		                	<div className="view-switcher-wrapper">
			                	<div className="switcher-button" onClick={ () => this.toggleMap(false)}>
			                		<i className="material-icons">list</i>
			                		<span>List</span>
			                	</div>
			                	<div className="switcher-button" onClick={ () => this.toggleMap(true)}>
			                		<i className="material-icons">map</i>
			                		<span>Map</span>
			                	</div>
		                	</div>
		                </div>
		  			</div>
	        	</div>
	  		);
  		}else{
  			return (
  				<div className="">
  					<div className="row">
  						<div className="col-md-8 col-xs-12">
		  					<SearchBox />
	  						<div>
	  							Sorry, there is no cook in this area.
	  						</div>
  						</div>
						<div className="col-md-4 hidden-sm hidden-xs map-wrapper">
		            		<Googlemap centerLocation={{lat: -33.872110, lng: 151.206559}}/>
		                </div>
  					</div>
  				</div>
  			);
  		}
    }
}

export default HomeFoodPage;
