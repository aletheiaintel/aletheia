import { defineField } from "sanity";
import { PALETTE_OPTIONS } from "@/content/theme";

// Field helpers shared by every page so the same conventions apply everywhere.

type Extra = { group?: string; description?: string };

export const headlineField = (name: string, title: string, extra: Extra = {}) =>
	defineField({
		name,
		title,
		type: "text",
		rows: 3,
		description:
			extra.description ??
			"Wrap words in *asterisks* to show them in gold italics. Press Enter to start a new line.",
		group: extra.group,
	});

export const colourField = (extra: Extra = {}) =>
	defineField({
		name: "colour",
		title: "Colour",
		type: "string",
		options: { list: PALETTE_OPTIONS, layout: "radio", direction: "horizontal" },
		initialValue: "gold",
		...extra,
	});

export const stringList = (name: string, title: string, extra: Extra = {}) =>
	defineField({
		name,
		title,
		type: "array",
		of: [{ type: "string" }],
		...extra,
	});

export const textList = (name: string, title: string, extra: Extra = {}) =>
	defineField({
		name,
		title,
		type: "array",
		of: [{ type: "text", rows: 4 }],
		...extra,
	});
