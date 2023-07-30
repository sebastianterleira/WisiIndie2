import './globals.css';
import { Inter } from 'next/font/google';
import { IdeaContextProvider } from '../context/AppContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'WisiIndie',
	description: 'WisiIndie: Creative and innovative side projects',
	metadataBase: new URL('https://acme.com'),
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US',
			'de-DE': '/de-DE',
		},
	},
	// esto es para la imagen preview
	openGraph: {
		images: '/Home.png',
	},
	icons: {
		icon: '/favicon.ico',
		// shortcut: '/shortcut-icon.png',
		// apple: '/apple-icon.png',
		// other: {
		//   rel: 'apple-touch-icon-precomposed',
		//   url: '/apple-touch-icon-precomposed.png',
		// },
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<IdeaContextProvider>{children}</IdeaContextProvider>
			</body>
		</html>
	);
}
