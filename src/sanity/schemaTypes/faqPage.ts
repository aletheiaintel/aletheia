import { defineArrayMember, defineField, defineType } from "sanity";
import { colourField, headlineField } from "./fields";

export const faqPage = defineType({
	name: "faqPage",
	title: "FAQ Page",
	type: "document",
	groups: [
		{ name: "content", title: "Questions", default: true },
		{ name: "hero", title: "Hero" },
		{ name: "cta", title: "Call to action" },
		{ name: "seo", title: "SEO" },
	],
	fields: [
		defineField({
			name: "hero",
			title: "Hero",
			type: "object",
			group: "hero",
			fields: [
				defineField({ name: "eyebrow", title: "Small heading", type: "string" }),
				headlineField("headline", "Headline"),
				defineField({ name: "intro", title: "Intro", type: "text", rows: 3 }),
			],
		}),
		defineField({
			name: "sections",
			title: "Sections",
			description:
				"Each section gets a jump link in the hero. Every question here is also published to Google as FAQ structured data.",
			type: "array",
			group: "content",
			of: [
				defineArrayMember({
					type: "object",
					name: "faqSection",
					fields: [
						defineField({ name: "title", title: "Section title", type: "string", validation: (r) => r.required() }),
						defineField({ name: "intro", title: "Section intro", type: "string" }),
						colourField(),
						defineField({
							name: "items",
							title: "Questions",
							type: "array",
							of: [defineArrayMember({ type: "faqItem" })],
						}),
					],
					preview: {
						select: { title: "title", items: "items" },
						prepare: ({ title, items }) => ({
							title,
							subtitle: `${items?.length ?? 0} questions`,
						}),
					},
				}),
			],
		}),
		defineField({ name: "cta", title: "Call to action", type: "cta", group: "cta" }),
		defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),
	],
	preview: { prepare: () => ({ title: "FAQ Page" }) },
});
