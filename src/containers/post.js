import React, { useState } from 'react';

import './post.css';

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
		<article className="post__container">
			<div>
				<h2 className="post__title">{props.title}</h2>
				<div className="post__description">{props.children}</div>
			</div>
			<div className="post__upVote" onClick={upVoteHandler}>
				{upVote}
			</div>
			<div className="post__downVote" onClick={downVoteHandler}>
				{downVote}
			</div>
		</article>
	);
};

export default Post;
