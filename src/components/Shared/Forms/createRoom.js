import React, { useContext } from 'react';

import { RoomContext } from '../../context/roomContext';

const CreateRoom = (props) => {
	const roomContext = useContext(RoomContext);

	const createRoomHandler = (event) => {
		event.preventDefault();
		const name = event.target.roomName.value;
		const theme = event.target.theme.value;
		const userName = event.target.username.value;
		const id = Math.random() * 600000;
		console.log(name, theme, id);
		props.closeHandler(false);
		roomContext.addRoom(name, theme, id);
	};

	return (
		<div>
			<form onSubmit={createRoomHandler}>
				<label htmlFor="roomName">Room Name</label>
				<input type="text" name="roomName" />
				<label htmlFor="username">User Name</label>
				<input type="text" name="username" />
				<label htmlFor="theme">Theme</label>
				<select name="theme">
					<option>Red</option>
					<option>Blue</option>
					<option>Green</option>
				</select>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default CreateRoom;
