import { MainScroll } from "@component/MainScroll";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";

const MainLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<>
			<MainScroll>{children}</MainScroll>
			<Header />
		</>
	);
};

export default MainLayout;
