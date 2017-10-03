import React, {Component} from "react";
import config from "../config"

export default class GoogleMap extends Component{
	constructor(props){
		super(props);
		this.showMarkers = this.showMarkers.bind(this);
		this.createInfoWindow = this.createInfoWindow.bind(this);
		this.markers = [];
	}

	showMarkers(){
		if (this.props.data != undefined && this.props.data.length > 0){

			var data = this.props.data;
			var locations = [];
			var ids = [];
			var markers = [];
			var infoWindow = null;

			for (var i = 0; i < data.length; i++)
			{
				if (ids.indexOf(data[i].authorId) == -1)
				{
					locations.push({lat: parseFloat(data[i].postCoordinate.latitude),
					lng: parseFloat(data[i].postCoordinate.longitude)});
					ids.push(data[i].authorId);
				}

			}

		    locations.map((location, i) => {
	        	var marker = new google.maps.Marker({
					position: location,
					map: this.map,
					id: data[i].authorId,
					icon: config.mouseOutMarker
				});
		        marker.addListener('click', () => {
		        	if(infoWindow){
		        		infoWindow.close();
		        	}
					infoWindow = this.createInfoWindow(data[i]);
					infoWindow.open(this.map, marker);

		        });

		        markers.push(marker);
	        });
		    this.props.setMarkers(markers);

		}
	}

	createInfoWindow(data){

		if(data.authorSignature != null)
		{
			var authorSignature = '<span className="signature">' + authorSignature + '</span>';
		}

		//google map requires this to be string
		var infoWindowContent = 
		'<div class="info-window">'+
		'<div class="info-header">'+
		'<a href="/cook/' + data.authorId + '"><img class="img-circle" src="' + data.authorImg + '" /></a>'+
		'</div>' +
		'<div class="gm-cook-name"><a href="/cook/' + data.authorId +'" >' + data.authorName + '</a></div>' +
		'</div>' +
		'<div class="info-content">'+
		'<p>' + data.postDescription + '</p>' +
		'</div>';

		return new google.maps.InfoWindow({
			content:infoWindowContent,
		});
	}

	componentDidMount(){
		this.map = new google.maps.Map(this.refs.map, {
        	center: {lat: this.props.centerLocation.lat, lng: this.props.centerLocation.lng},
        	zoom: 13,
        	streetViewControl: false,
		});

		// I guess it is okey for map to be a global variable
		// since we only use one map instance
		window.map = this.map;
		this.showMarkers();
	}

	componentDidUpdate(){
		this.showMarkers();		
	}

	componentWillUnmount(){
	}
	
	render(){
		return(
			<div 
				id="googlemap"
				className="googlemap"
				ref="map"
				onChange={this.onChange}
			>google map</div>
		);
	}
}