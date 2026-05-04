// src/app/projects/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>; // ← Promise aqui também
}): Promise<Metadata> {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		return { title: "Project not found" };
	}

	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://seusite.com";
	const projectUrl = `${baseUrl}/projects/${slug}`;

	return {
		title: project.meta.title,
		description: project.meta.excerpt,
		openGraph: {
			title: project.meta.title,
			description: project.meta.excerpt,
			url: projectUrl,
			type: "article",
		},
		twitter: {
			card: "summary_large_image",
			title: project.meta.title,
			description: project.meta.excerpt,
		},
		keywords: project.meta.tags?.join(", "),
		alternates: {
			canonical: projectUrl,
		},
	};
}

export async function generateStaticParams() {
	const projects = getAllProjects();
	return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) notFound();

	return (
		<main className="page-article p-block-9xl">
			<div className="container-sm ds-flex-start flow-col-nw gap-3xl fade-in">
				<MDXRemote source={project.content} />
			</div>
		</main>
	);
}
