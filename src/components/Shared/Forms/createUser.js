import React, { useContext } from 'react';

import { UserContext } from '../../context/userContext';

const CreateUser = (props) => {
	const userContext = useContext(UserContext);

	const createUserHandler = (event) => {
		event.preventDefault();
		const username = event.target.username.value;
		const id = window.location.pathname.substring(6);
		userContext.addUsers(username, id);
		props.closeHandler(false);
	};

	return (
		<form onSubmit={createUserHandler}>
			<label htmlFor="username">
				<input type="text" name="username" />
			</label>
			<button type="submit">Join Room</button>
		</form>
	);
};

export default CreateUser;
