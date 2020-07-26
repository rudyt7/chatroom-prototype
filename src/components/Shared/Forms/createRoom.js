import React, { useContext } from 'react';

import { RoomContext } from '../../context/roomContext';
import { UserContext } from '../../context/userContext';

const CreateRoom = (props) => {
	const roomContext = useContext(RoomContext);
	const userContext = useContext(UserContext);

	const createRoomHandler = (event) => {
		event.preventDefault();
		const name = event.target.roomName.value;
		const theme = event.target.theme.value;
		const id = Math.random() * 600000;
		const avail = event.target.availability.value;
		const roomId = roomContext.addRoom(name, theme, id, avail);
		const userName = event.target.username.value;
		userContext.addUsers(userName, roomId);
		props.closeHandler(false);
	};

	return (
		<div>
			<form onSubmit={createRoomHandler}>
				<label htmlFor="roomName">Room Name</label>
				<input type="text" name="roomName" />
				<label htmlFor="username">User Name</label>
				<input type="text" name="username" />
				<select name="theme">
					<option value="red">Red</option>
					<option value="blue">Blue</option>
					<option value="green">Green</option>
				</select>
				<label htmlFor="availability">Availability</label>
				<select name="availability">
					<option value="public">Public</option>
					<option value="private">Private</option>
				</select>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default CreateRoom;
