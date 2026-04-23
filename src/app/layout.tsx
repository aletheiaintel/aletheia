import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-sans",
});

const SITE_URL = "https://www.aletheiaintl.com";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: "Aletheia Intelligence — Market Research & Strategy Firm",
		template: "%s | Aletheia Intelligence",
	},
	description:
		"Aletheia Intelligence is a full-spectrum market research and strategy firm. We deliver clarity, confidence, and competitive advantage through rigorous intelligence — before you build, launch, or commit.",
	keywords: [
		"market research",
		"market intelligence",
		"business strategy",
		"competitive analysis",
		"market validation",
		"go-to-market strategy",
		"B2B strategy",
		"B2C strategy",
		"Aletheia Intelligence",
	],
	authors: [{ name: "Aletheia Intelligence", url: SITE_URL }],
	creator: "Aletheia Intelligence",
	publisher: "Aletheia Intelligence",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: SITE_URL,
		siteName: "Aletheia Intelligence",
		title: "Aletheia Intelligence — Market Research & Strategy Firm",
		description:
			"Full-spectrum market intelligence and strategy. We uncover the truth of your market before you build, launch, or commit.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Aletheia Intelligence — Truth Revealed",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Aletheia Intelligence — Market Research & Strategy Firm",
		description:
			"Full-spectrum market intelligence and strategy. We uncover the truth of your market before you build, launch, or commit.",
		images: ["/og-image.png"],
	},
	alternates: {
		canonical: SITE_URL,
	},
};

const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Aletheia Intelligence",
	url: SITE_URL,
	logo: `${SITE_URL}/logo.png`,
	description:
		"Full-spectrum market research and strategy firm delivering clarity, confidence, and competitive advantage.",
	contactPoint: {
		"@type": "ContactPoint",
		contactType: "customer service",
		url: `${SITE_URL}/#contact`,
	},
	sameAs: [],
};

const websiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "Aletheia Intelligence",
	url: SITE_URL,
	description:
		"Market research and strategy firm. Truth revealed — before you build, launch, or commit.",
	potentialAction: {
		"@type": "SearchAction",
		target: {
			"@type": "EntryPoint",
			urlTemplate: `${SITE_URL}/?q={search_term_string}`,
		},
		"query-input": "required name=search_term_string",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={cn("h-full antialiased scroll-smooth", poppins.variable)}
		>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationSchema),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(websiteSchema),
					}}
				/>
			</head>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
