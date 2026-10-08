import { defineArrayMember, defineField, defineType } from "sanity";
import { headlineField, stringList, textList } from "./fields";

const section = (name: string, title: string, group: string, fields: ReturnType<typeof defineField>[]) =>
	defineField({ name, title, type: "object", group, fields });

const eyebrow = defineField({ name: "eyebrow", title: "Small heading", type: "string" });

export const aboutPage = defineType({
	name: "aboutPage",
	title: "About Page",
	type: "document",
	groups: [
		{ name: "hero", title: "Hero", default: true },
		{ name: "mission", title: "Mission & Vision" },
		{ name: "story", title: "Story" },
		{ name: "principles", title: "Principles & Commitments" },
		{ name: "expertise", title: "Expertise" },
		{ name: "cta", title: "Call to action" },
		{ name: "seo", title: "SEO" },
	],
	fields: [
		section("hero", "Hero", "hero", [
			eyebrow,
			headlineField("headline", "Headline"),
			defineField({ name: "body", title: "Text", type: "text", rows: 4 }),
		]),
		stringList("ticker", "Scrolling gold banner", { group: "hero" }),

		section("mission", "Mission", "mission", [
			eyebrow,
			headlineField("headline", "Headline"),
			defineField({
				name: "etymology",
				title: "Name card",
				type: "object",
				fields: [
					defineField({ name: "label", title: "Label", type: "string" }),
					defineField({ name: "word", title: "Word", type: "string" }),
					defineField({ name: "meaning", title: "Meaning", type: "string" }),
					defineField({ name: "definition", title: "Definition", type: "text", rows: 3 }),
				],
			}),
			defineField({ name: "intro", title: "Text under the name card", type: "text", rows: 3 }),
			textList("paragraphs", "Paragraphs (right column)"),
		]),
		section("vision", "Vision", "mission", [
			eyebrow,
			stringList("keywords", "Keywords"),
			headlineField("headline", "Headline"),
			textList("paragraphs", "Paragraphs"),
		]),

		section("story", "Founding story", "story", [
			headlineField("quote", "Quote"),
			defineField({ name: "attribution", title: "Quote attribution", type: "string" }),
			textList("paragraphs", "Paragraphs", {
				description: "Wrap words in *asterisks* to italicise them.",
			}),
		]),

		section("values", "Principles", "principles", [
			eyebrow,
			headlineField("headline", "Headline"),
			defineField({
				name: "items",
				title: "Principles",
				type: "array",
				of: [defineArrayMember({ type: "principle" })],
			}),
		]),
		section("commitments", "Commitments", "principles", [
			eyebrow,
			headlineField("headline", "Headline"),
			defineField({ name: "intro", title: "Intro", type: "text", rows: 3 }),
			defineField({
				name: "items",
				title: "Commitments",
				type: "array",
				of: [defineArrayMember({ type: "principle" })],
			}),
		]),

		section("expertise", "Domain expertise", "expertise", [
			eyebrow,
			headlineField("headline", "Headline"),
			defineField({ name: "industriesTitle", title: "Industries card title", type: "string" }),
			stringList("industries", "Industries"),
			defineField({ name: "industriesNote", title: "Note under the industries", type: "string" }),
			defineField({ name: "methodologiesTitle", title: "Methodologies card title", type: "string" }),
			stringList("methodologies", "Methodologies"),
		]),

		defineField({
			name: "cta",
			title: "Call to action",
			description: "The stats above this section come from Site Settings.",
			type: "cta",
			group: "cta",
		}),
		defineField({ name: "faqLink", title: "Link to the FAQ page", type: "faqLink", group: "cta" }),

		defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),
	],
	preview: { prepare: () => ({ title: "About Page" }) },
});
