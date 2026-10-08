import type { PortableTextBlock } from "next-sanity";
import type { PaletteKey } from "./theme";

// Builders for Portable Text used by the default content (and the seed script).

let counter = 0;
const key = () => `d${(counter++).toString(36)}`;

export function paragraph(text: string, style: "normal" | "note" = "normal") {
	return {
		_type: "block",
		_key: key(),
		style,
		markDefs: [],
		children: [{ _type: "span", _key: key(), text, marks: [] }],
	} as PortableTextBlock;
}

export const paragraphs = (...texts: string[]) => texts.map((t) => paragraph(t));

export const note = (text: string) => paragraph(text, "note");

export type TableBlock = {
	_type: "table";
	_key: string;
	variant: "columns" | "labelled";
	colour: PaletteKey;
	header?: string[];
	rows: { _type: "tableRow"; _key: string; cells: string[] }[];
};

// "columns": dark header row, bold first column, accent second column.
// "labelled": dark label column on the left, detail on the right.
export function table(
	variant: TableBlock["variant"],
	colour: PaletteKey,
	rows: string[][],
	header?: string[],
) {
	return {
		_type: "table",
		_key: key(),
		variant,
		colour,
		...(header ? { header } : {}),
		rows: rows.map((cells) => ({ _type: "tableRow", _key: key(), cells })),
	} as unknown as PortableTextBlock;
}
