import React, { useState } from 'react';

const Post = (props) => {
	const [upVote, setUpVote] = useState(0);
	const [downVote, setDownVote] = useState(0);

	const upVoteHandler = () => {
		setUpVote(upVote + 1);
	};

	const downVoteHandler = () => {
		setDownVote(downVote + 1);
	};

	return (
		<article>
			<h2>{props.title}</h2>
			<div>{props.children}</div>
			<div onClick={upVoteHandler}>{upVote}</div>
			<div onClick={downVoteHandler}>{downVote}</div>
		</article>
	);
};

export default Post;
