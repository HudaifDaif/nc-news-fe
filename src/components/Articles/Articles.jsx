import { useEffect, useState } from "react";

import ArticleList from "../ArticleList/ArticleList";
import Error from "../Error/Error";
import { getArticles } from "../../../utils/api.articles";
import { useSearchParams } from "react-router-dom";

const Articles = () => {
	const [articlesData, setArticlesData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchParams] = useSearchParams();
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		setError(null);
		getArticles(currentPage, searchParams)
			.then((data) => {
				const { articles, pages } = data;
				setArticlesData({ articles, pages });
			})
			.catch(({ response }) => {
				setError(response.data.msg);
			})
			.finally(() => setIsLoading(false));
	}, [currentPage, searchParams]);

	return (
		<main >
			{isLoading ? (
				<h2>Loading...</h2>
			) : error ? (
				<Error message={error} />
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
