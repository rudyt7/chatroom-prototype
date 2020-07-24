import React from 'react';

import './home.css';

const home = () => {
	const createRoomHandler = () => {};

	const joinRoomHandler = () => {
		console.log('join room');
	};

	return (
		<main className="main">
			<button className="main--btn create" onClick={createRoomHandler}>
				Create
			</button>
			<button className="main--btn join" onClick={joinRoomHandler}>
				Join
			</button>
		</main>
	);
};

export default home;
