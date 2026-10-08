import { defineArrayMember, defineField, defineType } from "sanity";
import { SERVICE_ICONS } from "@/content/theme";
import { colourField, headlineField, stringList } from "./fields";

export const homePage = defineType({
	name: "homePage",
	title: "Home Page",
	type: "document",
	groups: [
		{ name: "hero", title: "Hero", default: true },
		{ name: "services", title: "Services" },
		{ name: "methodology", title: "Methodology" },
		{ name: "testimonials", title: "Client Results" },
		{ name: "faq", title: "FAQ" },
		{ name: "contact", title: "Contact" },
		{ name: "seo", title: "SEO" },
	],
	fields: [
		defineField({
			name: "hero",
			title: "Hero",
			type: "object",
			group: "hero",
			fields: [
				headlineField("headline", "Headline", {
					description:
						"The rotating words below are typed out at the end of this headline. Press Enter to start a new line.",
				}),
				stringList("typedWords", "Rotating words"),
				defineField({ name: "body", title: "Text under the headline", type: "text", rows: 3 }),
				defineField({ name: "primaryCta", title: "Main button", type: "link" }),
				defineField({ name: "secondaryCta", title: "Second button", type: "link" }),
			],
		}),

		defineField({
			name: "services",
			title: "Services",
			type: "object",
			group: "services",
			fields: [
				defineField({ name: "eyebrow", title: "Small heading", type: "string" }),
				headlineField("headline", "Headline"),
				defineField({ name: "intro", title: "Intro", type: "text", rows: 3 }),
				defineField({
					name: "items",
					title: "Services",
					description: "Drag to reorder. Each service becomes a card here and a link in the footer.",
					type: "array",
					of: [
						defineArrayMember({
							type: "object",
							name: "service",
							fields: [
								defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
								defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
								defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
								defineField({ name: "deliverable", title: "Deliverable", type: "string" }),
								stringList("tags", "Tags"),
								defineField({
									name: "icon",
									title: "Icon",
									type: "string",
									options: { list: [...SERVICE_ICONS] },
									initialValue: "FlaskConical",
								}),
								colourField(),
							],
							preview: { select: { title: "title", subtitle: "subtitle" } },
						}),
					],
				}),
				defineField({ name: "faqLink", title: "Link to the FAQ (under the services)", type: "faqLink" }),
				defineField({ name: "cta", title: "Call to action", type: "cta" }),
			],
		}),

		defineField({
			name: "methodology",
			title: "Methodology",
			type: "object",
			group: "methodology",
			fields: [
				defineField({ name: "eyebrow", title: "Small heading", type: "string" }),
				headlineField("headline", "Headline"),
				defineField({
					name: "phases",
					title: "Phases",
					description: "Numbered automatically in the order shown.",
					type: "array",
					of: [
						defineArrayMember({
							type: "object",
							name: "phase",
							fields: [
								defineField({ name: "title", title: "Title", type: "string" }),
								defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
								defineField({ name: "detail", title: "Detail line", type: "string" }),
								colourField(),
							],
							preview: { select: { title: "title", subtitle: "detail" } },
						}),
					],
				}),
				headlineField("quote", "Quote"),
				defineField({ name: "quoteAttribution", title: "Quote attribution", type: "string" }),
			],
		}),

		defineField({
			name: "testimonials",
			title: "Client Results",
			type: "object",
			group: "testimonials",
			description: "The stats row in this section comes from Site Settings.",
			fields: [
				defineField({ name: "eyebrow", title: "Small heading", type: "string" }),
				headlineField("headline", "Headline"),
				defineField({ name: "intro", title: "Intro", type: "text", rows: 2 }),
				defineField({
					name: "items",
					title: "Testimonials",
					type: "array",
					of: [
						defineArrayMember({
							type: "object",
							name: "testimonial",
							fields: [
								defineField({ name: "quote", title: "Quote", type: "text", rows: 4 }),
								defineField({ name: "author", title: "Author", type: "string" }),
								defineField({ name: "role", title: "Role", type: "string" }),
								defineField({ name: "company", title: "Company", type: "string" }),
								defineField({ name: "service", title: "Service badge", type: "string" }),
								colourField(),
							],
							preview: { select: { title: "author", subtitle: "quote" } },
						}),
					],
				}),
			],
		}),

		defineField({
			name: "faq",
			title: "FAQ",
			type: "object",
			group: "faq",
			fields: [
				defineField({ name: "eyebrow", title: "Small heading", type: "string" }),
				headlineField("headline", "Headline"),
				defineField({ name: "intro", title: "Intro", type: "text", rows: 2 }),
				defineField({
					name: "groups",
					title: "Question groups",
					type: "array",
					of: [
						defineArrayMember({
							type: "object",
							name: "faqGroup",
							fields: [
								defineField({ name: "title", title: "Group title", type: "string" }),
								colourField(),
								defineField({
									name: "items",
									title: "Questions",
									type: "array",
									of: [defineArrayMember({ type: "faqItem" })],
								}),
							],
							preview: { select: { title: "title" } },
						}),
					],
				}),
				defineField({ name: "faqLink", title: "Link to the FAQ page", type: "faqLink" }),
				defineField({ name: "cta", title: "Call to action", type: "cta" }),
			],
		}),

		defineField({
			name: "contact",
			title: "Contact",
			type: "object",
			group: "contact",
			description: "The email and website shown here come from Site Settings.",
			fields: [
				defineField({ name: "eyebrow", title: "Small heading", type: "string" }),
				headlineField("headline", "Headline"),
				defineField({ name: "body", title: "Text", type: "text", rows: 3 }),
				stringList("tags", "Tags"),
				stringList("serviceOptions", "Form: \"I'm interested in\" options"),
				defineField({ name: "formNote", title: "Form: note under the button", type: "string" }),
				defineField({ name: "successTitle", title: "Form: success heading", type: "string" }),
				defineField({ name: "successBody", title: "Form: success message", type: "text", rows: 2 }),
			],
		}),

		defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" }),
	],
	preview: { prepare: () => ({ title: "Home Page" }) },
});
