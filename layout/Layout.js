import Head from 'next/head';

export default function Layout({ children }) {
	return (
		<div>
			<Head>
				<meta charset='utf-8' />
				<title></title>
				<meta name='description' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />

				<meta property='og:title' content='' />
				<meta property='og:type' content='' />
				<meta property='og:url' content='' />
				<meta property='og:image' content='' />

				<link rel='icon' href='/favicon.ico' sizes='any' />
				<link rel='icon' href='/icon.svg' type='image/svg+xml' />
				<link rel='apple-touch-icon' href='icon.png' />
			</Head>
			<header></header>
			<main>{children}</main>
		</div>
	);
}
