import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Wine from "./Pages/Wine";
import Main from "./Pages/Main";
import Pair from "./Pages/Pair";
import Recommend from "./Pages/Recommend";

const App = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/'>
					<Main />
				</Route>
				<Route exact path='/wine'>
					<Wine />
				</Route>
				<Route exact path='/pair'>
					<Pair />
				</Route>
				<Route exact path='/recommend'>
					<Recommend />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
