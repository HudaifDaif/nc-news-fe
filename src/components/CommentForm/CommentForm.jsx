import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import "./CommentForm.css";
import { UserContext } from "../Contexts/User";
import { postCommentByArticleId } from "../../../utils/api.comments";

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
				<button className="comment-error">
					Sorry, something went wrong.
				</button>
			) : input ? (
				<button>Submit</button>
			) : (
				<button>Submit</button>
			)}
		</form>
	) : (
		<div className="comment-form">Please log in to post comments.</div>
	);
};

export default CommentForm;
