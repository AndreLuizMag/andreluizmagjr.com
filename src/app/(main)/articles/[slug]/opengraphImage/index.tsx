import { ImageResponse } from "next/og";

export const runtime = "edge";

export default async function OpengraphImage({
	params,
}: {
	params: { slug: string };
}) {
	const article = await reader.collections.posts.read(params.slug);

	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#000",
			}}
		>
			{/* Você precisaria converter o ícone para SVG inline */}
			<div style={{ fontSize: 128, color: "white" }}>
				{article?.iconHighlight}
			</div>
		</div>,
	);
}
