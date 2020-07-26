import React, { useState, useContext } from 'react';

import Modal from '../components/Shared/UI/modal';
import { RoomContext } from '../components/context/roomContext';
import './home.css';

const Home = () => {
	const [showModal, setShowModal] = useState(false);
	const [type, setType] = useState('');

	const roomContext = useContext(RoomContext);

	const createRoomHandler = () => {
		setType('create');
		setShowModal(true);
		console.log(roomContext.rooms);
	};

	const joinRoomHandler = () => {
		setType('join');
		setShowModal(true);
	};

	return (
		<main className="main">
			{showModal && (
				<Modal show={showModal} type={type} closeHandler={setShowModal}></Modal>
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
