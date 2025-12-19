/**
 * General settings
 */
export const site = {
	name: "André Luiz",
	description: "My portfolio",
	url: process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000",
	links: {
		github: "https://github.com/AndreLuizMag",
		linkedin: "https://www.linkedin.com/in/andre-luiz-magalhaes/",
		fediverse: "https://mastodon.social/@andreluizmag",
	},
} as const;
