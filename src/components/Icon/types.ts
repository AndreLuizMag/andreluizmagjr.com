import type { SVGAttributes } from "react";

export type IconName =
	| "Github"
	| "House"
	| "Linkedin"
	| "Fediverse"
	| "Mastodon"
	| "Newspaper";

export type IconProps = {
	name: string;
	size?: number;
	title?: string;
} & Omit<SVGAttributes<SVGSVGElement>, "width" | "height" | "viewBox">;
