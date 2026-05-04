// src/lib/projects.ts
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ProjectMeta = {
	title: string;
	excerpt: string;
	date: string;
	tags?: string[];
	slug: string;
};

const PROJECTS_DIR = path.join(process.cwd(), "src/content/projects");

export function getAllProjects() {
	const files = fs.readdirSync(PROJECTS_DIR);

	return files
		.filter((f) => f.endsWith(".mdx"))
		.map((filename) => {
			const slug = filename.replace(".mdx", "");
			const raw = fs.readFileSync(path.join(PROJECTS_DIR, filename), "utf-8");
			const { data } = matter(raw);

			return { slug, ...data } as ProjectMeta;
		});
}

export function getProjectBySlug(slug: string) {
	const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);

	if (!fs.existsSync(filePath)) return null;

	const raw = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(raw);

	return { meta: data as ProjectMeta, content };
}
