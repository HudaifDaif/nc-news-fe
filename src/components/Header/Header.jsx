import "./Header.css";

import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import UserAvatar from "../UserAvatar/UserAvatar";
import splitLogo from "../../assets/logo-split.svg";

const Header = () => {
	return (
		<header>
			<Sidebar />
			<Link to="/" className="router-link">
				<img
					src={splitLogo}
					alt="seddit logo"
					className="header-logo"
				/>
			</Link>
			<UserAvatar />
		</header>
	);
};

export default Header;
