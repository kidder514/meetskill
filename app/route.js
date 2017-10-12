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
			<Route path={pagePath.home} component={Home} />
			<Route path={pagePath.mycourse} component={MyCourse} />
			<Route path={pagePath.account} component={Account} />
			<Route path={pagePath.shoppingcart} component={ShoppingCart} />
			<Route path={pagePath.notification} component={Notification} />
			<Route path={pagePath.instructordashboard} component={InstructorDashboard} />
		</Route>
	</Route>
)
