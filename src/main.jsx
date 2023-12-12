import "./index.css";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./components/Contexts/User.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<UserProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</UserProvider>
);
