import type { PortableTextBlock } from "next-sanity";
import type { PaletteKey } from "./theme";

// Headlines use a light convention: *words* render as the gold italic accent and
// each new line in the field becomes a line break.
export type Headline = string;

export type RichText = PortableTextBlock[];

export type LinkItem = { label: string; href: string };

export type Seo = { title?: string; description?: string };

export type Cta = {
	eyebrow: string;
	headline: Headline;
	body: string;
	buttonLabel: string;
	buttonHref: string;
};

export type FaqLinkContent = { lead: string; label: string };

export type Stat = { value: string; label: string };

export type FaqItem = { question: string; answer: RichText; highlight?: string };

export type Principle = { title: string; description: string; colour: PaletteKey };

export type SiteSettings = {
	tagline: string[];
	headerLinks: LinkItem[];
	headerCta: LinkItem;
	footerBlurb: string;
	footerLinks: LinkItem[];
	footerCta: LinkItem;
	footerSignature: string;
	copyrightName: string;
	contactEmail: string;
	websiteLabel: string;
	websiteUrl: string;
	enquiryRecipient: string;
	stats: Stat[];
	seo: { title: string; description: string; ogImageUrl?: string };
};

export type Service = {
	title: string;
	subtitle: string;
	description: string;
	deliverable: string;
	tags: string[];
	icon: string;
	colour: PaletteKey;
};

export type Phase = {
	title: string;
	description: string;
	detail: string;
	colour: PaletteKey;
};

export type Testimonial = {
	quote: string;
	author: string;
	role: string;
	company: string;
	service: string;
	colour: PaletteKey;
};

export type FaqGroup = { title: string; colour: PaletteKey; items: FaqItem[] };

export type HomePage = {
	seo: Seo;
	hero: {
		headline: Headline;
		typedWords: string[];
		body: string;
		primaryCta: LinkItem;
		secondaryCta: LinkItem;
	};
	services: {
		eyebrow: string;
		headline: Headline;
		intro: string;
		items: Service[];
		faqLink: FaqLinkContent;
		cta: Cta;
	};
	methodology: {
		eyebrow: string;
		headline: Headline;
		phases: Phase[];
		quote: Headline;
		quoteAttribution: string;
	};
	testimonials: {
		eyebrow: string;
		headline: Headline;
		intro: string;
		items: Testimonial[];
	};
	faq: {
		eyebrow: string;
		headline: Headline;
		intro: string;
		groups: FaqGroup[];
		faqLink: FaqLinkContent;
		cta: Cta;
	};
	contact: {
		eyebrow: string;
		headline: Headline;
		body: string;
		tags: string[];
		serviceOptions: string[];
		formNote: string;
		successTitle: string;
		successBody: string;
	};
};

export type AboutPage = {
	seo: Seo;
	hero: { eyebrow: string; headline: Headline; body: string };
	ticker: string[];
	mission: {
		eyebrow: string;
		headline: Headline;
		etymology: { label: string; word: string; meaning: string; definition: string };
		intro: string;
		paragraphs: string[];
	};
	vision: {
		eyebrow: string;
		keywords: string[];
		headline: Headline;
		paragraphs: string[];
	};
	story: { quote: Headline; attribution: string; paragraphs: Headline[] };
	values: { eyebrow: string; headline: Headline; items: Principle[] };
	commitments: {
		eyebrow: string;
		headline: Headline;
		intro: string;
		items: Principle[];
	};
	expertise: {
		eyebrow: string;
		headline: Headline;
		industriesTitle: string;
		industries: string[];
		industriesNote: string;
		methodologiesTitle: string;
		methodologies: string[];
	};
	cta: Cta;
	faqLink: FaqLinkContent;
};

export type FaqSection = {
	title: string;
	intro: string;
	colour: PaletteKey;
	items: FaqItem[];
};

export type FaqPage = {
	seo: Seo;
	hero: { eyebrow: string; headline: Headline; intro: string };
	sections: FaqSection[];
	cta: Cta;
};
