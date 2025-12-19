import type { Metadata } from "next";
import "helix-css";
import "helix-color";
import "../styles/main.css";
import Script from "next/script";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "André Luiz",
	description: "My portfolio website",
};

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
			{children}
		</html>
	);
};

export default RootLayout;
