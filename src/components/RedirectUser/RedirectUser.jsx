import { useContext, useEffect } from "react";

import CircularProgress from "@mui/joy/CircularProgress";
import { UserContext } from "../../Contexts/User";
import { useNavigate } from "react-router-dom";

const RedirectUser = () => {
	const { user } = useContext(UserContext);
	const { username, avatar_url } = user;

	const navigate = useNavigate();

	useEffect(() => {
		username ? navigate("/articles") : navigate("/login");
	}, [user]);

	return (
		<CircularProgress
			color="neutral"
			size="lg"
			value={33}
			variant="plain"
			sx={{
				margin: "64px auto",
			}}
		/>
	);
};

export default RedirectUser;
