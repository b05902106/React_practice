import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import { matchRoutes } from 'react-router-config';
import routes from './routes';


const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-light bg-light">
			<Link className="navbar-brand" to="/">
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
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Home
            </Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/counter">
							counter
            </Link>
					</li>
					<li className="nav-item dropdown">
						<Link
							className="nav-link dropdown-toggle"
							to="/pets"
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
							<Link className="dropdown-item" to="/pets/dog">
								Dog
              </Link>
							<Link className="dropdown-item" to="/pets/cat">
								Cat
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