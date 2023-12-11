import "./App.css";

import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";
import ToolBar from "./components/ToolBar/ToolBar";

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
			</Routes>
		</>
	);
}

export default App;
