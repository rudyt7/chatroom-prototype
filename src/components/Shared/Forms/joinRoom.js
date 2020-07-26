import React, { Fragment, useContext } from 'react';
import { Route, Link } from 'react-router-dom';

import { RoomContext } from '../../context/roomContext';

const JoinRoom = () => {
	const roomContext = useContext(RoomContext);

	const roomLinks = roomContext.rooms.map((room) => {
		return (
			<Link key={room.id} to={`/room/${room.id}`}>
				{room.name}
			</Link>
		);
	});

	return (
		<div className="room__links--container">
			<div className="room__links">{roomLinks}</div>
			<div>
				<form className="form__join">
					<input />
				</form>
			</div>
		</div>
	);
};

export default JoinRoom;
