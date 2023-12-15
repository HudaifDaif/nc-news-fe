import ArticleCard from "../ArticleCard/ArticleCard";
import { scroll } from "../../../utils/window";
import { useEffect } from "react";

const ArticleList = ({ articles, pages, currentPage, setCurrentPage }) => {
	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
		scroll("#article-list")
	};

	return (
		<>
			<section id="article-list">
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
					<button
						onClick={() => handlePageChange(currentPage - 1)}
						className="button"
					>
						previous
					</button>
				)}
				{currentPage < pages && (
					<button
						onClick={() => handlePageChange(currentPage + 1)}
						className="button"
					>
						next
					</button>
				)}
			</nav>
		</>
	);
};

export default ArticleList;
