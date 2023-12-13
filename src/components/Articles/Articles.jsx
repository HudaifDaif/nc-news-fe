import { useEffect, useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import { getArticles } from "../../../utils/api.articles";

const Articles = ({ articleQueries }) => {
	const [articlesData, setArticlesData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		setIsLoading(true);
		getArticles(currentPage, articleQueries)
			.then((data) => {
				const { articles, pages } = data;
				setArticlesData({ articles, pages });
			})
			.finally(() => setIsLoading(false));
	}, [articleQueries, currentPage]);

	return (
		<main>
			<button>Post an article</button>
			{isLoading ? (
				<h2>Loading...</h2>
			) : (
				<ArticleList
					articles={articlesData.articles}
					pages={articlesData.pages}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			)}
		</main>
	);
};

export default Articles;
