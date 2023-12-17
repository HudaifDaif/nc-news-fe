import "./CommentForm.css";

import { useContext, useState } from "react";

import { UserContext } from "../../Contexts/User";
import { postCommentByArticleId } from "../../../utils/api.comments";
import { useParams } from "react-router-dom";

const CommentForm = ({
	setIsCommenting,
	setCommentsData,
	commentError,
	setCommentError,
}) => {
	const [input, setInput] = useState("");
	const { article_id } = useParams();
	const { user } = useContext(UserContext);
	const { username } = user;

	const handleToggleComment = () => {
		setIsCommenting((current) => !current);
	};

	const handleInput = (e) => {
		e.preventDefault();
		setInput(e.target.value);
		setCommentError(false);
	};

	const handleSubmitComment = (e) => {
		e.preventDefault();
		setCommentError(false);

		postCommentByArticleId(article_id, username, input)
			.then(({ comment }) => {
				const { body, author, votes, created_at, comment_id } = comment;
				setCommentsData((current) => {
					const { comments, pages } = current;
					const copiedComments = [...comments].slice(1);
					return {
						comments: [
							{
								body,
								author,
								votes,
								created_at,
								article_id,
								comment_id,
							},
							...copiedComments,
						],
						pages,
					};
				});
			})
			.catch((err) => {
				handleToggleComment();
				setCommentError(true);
			});

		setCommentsData((current) => {
			const { comments, pages } = current;
			return {
				comments: [
					{
						body: input,
						author: username,
						created_at: Date.now(),
						votes: 0,
						article_id,
						comment_id: Date.now(),
					},
					...comments,
				],
				pages,
			};
		});

		handleToggleComment();
	};

	return username ? (
		<form className="comment-form" onSubmit={handleSubmitComment}>
			<label htmlFor="comment-body">
				Comment:
				<textarea
					name="comment-body"
					id="comment-body"
					placeholder="Write your comment here..."
					value={input}
					required
					onChange={handleInput}
					onFocus={() => setCommentError(false)}
				></textarea>
			</label>
			{commentError ? (
				<button className="button comment-error">
					Sorry, something went wrong.
				</button>
			) : input ? (
				<button className="button">Submit</button>
			) : (
				<button className="button">Please add some comment text.</button>
			)}
		</form>
	) : (
		<div className="comment-form">Please log in to post comments.</div>
	);
};

export default CommentForm;
