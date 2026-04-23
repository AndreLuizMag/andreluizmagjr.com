import type { Metadata } from "next";
import "helix-css";
import "helix-color";
import "../styles/main.css";
import { Google_Sans_Flex, Google_Sans_Code } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "André Luiz",
	description: "My portfolio website",
};

const googleSans = Google_Sans_Flex({
	variable: "--font-google-sans",
	subsets: ["latin"],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
  adjustFontFallback: false,
});

const googleSansCode = Google_Sans_Code({
	variable: "--font-google-sans-code",
	subsets: ["latin"],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
  adjustFontFallback: false,
});

const RootLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<html lang="en">
			<head>
				<Script
					defer
					src="https://cloud.umami.is/script.js"
					data-website-id="3c21baa8-a7ff-419c-8bc2-839eb12fa763"
				/>
			</head>
			<body
				className={`${googleSans.variable} ${googleSansCode.variable} ds-flex flow-row-nw lg:flow-col-nw justify-start align-stretch gap-md sm:gap-xs p-md sm:p-xs`}
			>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
