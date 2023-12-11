import ArticleCard from "../ArticleCard/ArticleCard";

const ArticleList = ({ articles, pages, currentPage, setCurrentPage }) => {
	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

	return (
		<>
			<section>
				{articles.map((article) => {
					return (
						<ArticleCard
							key={`article.${article.article_id}`}
							article={article}
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

export default ArticleList;
