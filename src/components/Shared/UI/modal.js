import React from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './backdrop';
import './modal.css';

const ModalOverlay = () => {
	const Modal = (
		<div className="modal">
			<div></div>
		</div>
	);

	return ReactDOM.createPortal(Modal, document.getElementById('modal-hook'));
};

const modal = (props) => {
	return (
		<div>
			{props.show && <Backdrop />}
			{props.show && <ModalOverlay />}
		</div>
	);
};

export default modal;
