import { defineArrayMember, defineField, defineType } from "sanity";
import { colourField, headlineField } from "../fields";

export const link = defineType({
	name: "link",
	title: "Link",
	type: "object",
	fields: [
		defineField({ name: "label", title: "Label", type: "string" }),
		defineField({
			name: "href",
			title: "Link to",
			type: "string",
			description:
				"A page path such as /faq, a homepage section such as /#contact, or a full URL.",
		}),
	],
	preview: { select: { title: "label", subtitle: "href" } },
});

export const cta = defineType({
	name: "cta",
	title: "Call to action",
	type: "object",
	fields: [
		defineField({ name: "eyebrow", title: "Small heading", type: "string" }),
		headlineField("headline", "Headline"),
		defineField({ name: "body", title: "Text", type: "text", rows: 3 }),
		defineField({ name: "buttonLabel", title: "Button label", type: "string" }),
		defineField({
			name: "buttonHref",
			title: "Button link",
			type: "string",
			description: "For example /#contact",
		}),
	],
});

export const faqLink = defineType({
	name: "faqLink",
	title: "Link to the FAQ page",
	type: "object",
	fields: [
		defineField({
			name: "lead",
			title: "Lead-in text",
			type: "string",
			description: "For example: Have questions about how this works?",
		}),
		defineField({ name: "label", title: "Link text", type: "string" }),
	],
});

export const seo = defineType({
	name: "seo",
	title: "SEO",
	type: "object",
	options: { collapsible: true, collapsed: false },
	fields: [
		defineField({
			name: "title",
			title: "Page title",
			type: "string",
			description:
				"Shown in Google and the browser tab. \"| Aletheia Intelligence\" is added automatically.",
		}),
		defineField({
			name: "description",
			title: "Meta description",
			type: "text",
			rows: 3,
			description: "The summary Google shows under the title. Aim for 150 to 160 characters.",
			validation: (rule) => rule.max(200).warning("Google usually cuts this off around 160 characters."),
		}),
	],
});

export const stat = defineType({
	name: "stat",
	title: "Stat",
	type: "object",
	fields: [
		defineField({ name: "value", title: "Value", type: "string", description: "For example 10+ or 100%" }),
		defineField({ name: "label", title: "Label", type: "string" }),
	],
	preview: { select: { title: "value", subtitle: "label" } },
});

export const principle = defineType({
	name: "principle",
	title: "Card",
	type: "object",
	fields: [
		defineField({ name: "title", title: "Title", type: "string" }),
		defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
		colourField(),
	],
	preview: { select: { title: "title", subtitle: "description" } },
});

export const table = defineType({
	name: "table",
	title: "Table",
	type: "object",
	fields: [
		defineField({
			name: "variant",
			title: "Layout",
			type: "string",
			options: {
				list: [
					{ title: "Columns with a header row", value: "columns" },
					{ title: "Label on the left, detail on the right", value: "labelled" },
				],
				layout: "radio",
			},
			initialValue: "columns",
		}),
		colourField({ description: "Used for the highlighted column." }),
		defineField({
			name: "header",
			title: "Header row",
			type: "array",
			of: [{ type: "string" }],
			hidden: ({ parent }) => parent?.variant === "labelled",
		}),
		defineField({
			name: "rows",
			title: "Rows",
			type: "array",
			of: [
				defineArrayMember({
					type: "object",
					name: "tableRow",
					title: "Row",
					fields: [
						defineField({
							name: "cells",
							title: "Cells",
							type: "array",
							of: [{ type: "text", rows: 2 }],
						}),
					],
					preview: {
						select: { first: "cells.0", second: "cells.1" },
						prepare: ({ first, second }) => ({ title: first, subtitle: second }),
					},
				}),
			],
		}),
	],
	preview: {
		select: { first: "rows.0.cells.0" },
		prepare: ({ first }) => ({ title: "Table", subtitle: first }),
	},
});

export const richText = defineType({
	name: "richText",
	title: "Rich text",
	type: "array",
	of: [
		defineArrayMember({
			type: "block",
			styles: [
				{ title: "Normal", value: "normal" },
				{ title: "Muted note (italic)", value: "note" },
			],
			lists: [
				{ title: "Bullet", value: "bullet" },
				{ title: "Numbered", value: "number" },
			],
			marks: {
				decorators: [
					{ title: "Bold", value: "strong" },
					{ title: "Italic", value: "em" },
				],
				annotations: [
					defineArrayMember({
						name: "link",
						type: "object",
						title: "Link",
						fields: [defineField({ name: "href", title: "URL", type: "string" })],
					}),
				],
			},
		}),
		defineArrayMember({ type: "table" }),
	],
});

export const faqItem = defineType({
	name: "faqItem",
	title: "Question",
	type: "object",
	fields: [
		defineField({
			name: "question",
			title: "Question",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({ name: "answer", title: "Answer", type: "richText" }),
		defineField({
			name: "highlight",
			title: "Highlighted closing line (optional)",
			type: "text",
			rows: 3,
			description: "Shown under the answer with a coloured bar beside it.",
		}),
	],
	preview: { select: { title: "question" } },
});

export const objectTypes = [link, cta, faqLink, seo, stat, principle, table, richText, faqItem];
