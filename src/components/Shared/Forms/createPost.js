import React from 'react';

const CreatePost = (props) => {
	const createPostHandler = (event) => {
		event.preventDefault();
		const title = event.target.title.value;
		const description = event.target.description.value;
		console.log(props);
		props.setPost({ title, description, upVote: 0, downVote: 0 });
	};

	return (
		<div>
			<form onSubmit={createPostHandler}>
				<label htmlFor="title">
					Title
					<input type="text" name="title" />
				</label>
				<label htmlFor="description">
					Description
					<textarea name="description"></textarea>
				</label>
				<button type="submit">Add Post</button>
			</form>
		</div>
	);
};

export default CreatePost;
