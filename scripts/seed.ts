/**
 * Uploads the site's original copy (src/content/defaults.ts) into Sanity.
 *
 *   npx sanity login                                   (once)
 *   npm run seed                                       (fills missing documents only)
 *   npm run seed:replace                               (overwrites all four documents)
 *
 * Without --replace it never touches a document that already exists, so it is
 * safe to re-run after the client has started editing.
 */
import { randomUUID } from "node:crypto";
import { getCliClient } from "sanity/cli";

import {
	defaultAbout,
	defaultFaqPage,
	defaultHome,
	defaultSettings,
} from "../src/content/defaults";

const client = getCliClient({ apiVersion: "2025-10-01" });
const replace = process.argv.includes("--replace");
const dryRun = process.argv.includes("--dry-run");

const key = () => randomUUID().slice(0, 12);

// Sanity needs a _type and _key on every object inside an array.
const items = <T extends object>(type: string, list: T[]) =>
	list.map((item) => ({ _type: type, _key: key(), ...item }));

const faqItems = (list: typeof defaultFaqPage.sections[number]["items"]) =>
	items(
		"faqItem",
		list.map((item) => ({
			...item,
			answer: item.answer.map((block) => ({ ...block, _key: key() })),
		})),
	);

const { seo: settingsSeo, ...settings } = defaultSettings;

type SeedDocument = { _id: string; _type: string; [field: string]: unknown };

const documents: SeedDocument[] = [
	{
		_id: "siteSettings",
		_type: "siteSettings",
		...settings,
		headerLinks: items("link", settings.headerLinks),
		footerLinks: items("link", settings.footerLinks),
		stats: items("stat", settings.stats),
		seo: { title: settingsSeo.title, description: settingsSeo.description },
	},
	{
		_id: "homePage",
		_type: "homePage",
		...defaultHome,
		seo: { _type: "seo" },
		services: {
			...defaultHome.services,
			items: items("service", defaultHome.services.items),
		},
		methodology: {
			...defaultHome.methodology,
			phases: items("phase", defaultHome.methodology.phases),
		},
		testimonials: {
			...defaultHome.testimonials,
			items: items("testimonial", defaultHome.testimonials.items),
		},
		faq: {
			...defaultHome.faq,
			groups: items(
				"faqGroup",
				defaultHome.faq.groups.map((group) => ({
					...group,
					items: faqItems(group.items),
				})),
			),
		},
	},
	{
		_id: "aboutPage",
		_type: "aboutPage",
		...defaultAbout,
		values: {
			...defaultAbout.values,
			items: items("principle", defaultAbout.values.items),
		},
		commitments: {
			...defaultAbout.commitments,
			items: items("principle", defaultAbout.commitments.items),
		},
	},
	{
		_id: "faqPage",
		_type: "faqPage",
		...defaultFaqPage,
		sections: items(
			"faqSection",
			defaultFaqPage.sections.map((section) => ({
				...section,
				items: faqItems(section.items),
			})),
		),
	},
];

async function seed() {
	const { projectId, dataset } = client.config();
	console.log(`Seeding ${projectId}/${dataset}${replace ? " (replacing existing documents)" : ""}`);

	if (dryRun) {
		for (const doc of documents) console.log(JSON.stringify(doc).length, "bytes", doc._id);
		return;
	}

	const transaction = client.transaction();
	for (const doc of documents) {
		if (replace) transaction.createOrReplace(doc);
		else transaction.createIfNotExists(doc);
	}
	await transaction.commit();

	for (const doc of documents) console.log(`  ✓ ${doc._id}`);
	console.log("Done.");
}

seed().catch((error) => {
	console.error(error);
	process.exit(1);
});
