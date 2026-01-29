import { MainScroll } from "@component/MainScroll";
import type { ReactNode } from "react";

const BlankLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return <MainScroll>{children}</MainScroll>;
};

export default BlankLayout;
