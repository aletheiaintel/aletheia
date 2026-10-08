// Project ID and dataset are public values; the env vars let another project or dataset be swapped in.
export const projectId =
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "x5q8hssf";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const apiVersion =
	process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-10-01";
