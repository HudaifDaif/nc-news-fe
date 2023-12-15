import "./Header.css";

import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Typography from "@mui/joy/Typography";
import UserAvatar from "../UserAvatar/UserAvatar";

const Header = () => {
	return (
		<header>
			<Sidebar />
			<Link to="/" className="router-link">
				<Typography level="h1" color="primary.50">
					saiddit
				</Typography>
			</Link>
			<UserAvatar />
		</header>
	);
};

export default Header;
