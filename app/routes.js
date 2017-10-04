import React from "react"
import {Route, IndexRoute} from "react-router"
import OutterWrapper from "./components/OutterWrapper"
import Wrapper from "./components/Wrapper"

export default (
	<Route component={OutterWrapper}>
		<Route component={Wrapper}>
		{/*
	  		<IndexRoute component={Front} />
	  		<Route path="homefood" component={HomeFood} />
	  		<Route path="login" component={Login} />
	  		<Route path="signup" component={Signup} />
		  	<Route path="signout" component={Signout} />
		  	<Route path="mypage" component={MyPage} />
		  	<Route path="message" component={Message} />
		  	<Route path="dish/:dishid" component={SingleDish} />
		  	<Route path="cook/:cookid" component={Cook} />
		  	<Route path="checkout" component={Checkout} />
		  	<Route path="dashboard" component={Dashboard} >
		  		<IndexRoute component={Overview}/>
		  		<Route path="order-history" component={OrderHistory} />
		  		<Route path="notification" component={Notification} />
		  		<Route path="settings" component={Setting} />
		  		<Route path="help" component={Help} />
		  	</Route>
		  */}
		</Route>
	</Route>
)
