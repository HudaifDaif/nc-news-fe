import "./Error.css";

const Error = ({ message }) => {
	return (
		<div className="error-box">
			<h2>Sorry, something isn't quite right</h2>
			<p>{message}</p>
		</div>
	);
};

export default Error;
