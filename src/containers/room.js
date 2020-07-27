import React, { useState, useEffect } from 'react';

import Post from './post';
import Modal from '../components/Shared/UI/modal';

const Room = (props) => {
	const [showModal, setShowModal] = useState(false);
	const [posts, setPosts] = useState([]);
	const [type, setType] = useState('');

	useEffect(() => {
		setType('user');
		setPosts(props.posts);
		setShowModal(true);
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
	};

	return (
		<div className="room">
			<h1>{props.name}</h1>
			{showModal && (
				<Modal
					show={showModal}
					type={type}
					closeHandler={setShowModal}
					setPost={addPostHandler}
				/>
			)}
			<section>{postsList}</section>
			<button type="button" onClick={showPostHandler}>
				Add Post
			</button>
		</div>
	);
};

export default Room;
