import "./App.css";

import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";
import ToolBar from "./components/ToolBar/ToolBar";
import ArticlePage from "./components/ArticlePage/ArticlePage";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<ToolBar />
							<Articles />
						</>
					}
				></Route>
				<Route
					path="/topics/:topic"
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
			</Routes>
		</>
	);
}

export default App;
