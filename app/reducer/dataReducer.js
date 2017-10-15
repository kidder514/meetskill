var initialUserState = {
	data:[],
	category:[
		{
			name: "Development",
			path: "/development",
			subcategory:[
				{
					name: "web development",
					path: "/webdevelopment",
				},{
					name: "mobile apps",
					path: "/mobileapps",
				}
			]
		},{
			name: "business",
			path: "/business"
		},{
			name: "IT & Software",
			path: "/itsoftware",
			subcategory: [
				{
					name: "IT certification",
					path: "/ITcertification",
				},{
					name: "Networks & Security",
					path: "/networkssecurity",
					subcategory :[
						{
							name: "hardware",
							path: "/hardware"
						},{
							name: "software",
							path: "/software"
						}
					]
				}
			]
		},
	]
}

function dataList(state = initialUserState, action) {
  	switch (action.type){
	    case "LOAD_DATA":
			return { ...state, 
				data: action.data
			};
		case "LOAD_CATEGORIES":
			return { ...state, 
				category: action.category
			};
	    default:
	    	return state
    }
}

export default dataList