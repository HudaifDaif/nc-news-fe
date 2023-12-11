import "./CommentCard.css"

const CommentCard = ({ comment }) => {
    const { body, author, votes, created_at } = comment;
    
    const formattedDate = Date(created_at).slice(0,21)

	return (
        <article className="comment-contents">
            <p>{body}</p>
            <p>Author: {author} </p>
            <p>{ formattedDate}</p>
			<p>Votes: {votes}</p>
			<button>+</button>
			<button>-</button>
		</article>
	);
};

export default CommentCard;
