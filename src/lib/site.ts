export const SITE_URL = "https://www.aletheiaintl.com";

// Every URL the site declares uses https://www.aletheiaintl.com/ (homepage keeps
// the trailing slash).
export function absoluteUrl(path = "/") {
	return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

// Points any aletheiaintl.com address (http, or without www) at the canonical
// https://www. host, whatever is typed into the CMS.
export function canonicalSiteUrl(url: string) {
	try {
		const parsed = new URL(url);
		if (parsed.hostname.replace(/^www\./, "") !== "aletheiaintl.com") return url;
		return absoluteUrl(parsed.pathname + parsed.search + parsed.hash);
	} catch {
		return url;
	}
}
