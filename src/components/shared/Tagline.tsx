import { Fragment } from "react";

// "Truth · Strategy · Intelligence" badge text, separated by gold dots.
export default function Tagline({ words }: { words: string[] }) {
	return (
		<>
			{words.map((word, i) => (
				<Fragment key={i}>
					{i > 0 && <span className="text-[#C9981A]">·</span>}
					{word}
				</Fragment>
			))}
		</>
	);
}
