import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"Aletheia Intelligence is a full-spectrum strategy and market intelligence firm built on radical honesty and rigorous methodology. We exist to uncover the truth of your market before you build, launch, or commit.",
	openGraph: {
		title: "About Us | Aletheia Intelligence",
		description:
			"We exist to uncover the truth of your market before you build, launch, or commit. Learn our story, mission, and vision.",
		url: "https://www.aletheiaintl.com/about-us",
	},
	alternates: {
		canonical: "https://www.aletheiaintl.com/about-us",
	},
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
