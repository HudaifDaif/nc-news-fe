import { useContext, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/joy/CircularProgress";
import Fab from "@mui/material/Fab";
import LoginIcon from "@mui/icons-material/Login";
import Modal from "@mui/material/Modal";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import { UserContext } from "../../Contexts/User";
import { getUsers } from "../../../utils/api.users";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "#e14500",
    border: "2px solid #000",
    borderRadius: "0.5em",
	boxShadow: 24,
	p: 4,
};

const LoginModal = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [isLoading, setIsLoading] = useState(true);
	const [users, setUsers] = useState([]);
	const { setUser } = useContext(UserContext);

	useEffect(() => {
		getUsers().then((res) => {
			setUsers(res);
			setIsLoading(false);
		});
	}, []);

	const handleLogin = (e) => {
		setUser(e);
	};

	return (
		<div className="login-avatar">
			<Fab
				variant="extended"
				size="small"
				sx={{
					marginRight: "16px",
					fontSize: "0.75rem",
					height: "64px",
				}}
				onClick={handleOpen}
			>
				<LoginIcon
					sx={{
						mr: 1,
					}}
				/>
				Log in
			</Fab>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="log in modal"
				aria-describedby="a pop up log in dialogue"
			>
				<Box sx={style}>
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
												onClick={() =>
													handleLogin(user)
												}
											>
												{user.name}
											</Option>
										);
									})}
								</Select>
							</>
						)}
					</form>
				</Box>
			</Modal>
		</div>
	);
};

export default LoginModal;
