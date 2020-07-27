import React from 'react';

const CreatePost = (props) => {
	const createPostHandler = (event) => {
		event.preventDefault();
		const title = event.target.title.value;
		const description = event.target.description.value;
		console.log(props);
		props.setPost({ title, description, upVote: 0, downVote: 0 });
		props.closeHandler(false);
	};

	return (
		<div>
			<form onSubmit={createPostHandler} className="form__container">
				<label htmlFor="title" className="form__label">
					Title
					<input type="text" name="title" className="form__input" />
				</label>
				<label htmlFor="description" className="form__label">
					Description
					<textarea name="description" className="form__input"></textarea>
				</label>
				<button type="submit" className="form__button">
					Add Post
				</button>
			</form>
		</div>
	);
};

export default CreatePost;
