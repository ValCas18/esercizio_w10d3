import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import TopBar from "./components/TopBar";
import ActionBar from "./components/ActionBar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import TVShows from "./components/TVShows";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Container fluid className="px-3">
					<TopBar />
					<ActionBar />
					<Routes>
						{/*<Gallery title="batman" />
						<Gallery title="lord%20of%20the%20rings" />
						<Gallery title="star%20wars" />*/}
						<Route path="/tv-shows" element={<TVShows />} />
					</Routes>
				</Container>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
