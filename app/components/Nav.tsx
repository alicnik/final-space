import { Link } from '@remix-run/react';

export function Nav() {
	return (
		<header className="mb-8">
			<nav>
				<ul className="flex gap-4">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/character">Characters</Link>
					</li>
					<li>
						<Link to="/episode">Episodes</Link>
					</li>
					<li>
						<Link to="/location">Locations</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
