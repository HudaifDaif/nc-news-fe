import "./ArticleCard.css";

const ArticleCard = ({ article }) => {
	return (
		<button className="article-card">
			<h2>{article.title}</h2>
			<img src={article.article_img_url} alt="" />
		</button>
	);
};

export default ArticleCard;
