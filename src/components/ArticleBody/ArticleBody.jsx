import "./ArticleBody.css";

import { UserContext } from "../../Contexts/User";
import { patchArticleById } from "../../../utils/api.articles";
import { useContext, useEffect } from "react";
import { useState } from "react";

const ArticleBody = ({ articleContents }) => {
	const {
		title,
		article_img_url,
		author,
		body,
		comment_count,
		topic,
		votes,
		article_id,
		userVotes,
	} = articleContents;

	const [userVote, setUserVote] = useState(0);
	const [voteError, setVoteError] = useState(null);
	const [displayedVotes, setDisplayedVotes] = useState(votes);
	const { user } = useContext(UserContext);

	useEffect(() => {
		const storedUserVote = userVotes.find(
			(vote) => vote.username === user.username
		);
		storedUserVote && setUserVote(storedUserVote.vote_value);
		storedUserVote && setDisplayedVotes(storedUserVote.vote_value);
	}, [user]);

	const handleVote = (opinion) => {
		if (opinion === userVote) {
			patchArticleById(article_id, 0, user.username)
				.then(() => {
					setUserVote(0);
					setDisplayedVotes((curr) => curr - opinion);
				})
				.catch(handleVoteError);
		} else if (userVote !== opinion) {
			patchArticleById(article_id, opinion, user.username)
				.then(() => {
					setUserVote(opinion);
					userVote === 0
						? setDisplayedVotes((curr) => curr + opinion)
						: setDisplayedVotes((curr) => curr + opinion * 2);
				})
				.catch(handleVoteError);
		}
	};

	const handleVoteError = (err) => {
		setVoteError(err);
		setTimeout(() => {
			setVoteError(null);
		}, 3000);
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
				<p>Comments: {comment_count}</p>
				<p>Votes: {displayedVotes}</p>
				{user.username && (
					<>
						<button
							onClick={() => handleVote(1)}
							className={
								userVote === 0 || userVote === -1
									? "vote-button button"
									: "vote-button button pressed-button"
							}
						>
							+
						</button>
						<button
							onClick={() => handleVote(-1)}
							className={
								userVote === 0 || userVote === 1
									? "vote-button button"
									: "vote-button button pressed-button"
							}
						>
							-
						</button>
					</>
				)}
				{voteError ? (
					<p>Sorry, there was a problem. Please try again.</p>
				) : null}
			</section>
		</main>
	);
};

export default ArticleBody;
