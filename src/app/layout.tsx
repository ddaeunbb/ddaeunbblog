import NextThemeProvider from '@/components/theme/NextThemeProvider';
import Header from '@/components/navbar/Navbar';
import '../style/globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/footer/Footer';
import { $ } from '../lib/core';
import { fontMono, fontSans, fontSpoqa } from '../lib/fonts';

export const metadata: Metadata = {
	title: 'ddaeunbblog',
	description: 'Generated by ddaeunbb',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={$(
					fontSans.variable,
					fontSpoqa.variable,
					fontMono.variable,
					'font-sans',
				)}
			>
				<NextThemeProvider>
					<Header />
					<div className="font-sans text-neutral-800 mx-auto max-w-3xl px-6 lg:max-w-6xl lg:px-8">
						{children}
						<Footer />
					</div>
				</NextThemeProvider>
			</body>
		</html>
	);
}
