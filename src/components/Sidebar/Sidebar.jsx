import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Menu from "@mui/icons-material/Menu";
import ModalClose from "@mui/joy/ModalClose";
import Search from "@mui/icons-material/Search";
import ToolBar from "../ToolBar/ToolBar";
import Typography from "@mui/joy/Typography";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const handleNavigate = (link) => {
		setOpen(false);
		navigate(link);
	};

	return (
		<>
			<IconButton
				variant="outlined"
				color="neutral"
				onClick={() => setOpen(true)}
				sx={{
                    margin: "16px",
                    width: "64px",
                    height: "64px",
				}}
			>
				<Menu />
			</IconButton>
			<Drawer open={open} onClose={() => setOpen(false)}>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 0.5,
						ml: "auto",
						mt: 1,
						mr: 2,
					}}
				>
					<Typography
						component="label"
						htmlFor="close-icon"
						fontSize="sm"
						fontWeight="lg"
						sx={{ cursor: "pointer" }}
					>
						Close
					</Typography>
					<ModalClose id="close-icon" sx={{ position: "initial" }} />
                </Box>
                <Input
                    disabled={true}
                    color="danger"
					size="sm"
					placeholder="This doesn't work yet."
					variant="plain"
					endDecorator={<Search />}
					slotProps={{
						input: {
							"aria-label": "Search anything",
						},
					}}
					sx={{
						m: 3,
						borderRadius: 0,
						borderBottom: "2px solid",
						borderColor: "neutral.outlinedBorder",
						"&:hover": {
							borderColor: "neutral.outlinedHoverBorder",
						},
						"&::before": {
							border: "1px solid var(--Input-focusedHighlight)",
							transform: "scaleX(0)",
							left: 0,
							right: 0,
							bottom: "-2px",
							top: "unset",
							transition:
								"transform .15s cubic-bezier(0.1,0.9,0.2,1)",
							borderRadius: 0,
						},
						"&:focus-within::before": {
							transform: "scaleX(1)",
						},
					}}
                />
                <ToolBar />
				<List
					size="lg"
					component="nav"
					sx={{
						flex: "none",
						fontSize: "lg",
						"& > div": {
							justifyContent: "left",
                            width: "100%",
						},
					}}
				>
					<ListItemButton onClick={() => handleNavigate("/")}>
						<ListItemDecorator>
							<HomeIcon />
						</ListItemDecorator>
						Home
					</ListItemButton>

					<ListItemButton
						onClick={() =>
							window.open(
								"https://github.com/HudaifDaif/nc-news-fe",
								"_blank"
							)
						}
					>
						<ListItemDecorator>
							<GitHubIcon />
						</ListItemDecorator>
						GitHub
					</ListItemButton>

					<ListItemButton
						onClick={() =>
							window.open(
								"https://www.linkedin.com/in/hudaifa-tem/",
								"_blank"
							)
						}
					>
						<ListItemDecorator>
							<LinkedInIcon />
						</ListItemDecorator>
						LinkedIn
					</ListItemButton>
				</List>
			</Drawer>
		</>
	);
};

export default Sidebar;
