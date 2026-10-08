import type { SchemaTypeDefinition } from "sanity";

import { objectTypes } from "./objects";
import { siteSettings } from "./siteSettings";
import { homePage } from "./homePage";
import { aboutPage } from "./aboutPage";
import { faqPage } from "./faqPage";

export const singletonTypes = ["homePage", "aboutPage", "faqPage", "siteSettings"];

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [...objectTypes, homePage, aboutPage, faqPage, siteSettings],
};
