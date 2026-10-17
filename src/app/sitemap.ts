import { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: absoluteUrl(),
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: absoluteUrl("/about-us"),
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: absoluteUrl("/faq"),
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
	];
}
