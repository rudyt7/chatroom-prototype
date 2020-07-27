import React, { useContext } from 'react';
import { Switch, Route } from 'react-router';

import { RoomContext } from './components/context/roomContext';

import Header from './components/Shared/navigation/header';
import Home from './containers/home';
import Room from './containers/room';

const App = () => {
	const roomContext = useContext(RoomContext);

	const roomRoutes = roomContext.rooms.map((room) => {
		return (
			<Route key={room.id} path={`/room/${room.id}`} exact>
				<Room
					name={room.name}
					theme={room.theme}
					availability={room.availability}
					posts={room.posts}
					id={room.id}
				/>
			</Route>
		);
	});

	return (
		<>
			<Header />
			<Switch>
				{roomRoutes}
				<Route path="/" exact>
					<Home />
				</Route>
			</Switch>
		</>
	);
};

export default App;
