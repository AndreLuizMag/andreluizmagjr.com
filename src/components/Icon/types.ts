import type { SVGAttributes } from "react";

export type IconName = "Github" | "Linkedin" | "Mastodon";

export type IconProps = {
	name: string;
	size?: number;
	title?: string;
} & Omit<SVGAttributes<SVGSVGElement>, "width" | "height" | "viewBox">;
