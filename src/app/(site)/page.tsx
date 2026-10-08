import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQs";
import Hero from "@/components/sections/Hero";
import Methodology from "@/components/sections/Methodology";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import { getHomePage, getSiteSettings } from "@/sanity/content";

// The site-wide SEO in Site Settings covers the homepage; the Home Page's own
// SEO fields override it when filled in.
export async function generateMetadata(): Promise<Metadata> {
	const { seo } = await getHomePage();
	if (!seo.title && !seo.description) return {};
	return {
		...(seo.title ? { title: { absolute: seo.title } } : {}),
		...(seo.description ? { description: seo.description } : {}),
	};
}

export default async function Home() {
	const [home, settings] = await Promise.all([getHomePage(), getSiteSettings()]);

	return (
		<main className="h-auto w-full flex flex-col">
			<Hero
				content={home.hero}
				tagline={settings.tagline}
				stats={settings.stats}
			/>
			<Services content={home.services} />
			<Methodology content={home.methodology} />
			<Testimonials content={home.testimonials} stats={settings.stats} />
			<FAQ content={home.faq} />
			<Contact
				content={home.contact}
				tagline={settings.tagline}
				email={settings.contactEmail}
				websiteLabel={settings.websiteLabel}
				websiteUrl={settings.websiteUrl}
			/>
		</main>
	);
}
