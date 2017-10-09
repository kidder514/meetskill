import React from "react"
import {Route, IndexRoute} from "react-router"
import OutterWrapper from "./components/OutterWrapper"
import Wrapper from "./components/Wrapper"
import Home from "./containers/pages/Home"
import MyCourses from "./containers/pages/MyCourses"
import Account from "./containers/pages/Account"
import ShoppingCart from "./containers/pages/ShoppingCart"
import Notification from "./containers/pages/Notification"
import InstructorDashboard from "./containers/pages/InstructorDashboard"

export default (
	<Route component={OutterWrapper}>
		<Route component={Wrapper}>
			<Route path="/" component={Home} />
			<Route path="/mycourses" component={MyCourses} />
			<Route path="/account" component={Account} />
			<Route path="/shoppingcart" component={ShoppingCart} />
			<Route path="/notification" component={Notification} />
			<Route path="/instructorDashboard" component={InstructorDashboard} />
		</Route>
	</Route>
)
