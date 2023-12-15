import "./index.css";
import "@fontsource/inter";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./components/Contexts/User.jsx";

import { extendTheme } from "@mui/joy/styles";

ReactDOM.createRoot(document.getElementById("root")).render(
	<UserProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</UserProvider>
);
