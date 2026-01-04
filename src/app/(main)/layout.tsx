import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import "./styles.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const MainLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<body
			className={`${inter.variable} ds-flex flow-row-nw lg:flow-col-nw justify-start align-stretch gap-md sm:gap-xs p-md sm:p-xs`}
		>
			{children}
			<Header />
		</body>
	);
};

export default MainLayout;
