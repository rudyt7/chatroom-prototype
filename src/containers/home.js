import React, { useState, useContext } from 'react';

import Modal from '../components/Shared/UI/modal';
import { RoomContext } from '../components/context/roomContext';
import { UserContext } from '../components/context/userContext';
import './home.css';

const Home = () => {
	const [showModal, setShowModal] = useState(false);
	const [type, setType] = useState('');

	const roomContext = useContext(RoomContext);
	const userContext = useContext(UserContext);

	const createRoomHandler = () => {
		setType('create');
		setShowModal(true);
	};

	const joinRoomHandler = () => {
		setType('join');
		setShowModal(true);
		console.log(roomContext.rooms);
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
