import type { StructureResolver } from "sanity/structure";
import { CircleHelp, Home, Info, Settings } from "lucide-react";

const singleton = (
	S: Parameters<StructureResolver>[0],
	type: string,
	title: string,
	icon: React.ComponentType,
) =>
	S.listItem()
		.title(title)
		.id(type)
		.icon(icon)
		.child(S.document().schemaType(type).documentId(type).title(title));

export const structure: StructureResolver = (S) =>
	S.list()
		.title("Content")
		.items([
			singleton(S, "homePage", "Home Page", Home),
			singleton(S, "aboutPage", "About Page", Info),
			singleton(S, "faqPage", "FAQ Page", CircleHelp),
			S.divider(),
			singleton(S, "siteSettings", "Site Settings", Settings),
		]);
