import "./ArticleBody.css";

const ArticleBody = ({ articleContents }) => {
	const {
		title,
		article_img_url,
		author,
		body,
		comment_count,
		topic,
		votes,
	} = articleContents;

	return (
		<main>
			<h2>{title}</h2>
			<section className="article-contents">
				<article>
				<img src={article_img_url} alt="" className="article-image" />
					<p>{body}</p>
					<p>Topic: {topic}</p>
					<p>Author: {author}</p>
				</article>
				<p>Comments: {comment_count}</p>
				<button>comment</button>
				<p>Votes: {votes}</p>
				<button>+</button>
				<button>-</button>
			</section>
		</main>
	);
};

export default ArticleBody;
