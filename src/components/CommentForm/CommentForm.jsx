import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import "./CommentForm.css";
import { UserContext } from "../Contexts/User";
import { postCommentByArticleId } from "../../../utils/api.comments";

const CommentForm = ({ setIsCommenting }) => {
	const { user } = useContext(UserContext);
	const [input, setInput] = useState("");
	const { article_id } = useParams();

	const handleToggleComment = () => {
		setIsCommenting((current) => !current);
	};

	const handleInput = (e) => {
		e.preventDefault();
		setInput(e.target.value);
		console.log(input);
	};
	const handleSubmitComment = (e) => {
		const { username, body } = user;
		postCommentByArticleId(article_id, username, body).then(() => {
			setInput("");
		});
		handleToggleComment();
	};

	return (
		<form className="comment-form" onSubmit={handleSubmitComment}>
			<label htmlFor="comment-body">
				Comment:
				<textarea
					name="comment-body"
					id="comment-body"
					placeholder="Write your comment here..."
					onChange={handleInput}
					input={input}
				></textarea>
			</label>
			<button>Submit</button>
		</form>
	);
};

export default CommentForm;
