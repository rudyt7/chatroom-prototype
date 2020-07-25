import React, { useState } from 'react';

import Modal from '../components/Shared/UI/modal';
import './home.css';

const Home = () => {
	const [showModal, setShowModal] = useState(false);

	const createRoomHandler = () => {
		setShowModal(true);
	};

	const joinRoomHandler = () => {
		setShowModal(true);
		console.log('join room');
	};

	return (
		<main className="main">
			{showModal && (
				<Modal show={showModal} closeHandler={setShowModal}></Modal>
			)}
			<button className="main--btn create" onClick={createRoomHandler}>
				Create
			</button>
			<button className="main--btn join" onClick={joinRoomHandler}>
				Join
			</button>
		</main>
	);
};

export default Home;
