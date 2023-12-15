import "./App.css";

import { Route, Routes } from "react-router-dom";

import ArticlePage from "./components/ArticlePage/ArticlePage";
import Articles from "./components/Articles/Articles";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import ToolBar from "./components/ToolBar/ToolBar";

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route
					path="/"
					element={
						// TODO replace with a welcome/login page
						<>
							<Articles />
						</>
					}
				></Route>
				<Route
					path="/articles"
					element={
						<>
							<Articles />
						</>
					}
				></Route>
				<Route
					path="/articles/:article_id"
					element={<ArticlePage />}
				></Route>
				<Route
					path="*"
					element={<Error message="Page not found" />}
				></Route>
			</Routes>
		</>
	);
}

export default App;
