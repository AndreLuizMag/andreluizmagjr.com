import type { Metadata } from "next";
import "helix-css";
import "helix-color";
import "../styles/main.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "André Luiz",
	description: "My portfolio website",
};

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
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
				className={`${inter.variable} ds-flex flow-row-nw lg:flow-col-nw justify-start align-stretch gap-md sm:gap-xs p-md sm:p-xs`}
			>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
