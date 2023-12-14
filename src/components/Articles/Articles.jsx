import { useEffect, useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import { getArticles } from "../../../utils/api.articles";
import { useSearchParams } from "react-router-dom";

const Articles = () => {
	const [articlesData, setArticlesData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchParams] = useSearchParams();

	useEffect(() => {
		setIsLoading(true);
		getArticles(currentPage, searchParams)
			.then((data) => {
				const { articles, pages } = data;
				setArticlesData({ articles, pages });
			})
			.finally(() => setIsLoading(false));
	}, [currentPage, searchParams]);

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
