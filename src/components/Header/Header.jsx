import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<Link to="/">
				<h1>Header (Home)</h1>
			</Link>
		</header>
	);
};

export default Header;
