import "./UserAvatar.css";

import { Typography } from "@mui/joy";
import { UserContext } from "../Contexts/User";
import { useContext } from "react";

const UserAvatar = () => {
	const { user } = useContext(UserContext);

	return (
		<div>
			<img
				src={user.avatar_url}
				alt="user avatar"
				className="user-avatar"
			/>
			<Typography level="body-xs" color="primary.50">
				{user.username}
			</Typography>
		</div>
	);
};

export default UserAvatar;
