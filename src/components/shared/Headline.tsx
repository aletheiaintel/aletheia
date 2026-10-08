import { Fragment } from "react";

// Renders a CMS headline: each line break becomes <br />, and *words* become the
// gold italic accent used across the site.
export default function Headline({
	text,
	accentClassName = "text-[#C9981A]",
}: {
	text: string;
	accentClassName?: string;
}) {
	return (
		<>
			{text.split("\n").map((line, i) => (
				<Fragment key={i}>
					{i > 0 && <br />}
					{line
						.split(/(\*[^*]+\*)/g)
						.filter(Boolean)
						.map((part, j) =>
							/^\*[^*]+\*$/.test(part) ? (
								<em key={j} className={accentClassName}>
									{part.slice(1, -1)}
								</em>
							) : (
								<Fragment key={j}>{part}</Fragment>
							),
						)}
				</Fragment>
			))}
		</>
	);
}
