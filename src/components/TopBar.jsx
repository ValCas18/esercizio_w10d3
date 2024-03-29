/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faCircleUser } from "@fortawesome/free-solid-svg-icons";*/
import { Nav, NavLink } from "react-bootstrap";
import logo from "../logo.png";

const TopBar = () => (
	<nav className="navbar navbar-expand-lg">
		<div className="container-fluid">
			<a className="navbar-brand" href="#home">
				<img src={logo} style={{ width: "100px", height: "55px" }} alt="logo netflix" />
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<Nav className="me-auto mb-2 mb-lg-0">
					<NavLink to="/" className="nav-link text-light">
						Home
					</NavLink>
					<NavLink to="/tv-shows" className="nav-link text-light">
						TV Shows
					</NavLink>
					<NavLink to="/" className="nav-link text-light">
						Movies
					</NavLink>
					<NavLink to="/" className="nav-link text-light">
						Recently Added
					</NavLink>
					<NavLink to="/" className="nav-link text-light">
						My List
					</NavLink>
					{/*<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active fw-bold text-secondary" href="#home">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link fw-bold text-secondary" href="#tv-show">
								TV Shows
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link fw-bold text-secondary" href="#movies">
								Movies
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link fw-bold text-secondary" href="#recently-added">
								Recently Added
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link fw-bold text-secondary" href="#my-list">
								My List
							</a>
						</li>
</ul>*/}
				</Nav>
			</div>
		</div>
	</nav>
);
export default TopBar;
