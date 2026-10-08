import { MetadataRoute } from "next";

const SITE_URL = "https://www.aletheiaintl.com";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/studio",
		},
		sitemap: `${SITE_URL}/sitemap.xml`,
	};
}
