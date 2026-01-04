import type { ReactElement } from "react";
import { Fediverse } from "./Fediverse";
import { Github } from "./Github";
import { House } from "./House";
import { Linkedin } from "./Linkedin";
import { Mastodon } from "./Mastodon";
import { Newspaper } from "./Newspaper";

export const iconPaths: Record<string, ReactElement> = {
	Fediverse,
	Github,
	House,
	Linkedin,
	Mastodon,
	Newspaper,
};
