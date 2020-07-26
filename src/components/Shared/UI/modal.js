import React from 'react';
import ReactDOM from 'react-dom';

import CreateRoomForm from '../Forms/createRoom';
import Backdrop from './backdrop';
import './modal.css';

const ModalOverlay = (props) => {
	let modalJsx = '';

	if (props.type === 'create') {
		modalJsx = <CreateRoomForm closeHandler={props.closeHandler} />;
	}

	if (props.type === 'join') {
		modalJsx = (
			<form>
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
		);
	}

	if (props.type === 'post') {
	}

	const Modal = <div className="modal">{modalJsx}</div>;

	return ReactDOM.createPortal(Modal, document.getElementById('modal-hook'));
};

const modal = (props) => {
	return (
		<div>
			{props.show && <Backdrop closeHandler={props.closeHandler} />}
			{props.show && (
				<ModalOverlay type={props.type} closeHandler={props.closeHandler} />
			)}
		</div>
	);
};

export default modal;
