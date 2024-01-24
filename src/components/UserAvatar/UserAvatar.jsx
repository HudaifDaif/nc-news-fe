import "./UserAvatar.css";

import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Fab from "@mui/material/Fab";
import LoginModal from "../LoginModal/LoginModal";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import { Typography } from "@mui/joy";
import { UserContext } from "../../Contexts/User";

const UserAvatar = () => {
	const { user } = useContext(UserContext);
	const { username, avatar_url } = user;
	const [isAtLogin, setIsAtLogin] = useState(false);
	let location = useLocation();

	useEffect(() => {
		location.pathname === "/login"
			? setIsAtLogin(true)
			: setIsAtLogin(false);
	}, [location, user]);

	return username ? (
		<div>
			<img src={avatar_url} alt="user avatar" className="user-avatar" />
			<Typography level="body-xs" color="primary.50" className="username">
				{username}
			</Typography>
		</div>
	) : isAtLogin ? (
		<Link to="/articles" className="login-avatar">
			<Fab
				variant="extended"
				size="small"
				sx={{
					marginRight: "16px",
					fontSize: "0.75rem",
					height: "64px",
				}}
			>
				<NoAccountsIcon
					sx={{
						mr: 1,
					}}
				/>
				Continue as guest
			</Fab>
		</Link>
	) : (
		<LoginModal />
	);
};

export default UserAvatar;
