import React from "react"
import {Route, IndexRoute} from "react-router"
import OutterWrapper from "./component/OutterWrapper"
import Wrapper from "./component/Wrapper"
import Home from "./container/page/Home"
import MyCourse from "./container/page/MyCourse"
import Account from "./container/page/Account"
import ShoppingCart from "./container/page/ShoppingCart"
import Notification from "./container/page/Notification"
import InstructorDashboard from "./container/page/InstructorDashboard"
import pagePath from "./pagePath";

export default (
	<Route component={OutterWrapper}>
		<Route component={Wrapper}>
			<Route path={pagePath.Home} component={Home} />
			<Route path={pagePath.Mycourse} component={MyCourse} />
			<Route path={pagePath.Account} component={Account} />
			<Route path={pagePath.ShoppingCart} component={ShoppingCart} />
			<Route path={pagePath.Notification} component={Notification} />
			<Route path={pagePath.InstructorDashboard} component={InstructorDashboard} />
		</Route>
	</Route>
)
