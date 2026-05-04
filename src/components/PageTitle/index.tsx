import type { ReactNode } from "react";

type PageTitleProps = {
	title: string;
	children?: ReactNode;
};

export const PageTitle = ({ title, children }: PageTitleProps) => {
	return (
		<section className="fade-in">
			<div className="container-sm">
				<div>
					<h1 className="mb-xs color-white-100">{title}</h1>
					{children && <p className="color-white-64">{children}</p>}
				</div>
			</div>
		</section>
	);
};
