import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";
import { getHomePage, getSiteSettings } from "@/sanity/content";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-sans",
});

const SITE_URL = "https://www.aletheiaintl.com";

export async function generateMetadata(): Promise<Metadata> {
	const { seo } = await getSiteSettings();
	const images = seo.ogImageUrl
		? [
				{
					url: seo.ogImageUrl,
					width: 1200,
					height: 630,
					alt: "Aletheia Intelligence — Truth Revealed",
				},
			]
		: undefined;

	return {
		metadataBase: new URL(SITE_URL),
		title: {
			default: seo.title,
			template: "%s | Aletheia Intelligence",
		},
		description: seo.description,
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
			title: seo.title,
			description: seo.description,
			images,
		},
		twitter: {
			card: "summary_large_image",
			title: seo.title,
			description: seo.description,
			images,
		},
		alternates: {
			canonical: SITE_URL,
		},
	};
}

const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Aletheia Intelligence",
	url: SITE_URL,
	logo: "https://res.cloudinary.com/dqf3gmp8y/image/upload/v1777043853/BrandLogo_512x512_g28tar.png",
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

export default async function SiteLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [settings, home] = await Promise.all([getSiteSettings(), getHomePage()]);
	const serviceTitles = home.services.items.map((service) => service.title);

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
			<body className="min-h-full flex flex-col">
				<Navbar
					variant="dark"
					links={settings.headerLinks}
					cta={settings.headerCta}
				/>
				{children}
				<Footer settings={settings} services={serviceTitles} />
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-GTEYWQD476"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-GTEYWQD476');
					`}
				</Script>
			</body>
		</html>
	);
}
