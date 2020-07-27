import React, { useState } from 'react';

export const UserContext = React.createContext({
	users: [],
	addUsers: () => {},
});

const UserContextProvider = (props) => {
	const [users, setUsers] = useState([{ username: 'dummy', roomId: 'dummy' }]);

	const addUsersHandler = (username, roomId) => {
		setUsers([...users, { username, roomId }]);
		console.log(users);
	};

	return (
		<UserContext.Provider value={{ users, addUsers: addUsersHandler }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
