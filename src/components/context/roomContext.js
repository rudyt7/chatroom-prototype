import React, { useState } from 'react';

export const RoomContext = React.createContext({
	rooms: [],
	addRoom: () => {},
});

const RoomContextProvider = (props) => {
	const [rooms, setRooms] = useState([]);

	const addRoomHandler = (roomName, roomTheme, roomId, avail) => {
		const str = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
		const idArr = roomId.toFixed(0).toString().split('');
		const id = idArr
			.map((number) => {
				return `${str[number]}`;
			})
			.join('');
		setRooms([
			...rooms,
			{ name: roomName, theme: roomTheme, id, availability: avail, posts: [] },
		]);
		return id;
	};

	return (
		<RoomContext.Provider value={{ rooms: rooms, addRoom: addRoomHandler }}>
			{props.children}
		</RoomContext.Provider>
	);
};

export default RoomContextProvider;
