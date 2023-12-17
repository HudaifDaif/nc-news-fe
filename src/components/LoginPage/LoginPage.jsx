import { useContext, useEffect, useState } from "react";

import CircularProgress from "@mui/joy/CircularProgress";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import { UserContext } from "../../Contexts/User";
import { getUsers } from "../../../utils/api.users";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [users, setUsers] = useState([]);
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		getUsers().then((res) => {
			setUsers(res);
			setIsLoading(false);
		});
	}, []);

	const handleLogin = (e) => {
		setUser(e);
		navigate("/articles");
	};

	return (
		<main>
			<form>
				{isLoading ? (
					<CircularProgress
						color="neutral"
						size="sm"
						value={33}
						variant="plain"
					/>
				) : (
					<>
						<Select
							defaultValue=""
							placeholder="Please pick a user"
						>
							{users.map((user) => {
								return (
									<Option
										key={user.username}
										value={user}
										onClick={() => handleLogin(user)}
									>
										{user.name}
									</Option>
								);
							})}
						</Select>
					</>
				)}
			</form>
		</main>
	);
};

export default LoginPage;
