import "./Error.css";

const Error = ({ message }) => {
	return (
		<div className="error-box">
			<h2>Sorry, something isn't quite right</h2>
			<h3>{message}</h3>
		</div>
	);
};

export default Error;
