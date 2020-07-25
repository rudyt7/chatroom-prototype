import React from 'react';
import ReactDOM from 'react-dom';

import './backdrop.css';

const backdrop = (props) => {
	const closeModalHandler = () => {
		props.closeHandler(false);
	};

	return ReactDOM.createPortal(
		<div className="backdrop" onClick={closeModalHandler}></div>,
		document.getElementById('backdrop-hook')
	);
};

export default backdrop;
