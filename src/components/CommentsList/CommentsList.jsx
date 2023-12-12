import { useEffect, useState } from "react";
import { scroll } from "../../../utils/window";
import CommentCard from "../CommentCard/CommentCard";
import { getCommentsByArticleId } from "../../../utils/api.comments";
import { useParams } from "react-router-dom";

const CommentsList = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const { article_id } = useParams();

	const [commentsData, setCommentsData] = useState({});

	const handlePageChange = (newPage) => {
		scroll("#article-comments");
		setCurrentPage(newPage);
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
				<>
					<section id="article-comments">
						{commentsData.comments.map((comment) => {
							return (
								<CommentCard
									key={`article-${comment.article_id}.comment_id-${comment.comment_id}`}
									comment={comment}
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
							>
								previous
							</button>
						)}
						{currentPage < commentsData.pages && (
							<button
								onClick={() =>
									handlePageChange(currentPage + 1)
								}
							>
								next
							</button>
						)}
					</nav>
				</>
			)}
		</>
	);
};

export default CommentsList;
