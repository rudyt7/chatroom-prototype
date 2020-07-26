import React from 'react';
import { Switch, Route } from 'react-router';

import RoomContextProvider from './components/context/roomContext';
import Header from './components/Shared/navigation/header';
import Home from './containers/home';
import Room from './containers/room';

const App = () => {
	return (
		<RoomContextProvider>
			<Header />
			<Switch>
				<Route path="/room" exact>
					<Room />
				</Route>
				<Route path="/" exact>
					<Home />
				</Route>
			</Switch>
		</RoomContextProvider>
	);
};

export default App;
