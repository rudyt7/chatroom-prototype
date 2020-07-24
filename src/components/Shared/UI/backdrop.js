import React from 'react';
import ReactDOM from 'react-dom';

import './backdrop.css';

const backdrop = (props) => {
	return ReactDOM.createPortal(
		<div className="backdrop"></div>,
		document.getElementById('backdrop-hook')
	);
};

export default backdrop;
