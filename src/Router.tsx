// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// local
import "./assets/css/index.scss";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Pricing from "./pages/pricing/Pricing";

const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/about" element={<About />} />
					<Route path="/" element={<Home />} />
					<Route path="*" element={<div>Error</div>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
