import "./App.css";

import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";
import ToolBar from "./components/ToolBar/ToolBar";
import ArticlePage from "./components/ArticlePage/ArticlePage";
import Error from "./components/Error/Error";

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
							<ToolBar />
							<Articles />
						</>
					}
				></Route>
				<Route
					path="/articles"
					element={
						<>
							<ToolBar />
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
