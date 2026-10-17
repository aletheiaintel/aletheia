import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQs";
import Hero from "@/components/sections/Hero";
import Methodology from "@/components/sections/Methodology";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import { pageMetadata } from "@/lib/seo";
import { getHomePage, getSiteSettings } from "@/sanity/content";

// Uses the Home Page SEO fields, falling back to the default SEO in Site Settings.
export async function generateMetadata(): Promise<Metadata> {
	const { seo } = await getHomePage();
	return pageMetadata({ path: "/", seo, isHome: true });
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
