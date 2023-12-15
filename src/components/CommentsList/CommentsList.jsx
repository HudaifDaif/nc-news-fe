import "./CommentsList.css";

import { useEffect, useState } from "react";

import CommentCard from "../CommentCard/CommentCard";
import CommentForm from "../CommentForm/CommentForm";
import { getCommentsByArticleId } from "../../../utils/api.comments";
import { scroll } from "../../../utils/window";
import { useParams } from "react-router-dom";

const CommentsList = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [isCommenting, setIsCommenting] = useState(false);
	const [commentsData, setCommentsData] = useState({});
	const [commentError, setCommentError] = useState(false);

	const { article_id } = useParams();

	const handlePageChange = (newPage) => {
		scroll("#article-comments");
		setCurrentPage(newPage);
	};

	const handleComment = () => {
		setIsCommenting((current) => !current);
	};

	useEffect(() => {
		setIsLoading(true);
		getCommentsByArticleId(article_id, currentPage).then((response) => {
			setCommentsData({
				comments: response.comments,
				pages: response.pages,
			});
			setIsLoading(false);
		});
	}, [currentPage]);

	return (
		<>
			{isLoading ? (
				<h2>Loading...</h2>
			) : (
				<section className="comments-list">
					<button onClick={handleComment} className="button">
						{isCommenting ? "Close" : "Comment"}
					</button>
					{isCommenting ? (
						<CommentForm
							setIsCommenting={setIsCommenting}
							setCommentsData={setCommentsData}
							commentError={commentError}
							setCommentError={setCommentError}
						/>
					) : null}

					<section id="article-comments">
						{commentsData.comments.map((comment) => {
							return (
								<CommentCard
									key={`article-${comment.article_id}.comment_id-${comment.comment_id}`}
									comment={comment}
									setCommentsData={setCommentsData}
								/>
							);
						})}
					</section>
					<div>
						page {currentPage} of {commentsData.pages}
					</div>
					<nav>
						{currentPage > 1 && (
							<button
								onClick={() =>
									handlePageChange(currentPage - 1)
								}
								className="button"
							>
								previous
							</button>
						)}
						{currentPage < commentsData.pages && (
							<button
								onClick={() =>
									handlePageChange(currentPage + 1)
								}
								className="button"
							>
								next
							</button>
						)}
					</nav>
				</section>
			)}
		</>
	);
};

export default CommentsList;
