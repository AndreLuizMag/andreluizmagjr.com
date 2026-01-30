"use client";

import { useMemo } from "react";
import { icons } from "./icons";
import type { IconProps } from "./types";

const Icon = ({
	name,
	width = 32,
	height = 32,
	className = "",
	color = "currentColor",
}: IconProps) => {
	const iconData = useMemo(() => {
		return icons.find((icon) => icon.displayName === name);
	}, [name]);

	// Erro falback
	if (!iconData) {
		console.error(`Icon "${name}" not found`);
		return (
			<svg
				width={width}
				height={height}
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
				aria-label="Icon not found"
			>
				<title>Icon not found</title>
				<path
					d="M9.15501 6.86999C8.53001 6.24499 7.51501 6.24499 6.89001 6.86999C6.26501 7.49499 6.26501 8.50999 6.89001 9.13499L13.76 16L6.89501 22.87C6.27001 23.495 6.27001 24.51 6.89501 25.135C7.52001 25.76 8.53501 25.76 9.16001 25.135L16.025 18.265L22.895 25.13C23.52 25.755 24.535 25.755 25.16 25.13C25.785 24.505 25.785 23.49 25.16 22.865L18.29 16L25.155 9.12999C25.78 8.50499 25.78 7.48999 25.155 6.86499C24.53 6.23999 23.515 6.23999 22.89 6.86499L16.025 13.735L9.15501 6.86999Z"
					fill="currentColor"
				/>
				<path
					d="M0 8C0 3.58172 3.58172 0 8 0H16V2H8C4.68629 2 2 4.68629 2 8V24C2 27.3137 4.68629 30 8 30H24C27.3137 30 30 27.3137 30 24V8C30 4.68629 27.3137 2 24 2H16V0H24C28.4183 0 32 3.58172 32 8V24C32 28.4183 28.4183 32 24 32H8C3.58172 32 0 28.4183 0 24V8Z"
					fill="currentColor"
				/>
			</svg>
		);
	}

	const parser = new DOMParser();
	const doc = parser.parseFromString(iconData.svg, "image/svg+xml");
	const svgElement = doc.querySelector("svg");

	if (!svgElement) {
		return null;
	}

	const viewBox = svgElement.getAttribute("viewBox") || "0 0 32 32";
	const content = svgElement.innerHTML;

	return (
		<svg
			width={width}
			height={height}
			viewBox={viewBox}
			className={className}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-label={iconData.displayName}
			style={{ color }}
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	);
};

export default Icon;
