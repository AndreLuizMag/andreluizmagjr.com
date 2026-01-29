import { MainScroll } from "@component/MainScroll";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";

const BlankLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<>
			<MainScroll>{children}</MainScroll>
		</>
	);
};

export default BlankLayout;
