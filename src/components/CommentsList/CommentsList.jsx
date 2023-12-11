import CommentCard from "../CommentCard/CommentCard";

const CommentsList = ({ comments, pages, currentPage, setCurrentPage }) => {
    	const handlePageChange = (newPage) => {
			setCurrentPage(newPage);
        };
    
	return (
		<>
			<section>
				{comments.map((comment) => {
					return (
						<CommentCard
							key={`article-${comment.article_id}.comment_id-${comment.comment_id}`}
							comment={comment}
						/>
					);
				})}
			</section>
			<div>
				page {currentPage} of {pages}
			</div>
			<nav>
				{currentPage > 1 && (
					<button onClick={() => handlePageChange(currentPage - 1)}>
						previous
					</button>
				)}
				{currentPage < pages && (
					<button onClick={() => handlePageChange(currentPage + 1)}>
						next
					</button>
				)}
			</nav>
		</>
	);
};

export default CommentsList;
