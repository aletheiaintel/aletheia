"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schema, singletonTypes } from "@/sanity/schemaTypes";
import { structure } from "@/sanity/structure";

const singletons = new Set(singletonTypes);
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
	name: "aletheia",
	title: "Aletheia Intelligence",
	basePath: "/studio",
	projectId,
	dataset,
	schema: {
		...schema,
		// Page documents are edited, never created or duplicated.
		templates: (templates) =>
			templates.filter(({ schemaType }) => !singletons.has(schemaType)),
	},
	document: {
		actions: (input, context) =>
			singletons.has(context.schemaType)
				? input.filter(({ action }) => action && singletonActions.has(action))
				: input,
		newDocumentOptions: (prev, { creationContext }) =>
			creationContext.type === "global"
				? prev.filter((item) => !singletons.has(item.templateId))
				: prev,
	},
	plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
