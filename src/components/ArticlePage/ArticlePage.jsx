import { useEffect, useState } from "react";
import { getArticleById } from "../../../utils/api.articles";
import { useParams } from "react-router-dom";
import "./ArticlePage.css";
import ArticleBody from "../ArticleBody/ArticleBody";
import CommentsList from "../CommentsList/CommentsList";
import Error from "../Error/Error";

const ArticlePage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [articleContents, setArticleContents] = useState({});
	const [error, setError] = useState(null);

	const { article_id } = useParams();

	useEffect(() => {
		getArticleById(article_id)
			.then((data) => {
				const { article } = data;
				setArticleContents(article);
			})
			.catch(({ response }) => {
				setError(response.data.msg);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return (
		<>
			{isLoading ? (
				<h2>Loading...</h2>
			) : error ? (
				<Error message={error} />
			) : (
				<>
					<ArticleBody articleContents={articleContents} />
					<CommentsList />
				</>
			)}
		</>
	);
};

export default ArticlePage;
