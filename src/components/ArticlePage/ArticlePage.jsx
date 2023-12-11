import { useEffect, useState } from "react";
import { getArticleById } from "../../../utils/api.articles";
import { useParams } from "react-router-dom";
import "./ArticlePage.css";
import ArticleBody from "../ArticleBody/ArticleBody";

const ArticlePage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [articleContents, setArticleContents] = useState({});

	const { article_id } = useParams();

	useEffect(() => {
		setIsLoading(true);
		getArticleById(article_id)
			.then((data) => {
				const { article } = data;
				setArticleContents(article);
			})
			.finally(() => setIsLoading(false));
	}, []);

	return isLoading ? (
		<h2>Loading...</h2>
	) : (
		<>
			<ArticleBody articleContents={articleContents} />
		</>
	);
};

export default ArticlePage;
