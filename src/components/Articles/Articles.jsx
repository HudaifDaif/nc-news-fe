import { useEffect, useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import { getArticles } from "../../../utils/api.articles";
import { useParams } from "react-router-dom";

const Articles = () => {
	const [articlesData, setArticlesData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	let { topic } = useParams();

	useEffect(() => {
		setIsLoading(true);
		getArticles(currentPage, topic)
			.then((data) => {
				const { articles, pages } = data;
				setArticlesData({ articles, pages });
			})
			.finally(() => setIsLoading(false));
	}, [currentPage , topic]);

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
