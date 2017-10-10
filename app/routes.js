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
import pagePath from "./pagePath";

export default (
	<Route component={OutterWrapper}>
		<Route component={Wrapper}>
			<Route path={pagePath.home} component={Home} />
			<Route path={pagePath.mycourses} component={MyCourses} />
			<Route path={pagePath.account} component={Account} />
			<Route path={pagePath.shoppingcart} component={ShoppingCart} />
			<Route path={pagePath.notification} component={Notification} />
			<Route path={pagePath.instructordashboard} component={InstructorDashboard} />
		</Route>
	</Route>
)
