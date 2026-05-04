import { site } from "@config/site";
import type { IconName } from "@/components/Icon";
import { routes } from "./routes";

export type NavigationType = {
	id: string;
	label: string;
	href: string;
	description?: string;
	iconName: IconName;
	external?: boolean;
	disabled?: boolean;
	badge?: string;
	children?: NavigationType[];
};

export const social: NavigationType[] = [
	{
		id: "github",
		label: "Github",
		href: site.links.github,
		iconName: "Github",
	},
	{
		id: "linkedin",
		label: "Linkedin",
		href: site.links.linkedin,
		iconName: "Linkedin",
	},
	{
		id: "fediverse",
		label: "Fediverse",
		href: site.links.fediverse,
		iconName: "Fediverse",
	},
];

export const headerNav: NavigationType[] = [
	{
		id: "home",
		label: "Home",
		href: routes.home,
		iconName: "house",
	},
	{
		id: "articles",
		label: "Articles",
		href: routes.articles,
		iconName: "newspaper",
	},
	{
		id: "projects",
		label: "Projects",
		href: routes.projects,
		iconName: "windowMaximize",
	},
];
