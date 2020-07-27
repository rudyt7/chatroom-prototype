import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { RoomContext } from '../../context/roomContext';

const JoinRoom = () => {
	const roomContext = useContext(RoomContext);

	// eslint-disable-next-line array-callback-return
	const roomLinks = roomContext.rooms.map((room) => {
		if (room.availability === 'public') {
			return (
				<Link className="room__link" key={room.id} to={`/room/${room.id}`}>
					{room.name} : {room.id}
				</Link>
			);
		}
	});

	return (
		<div>
			<div className="room__links--container">
				<h1 className="form__heading">Join Room</h1>
				<div className="">Room Name : Room Id</div>
				<div className="room__links">{roomLinks}</div>
			</div>
		</div>
	);
};

export default JoinRoom;
