import { PortableText, type PortableTextComponents } from "next-sanity";
import type { TableBlock } from "@/content/richText";
import type { RichText as RichTextValue } from "@/content/types";
import { colour } from "@/content/theme";

function Table({ value }: { value: TableBlock }) {
	const accent = colour(value.colour).accent;
	const rows = value.rows ?? [];

	if (value.variant === "labelled") {
		return (
			<div className="rounded-xl border border-black/[0.07] overflow-hidden text-[13px]">
				{rows.map(({ _key, cells = [] }, i) => (
					<div
						key={_key}
						className={`grid grid-cols-[150px_1fr] border-t border-black/5 first:border-t-0 ${i % 2 !== 0 ? "bg-black/2" : ""}`}
					>
						<div
							className="px-4 py-3 bg-[#121212] font-medium text-[12px] leading-snug"
							style={{ color: accent }}
						>
							{cells[0]}
						</div>
						<div className="px-4 py-3 text-[#555]">{cells[1]}</div>
					</div>
				))}
			</div>
		);
	}

	const columns = Math.max(value.header?.length ?? 0, ...rows.map((r) => r.cells?.length ?? 0), 1);
	const grid = { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` };

	return (
		<div className="rounded-xl border border-black/[0.07] overflow-hidden text-[13px]">
			{value.header?.length ? (
				<div
					className="grid bg-[#121212] text-white px-4 py-2.5 font-medium text-[12px]"
					style={grid}
				>
					{value.header.map((cell, i) => (
						<span key={i}>{cell}</span>
					))}
				</div>
			) : null}
			{rows.map(({ _key, cells = [] }, i) => (
				<div
					key={_key}
					className={`grid px-4 py-2.5 border-t border-black/5 ${i % 2 !== 0 ? "bg-black/2" : ""}`}
					style={grid}
				>
					{cells.map((cell, c) => (
						<span
							key={c}
							className={
								c === 0
									? "font-medium text-[#222]"
									: c === 1
										? "font-medium"
										: "text-[#666]"
							}
							style={c === 1 ? { color: accent } : undefined}
						>
							{cell}
						</span>
					))}
				</div>
			))}
		</div>
	);
}

const components: PortableTextComponents = {
	block: {
		normal: ({ children }) => <p>{children}</p>,
		note: ({ children }) => <p className="italic text-[#777]">{children}</p>,
	},
	list: {
		bullet: ({ children }) => <ul className="list-disc space-y-1 pl-5">{children}</ul>,
		number: ({ children }) => <ol className="list-decimal space-y-1 pl-5">{children}</ol>,
	},
	marks: {
		link: ({ value, children }) => (
			<a
				href={value?.href}
				className="text-[#C9981A] underline underline-offset-4 hover:text-[#121212]"
			>
				{children}
			</a>
		),
	},
	types: {
		table: Table,
	},
};

export default function RichText({ value }: { value: RichTextValue }) {
	return (
		<div className="space-y-4">
			<PortableText value={value} components={components} />
		</div>
	);
}
