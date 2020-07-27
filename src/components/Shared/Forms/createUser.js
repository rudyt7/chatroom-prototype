import React, { useContext } from 'react';

import { UserContext } from '../../context/userContext';
import './forms.css';

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
		<form onSubmit={createUserHandler} className="form__container">
			<label htmlFor="username" className="form__label">
				UserName :
				<input type="text" name="username" className="form__input" />
			</label>
			<button type="submit" className="form__button">
				Join Room
			</button>
		</form>
	);
};

export default CreateUser;
