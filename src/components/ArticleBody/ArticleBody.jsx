import { useState } from "react";
import "./ArticleBody.css";
import { patchArticleById } from "../../../utils/api.articles";
import CommentForm from "../CommentForm/CommentForm";

const ArticleBody = ({ articleContents }) => {
	const [userVote, setUserVote] = useState(0);
	const [voteError, setVoteError] = useState(null);
	const [isCommenting, setIsCommenting] = useState(false);

	const {
		title,
		article_img_url,
		author,
		body,
		comment_count,
		topic,
		votes,
		article_id,
	} = articleContents;

	const handleVote = (opinion, e) => {
		const { parentElement } = e.target;
		const voteButtons = parentElement.querySelectorAll(".vote-button");

		if (!userVote || userVote !== opinion) {
			voteButtons.forEach((button) => {
				button.classList.remove("pressed-button");
			});
			patchArticleById(article_id, opinion).catch(handleVoteError);
			setUserVote(opinion);
			e.target.classList.add("pressed-button");
		}
	};

	const handleVoteError = (err) => {
		setVoteError(err);
		setUserVote(-opinion);
	};

	const handleComment = () => {
		setIsCommenting((current) => !current);
	};

	return (
		<main>
			<h2>{title}</h2>
			<section className="article-contents">
				<article>
					<img
						src={article_img_url}
						alt=""
						className="article-image"
					/>
					<p>{body}</p>
					<p>Topic: {topic}</p>
					<p>Author: {author}</p>
				</article>
				<p>Votes: {userVote ? votes + userVote : votes}</p>
				{voteError ? (
					<p>Sorry, there was a problem. Please try again.</p>
				) : null}
				<button
					onClick={(e) => handleVote(1, e)}
					className="vote-button"
				>
					+
				</button>
				<button
					onClick={(e) => handleVote(-1, e)}
					className="vote-button"
				>
					-
				</button>
				<p>Comments: {comment_count}</p>
				<button onClick={handleComment}>comment</button>
				{isCommenting ? (
					<CommentForm setIsCommenting={setIsCommenting} />
				) : null}
			</section>
		</main>
	);
};

export default ArticleBody;
