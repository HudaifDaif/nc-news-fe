import "./ArticleCard.css";
import { Link } from "react-router-dom"

const ArticleCard = ({ article }) => {
	return (
		<Link to={`/articles/${article.article_id}`}>
			<section className="article-card">
				<h2>{article.title}</h2>
				<img src={article.article_img_url} alt="" />
				<button>Open Article</button>
			</section>
		</Link>
	);
};

export default ArticleCard;
