import React, { useState } from 'react';

export const UserContext = React.createContext({
	users: [],
	addUsers: () => {},
});

const UserContextProvider = (props) => {
	const [users, setUsers] = useState([]);

	const addUsersHandler = (username, roomId) => {
		console.log('username, roomId', username, roomId);
		setUsers([...users, { username, roomId }]);
	};

	return (
		<UserContext.Provider value={{ users, addUsers: addUsersHandler }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
