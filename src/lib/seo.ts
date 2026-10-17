import type { Metadata } from "next";
import type { Seo } from "@/content/types";
import { getSiteSettings } from "@/sanity/content";
import { absoluteUrl } from "./site";

export { SITE_URL, absoluteUrl } from "./site";

export const SITE_NAME = "Aletheia Intelligence";

// Title, description, canonical, Open Graph and Twitter tags for a page, all from
// the same CMS fields so social previews always match the search listing.
export async function pageMetadata({
	path,
	seo,
	isHome = false,
	card = "summary_large_image",
}: {
	path: string;
	seo: Seo;
	isHome?: boolean;
	card?: "summary" | "summary_large_image";
}): Promise<Metadata> {
	const settings = await getSiteSettings();
	const pageTitle = seo.title?.trim() || settings.seo.title.trim();
	const description = seo.description?.trim() || settings.seo.description.trim();
	const fullTitle = isHome ? pageTitle : `${pageTitle} | ${SITE_NAME}`;
	const url = absoluteUrl(path);
	const image = settings.seo.ogImageUrl;

	return {
		// Next.js shortens a root URL resolved against metadataBase to the bare
		// origin; every URL here is already absolute, so the homepage skips it to
		// keep the trailing slash on https://www.aletheiaintl.com/.
		...(isHome ? { metadataBase: null } : {}),
		title: isHome ? { absolute: pageTitle } : pageTitle,
		description,
		openGraph: {
			type: "website",
			locale: "en_US",
			siteName: SITE_NAME,
			url,
			title: fullTitle,
			description,
			...(image ? { images: [{ url: image, alt: SITE_NAME }] } : {}),
		},
		twitter: {
			card,
			title: fullTitle,
			description,
			...(image ? { images: [image] } : {}),
		},
		alternates: { canonical: url },
	};
}
