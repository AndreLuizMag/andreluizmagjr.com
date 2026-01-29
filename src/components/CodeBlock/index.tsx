import { highlight } from "sugar-high";

interface CodeBlockProps {
	children: string;
	language?: string;
}

export const CodeBlock = ({
	children,
	language = "typescript",
}: CodeBlockProps) => {
	const highlightedCode = highlight(children);

	return (
		<pre data-language={language}>
			<code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
		</pre>
	);
};
