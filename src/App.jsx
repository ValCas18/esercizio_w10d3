import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import TopBar from "./components/TopBar";
import ActionBar from "./components/ActionBar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Container fluid className="px-3">
					<TopBar />
					<ActionBar />
					<Routes>
						<Route path="/" element={<Gallery title="batman" bigTitle="Trending Now" />} />
						<Route path="/" element={<Gallery title="lord%20of%20the%20rings" bigTitle="Watch Again" />} />
						<Route path="/" element={<Gallery title="star%20wars" bigTitle="New Releases" />} />
						{/*<Route path="" element={<TVShows />} />*/}
					</Routes>
				</Container>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
