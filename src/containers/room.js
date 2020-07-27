import React, { useState, useEffect, useContext } from 'react';

import Post from './post';
import Modal from '../components/Shared/UI/modal';
import { UserContext } from '../components/context/userContext';
import { RoomContext } from '../components/context/roomContext';

const Room = (props) => {
	const [showModal, setShowModal] = useState(false);
	const [posts, setPosts] = useState([]);
	const [type, setType] = useState('');
	const [userList, setUserList] = useState([]);

	const userContext = useContext(UserContext);
	const roomContext = useContext(RoomContext);

	useEffect(() => {
		setPosts(props.posts);
		for (const user of userContext.users) {
			// console.log(user);
			if (user.roomId === props.id) {
				setUserList([...userList, user.username]);
				break;
			}
			setType('user');
			setShowModal(true);
		}
	}, []);

	const postsList = posts.map((post) => (
		<Post title={post.title} upVote={post.upVote} downVote={post.downVote}>
			{post.description}
		</Post>
	));

	const showPostHandler = () => {
		setType('post');
		setShowModal(true);
	};

	const addPostHandler = (post) => {
		setPosts([...posts, post]);
		for (const room in roomContext.rooms) {
			if (room.id === props.id) {
				room.posts.push(post);
			}
		}
	};

	const addUsersToRoomHandler = (user) => {
		setUserList([...userList, user]);
	};

	const userListJsx = userList.map((user, index) => (
		<li key={index}>{user}</li>
	));

	return (
		<div className="room">
			<h1>{props.name}</h1>
			{showModal && (
				<Modal
					show={showModal}
					type={type}
					closeHandler={setShowModal}
					setPost={addPostHandler}
					addUser={addUsersToRoomHandler}
				/>
			)}
			<section>{postsList}</section>
			<section>
				<ul>{userListJsx}</ul>
			</section>
			<button type="button" onClick={showPostHandler}>
				Add Post
			</button>
		</div>
	);
};

export default Room;
