import { useEffect, useState } from "react";
import { getArticles } from "../../../utils/api.articles";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticleList = () => {
	const [articlesData, setArticlesData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);

	const handlePageChange = (newPage) => {
		setPage(newPage);
	};

	useEffect(() => {
		setIsLoading(true);
		getArticles(page)
			.then((data) => {
				const { articles, pages } = data;
				setArticlesData({ articles, pages });
			})
			.finally(() => setIsLoading(false));
	}, [page]);

	return isLoading ? (
		<h2>Loading...</h2>
	) : (
		<>
			<section>
				{articlesData.articles.map((article) => {
					return (
						<ArticleCard
							key={`article.${article.article_id}`}
							article={article}
						/>
					);
				})}
			</section>
			<div>
				page {page} of {articlesData.pages}
			</div>
			<nav>
				{page > 1 && (
					<button onClick={() => handlePageChange(page - 1)}>
						previous
					</button>
				)}
				{page < articlesData.pages && (
					<button onClick={() => handlePageChange(page + 1)}>
						next
					</button>
				)}
			</nav>
		</>
	);
};

export default ArticleList;
