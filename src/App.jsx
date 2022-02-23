import React from "react";
import "./App.less";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailProductPage from "./pages/DetailProductPage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/:title" element={<DetailProductPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
