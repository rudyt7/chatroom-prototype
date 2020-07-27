import React, { useContext } from 'react';

import { RoomContext } from '../../context/roomContext';
// import { UserContext } from '../../context/userContext';
import './forms.css';

const CreateRoom = (props) => {
	const roomContext = useContext(RoomContext);
	// const userContext = useContext(UserContext);

	const createRoomHandler = (event) => {
		event.preventDefault();
		const name = event.target.roomName.value;
		const theme = event.target.theme.value;
		const id = Math.random() * 600000;
		const avail = event.target.availability.value;
		roomContext.addRoom(name, theme, id, avail);
		props.closeHandler(false);
	};

	return (
		<div>
			<form onSubmit={createRoomHandler} className="form__container">
				<h1 className="form__heading">Create Room</h1>
				<label htmlFor="roomName" className="form__label">
					Room Name :
					<input type="text" name="roomName" className="form__input" />
				</label>
				<label htmlFor="theme" className="form__label">
					Theme :
					<select name="theme" className="form__input">
						<option value="red">Red</option>
						<option value="blue">Blue</option>
						<option value="green">Green</option>
					</select>
				</label>
				<label htmlFor="availability" className="form__label">
					Availability :
					<select name="availability" className="form__input">
						<option value="public">Public</option>
						<option value="private">Private</option>
					</select>
				</label>
				<button type="submit" className="form__button">
					Create
				</button>
			</form>
		</div>
	);
};

export default CreateRoom;
