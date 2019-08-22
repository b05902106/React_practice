import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import { matchRoutes } from 'react-router-config';
import routes from './routes';

const HomePath = '/React_practice'


const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-light bg-light">
			<Link className="navbar-brand" to={HomePath}>
				<img src={logo} alt="react-router-breadcrumb" width="30" height="30" />
			</Link>

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarContent"
				aria-controls="navbarContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarContent">
				<ul className="navbar-nav">
					{/* Home */}
					<li className="nav-item">
						<Link className="nav-link" to={HomePath}>
							Home
            			</Link>
					</li>
					{/* Tools */}
					<li className="nav-item dropdown">
						<Link
							className="nav-link dropdown-toggle"
							to={`${HomePath}/tools`}
							id="navbarDropdownMenuLink"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Tools
           				</Link>
						<div
							className="dropdown-menu"
							aria-labelledby="navbarDropdownMenuLink"
						>
							<Link className="nav-link" to={`${HomePath}/tools/counter`}>
								counter
            				</Link>
						</div>
					</li>
					{/* Games */}
					<li className="nav-item dropdown">
						<Link
							className="nav-link dropdown-toggle"
							to={`${HomePath}/games`}
							id="navbarDropdownMenuLink"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Games
           				</Link>
						<div
							className="dropdown-menu"
							aria-labelledby="navbarDropdownMenuLink"
						>
							<Link className="nav-link" to={`${HomePath}/games/threedoors`}>
								threeDoors
							</Link>
							<Link className="nav-link" to={`${HomePath}/games/guessnumber`}>
								guessnumber
							</Link>
							<Link className="nav-link" to={`${HomePath}/games/tictacku`}>
								tictacku
							</Link>
						</div>
					</li>
					{/* Pets */}
					<li className="nav-item dropdown">
						<Link
							className="nav-link dropdown-toggle"
							to={`${HomePath}/pets`}
							id="navbarDropdownMenuLink"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Pets
           				</Link>
						<div
							className="dropdown-menu"
							aria-labelledby="navbarDropdownMenuLink"
						>
							<Link className="dropdown-item" to={`${HomePath}/pets/dog`}>
								dog
              				</Link>
							<Link className="dropdown-item" to={`${HomePath}/pets/cat`}>
								cat
              				</Link>
						</div>
					</li>
					{/* Others */}
					<li className="nav-item dropdown">
						<Link
							className="nav-link dropdown-toggle"
							to={`${HomePath}/others`}
							id="navbarDropdownMenuLink"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Others
           				</Link>
						<div
							className="dropdown-menu"
							aria-labelledby="navbarDropdownMenuLink"

						>
							<Link className="dropdown-item" to={`${HomePath}/others/backgroundColorChange`}>
								backgroundColorChange
              				</Link>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

const Breadcrumb = ({ locationPath, addHomeToFirstPath }) => {
	let matchedRoutes = matchRoutes(routes, locationPath);

	const AddHomeToFirstPath = (matchedRoutes) => {
		return ([
			{
				route: {
					path: '/',
					breadcrumbName: 'Home'
				}
			},
			...matchedRoutes
		]);
	}

	if (addHomeToFirstPath) {
		matchedRoutes = AddHomeToFirstPath(matchedRoutes);
	};

	return (
		<nav>
			<ol className="breadcrumb">
				{matchedRoutes.map((matchRoute, i) => {
					const { path, breadcrumbName } = matchRoute.route;
					const isActive = path === locationPath;

					return isActive ? (
						<li key={i} className="breadcrumb-item">
							{breadcrumbName}
						</li>
					) : (
							<li key={i} className="breadcrumb-item">
								<Link to={path}>{breadcrumbName}</Link>
							</li>
						)
				})}
			</ol>
		</nav>
	)
}

export { Navbar, Breadcrumb };