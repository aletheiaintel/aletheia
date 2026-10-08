import { cache } from "react";

import {
	defaultAbout,
	defaultFaqPage,
	defaultHome,
	defaultSettings,
} from "@/content/defaults";
import type { AboutPage, FaqPage, HomePage, SiteSettings } from "@/content/types";
import { client } from "./client";
import { PAGE_QUERY, SETTINGS_QUERY } from "./queries";

// Every fetch is tagged "sanity" so /api/revalidate can refresh the whole site
// the moment content is published. The hourly revalidate is only a safety net.
// Locally there is no webhook, so skip the cache and show edits on refresh.
const fetchOptions =
	process.env.NODE_ENV === "development"
		? { cache: "no-store" as const }
		: { next: { revalidate: 3600, tags: ["sanity"] } };

const isEmpty = (value: unknown) =>
	value === null ||
	value === undefined ||
	value === "" ||
	(Array.isArray(value) && value.length === 0);

const isObject = (value: unknown): value is Record<string, unknown> =>
	typeof value === "object" && value !== null && !Array.isArray(value);

// Uses each Sanity value when it is filled in and the original copy when it is
// empty, so a half-finished document can never blank out part of the site.
export function withFallback<T>(data: unknown, fallback: T): T {
	if (isEmpty(data)) return fallback;
	if (Array.isArray(fallback)) return (Array.isArray(data) ? data : fallback) as T;
	if (isObject(fallback)) {
		if (!isObject(data)) return fallback;
		const merged: Record<string, unknown> = { ...data };
		for (const key of Object.keys(fallback)) {
			merged[key] = withFallback(data[key], fallback[key]);
		}
		return merged as T;
	}
	return (typeof data === typeof fallback ? data : fallback) as T;
}

async function fetchDocument(query: string, params: Record<string, string> = {}) {
	return client.fetch(query, params, fetchOptions).catch((error) => {
		console.error("Sanity fetch failed, using default content.", error);
		return null;
	});
}

export const getSiteSettings = cache(
	async (): Promise<SiteSettings> =>
		withFallback(await fetchDocument(SETTINGS_QUERY), defaultSettings),
);

export const getHomePage = cache(
	async (): Promise<HomePage> =>
		withFallback(await fetchDocument(PAGE_QUERY, { id: "homePage" }), defaultHome),
);

export const getAboutPage = cache(
	async (): Promise<AboutPage> =>
		withFallback(await fetchDocument(PAGE_QUERY, { id: "aboutPage" }), defaultAbout),
);

export const getFaqPage = cache(
	async (): Promise<FaqPage> =>
		withFallback(await fetchDocument(PAGE_QUERY, { id: "faqPage" }), defaultFaqPage),
);
