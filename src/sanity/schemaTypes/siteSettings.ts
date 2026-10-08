import { defineArrayMember, defineField, defineType } from "sanity";
import { stringList } from "./fields";

export const siteSettings = defineType({
	name: "siteSettings",
	title: "Site Settings",
	type: "document",
	groups: [
		{ name: "header", title: "Header", default: true },
		{ name: "footer", title: "Footer" },
		{ name: "contact", title: "Contact details" },
		{ name: "brand", title: "Brand & stats" },
		{ name: "seo", title: "Default SEO" },
	],
	fields: [
		defineField({
			name: "headerLinks",
			title: "Header links",
			type: "array",
			of: [defineArrayMember({ type: "link" })],
			group: "header",
		}),
		defineField({ name: "headerCta", title: "Header button", type: "link", group: "header" }),

		defineField({
			name: "footerBlurb",
			title: "Footer description",
			type: "text",
			rows: 3,
			group: "footer",
		}),
		defineField({
			name: "footerLinks",
			title: "Footer navigation links",
			description: "The footer's Services column lists the services from the Home Page automatically.",
			type: "array",
			of: [defineArrayMember({ type: "link" })],
			group: "footer",
		}),
		defineField({ name: "footerCta", title: "Footer button", type: "link", group: "footer" }),
		defineField({ name: "footerSignature", title: "Footer signature line", type: "string", group: "footer" }),
		defineField({
			name: "copyrightName",
			title: "Copyright name",
			description: "Shown as © <year> <name>. All rights reserved.",
			type: "string",
			group: "footer",
		}),

		defineField({
			name: "contactEmail",
			title: "Contact email",
			type: "string",
			validation: (rule) => rule.email(),
			group: "contact",
		}),
		defineField({ name: "websiteLabel", title: "Website (as displayed)", type: "string", group: "contact" }),
		defineField({ name: "websiteUrl", title: "Website URL", type: "url", group: "contact" }),
		defineField({
			name: "enquiryRecipient",
			title: "Contact form recipient",
			description: "Discovery call requests from the contact form are emailed here.",
			type: "string",
			validation: (rule) => rule.email(),
			group: "contact",
		}),

		stringList("tagline", "Tagline words", {
			group: "brand",
			description: "Shown in the badges on the homepage, separated by gold dots.",
		}),
		defineField({
			name: "stats",
			title: "Stats",
			description:
				"Used on the homepage (floating cards and Client Results) and the About page. The homepage floating cards show the first four.",
			type: "array",
			of: [defineArrayMember({ type: "stat" })],
			group: "brand",
		}),

		defineField({
			name: "seo",
			title: "Default SEO",
			description: "Used for the homepage and for any page without its own SEO.",
			type: "object",
			group: "seo",
			fields: [
				defineField({ name: "title", title: "Site title", type: "string" }),
				defineField({ name: "description", title: "Meta description", type: "text", rows: 3 }),
				defineField({
					name: "ogImage",
					title: "Social share image",
					description: "Shown when a link to the site is shared. 1200 × 630 works best.",
					type: "image",
				}),
			],
		}),
	],
	preview: { prepare: () => ({ title: "Site Settings" }) },
});
