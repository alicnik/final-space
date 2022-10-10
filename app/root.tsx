import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import { Nav } from './components';
import styles from './tailwind.css';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'New Remix App',
	viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function App() {
	return (
		<Document>
			<Outlet />
		</Document>
	);
}

function Document({
	children,
	title = 'Final Space',
}: React.PropsWithChildren<{ title?: string }>) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<title>{title}</title>
				<Links />
				<Meta />
			</head>
			<body className="bg-zinc-200 leading-relaxed text-zinc-800 dark:bg-slate-800 dark:text-slate-200 p-8">
				<Nav />
				{children}
				<LiveReload />
				<Scripts />
				<ScrollRestoration />
			</body>
		</html>
	);
}
