import React from 'react';
import ReactDOM from 'react-dom';

import CreateRoomForm from '../Forms/createRoom';
import JoinRoomForm from '../Forms/joinRoom';
import Backdrop from './backdrop';
import './modal.css';

const ModalOverlay = (props) => {
	let modalJsx = '';

	if (props.type === 'create') {
		modalJsx = <CreateRoomForm closeHandler={props.closeHandler} />;
	}

	if (props.type === 'join') {
		modalJsx = <JoinRoomForm closeHandler={props.closeHandler} />;
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
