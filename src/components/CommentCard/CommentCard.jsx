import "./CommentCard.css";

import { useContext, useEffect, useState } from "react";

import { UserContext } from "../Contexts/User";
import { deleteCommentById } from "../../../utils/api.comments";

const CommentCard = ({ comment, setCommentsData }) => {
	const [deleteError, setDeleteError] = useState(false);
	const { body, author, votes, created_at } = comment;
	const { user } = useContext(UserContext);
	const { username } = user;

	const formattedDate = Date(created_at).slice(0, 21);

	const handleDeleteComment = (e) => {
		const parent = e.target.parentElement;
		parent.classList.add("deleted-comment");

		deleteCommentById(comment.comment_id)
			.then(() => {
				setCommentsData((current) => {
					const { comments, pages } = current;
					const displayedComments = [...comments].filter((item) => {
						return item.comment_id !== comment.comment_id;
					});

					return {
						comments: displayedComments,
						pages,
					};
				});
			})
			.catch(() => {
				parent.classList.remove("deleted-comment");
				setDeleteError(true);
			});
	};

	return (
		<article className="comment-contents">
			<p>{body}</p>
			<p>Posted: {formattedDate}</p>
			<p>Author: {author} </p>
			{author === username && (
				<>
					<button onClick={handleDeleteComment} className="button">
						Delete
					</button>
					{deleteError && (
						<p className="comment-error">
							Sorry, something went wrong
						</p>
					)}
				</>
			)}
			<p>Votes: {votes}</p>
			<button className="button">+</button>
			<button className="button">-</button>
		</article>
	);
};

export default CommentCard;
