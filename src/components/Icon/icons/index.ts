import type { ReactElement } from "react";
import { Fediverse } from "./Fediverse";
import { Github } from "./Github";
import { Linkedin } from "./Linkedin";
import { Mastodon } from "./Mastodon";

export const iconPaths: Record<string, ReactElement> = {
	Fediverse,
	Github,
	Linkedin,
	Mastodon,
};
