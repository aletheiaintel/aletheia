import { defineQuery } from "next-sanity";

export const PAGE_QUERY = defineQuery(`*[_id == $id][0]`);

export const SETTINGS_QUERY = defineQuery(`*[_id == "siteSettings"][0]{
	...,
	"seo": seo{ title, description, "ogImageUrl": ogImage.asset->url }
}`);
