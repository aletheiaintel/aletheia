import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { toPlainText } from "next-sanity";
import Headline from "@/components/shared/Headline";
import { ACCENT_GREEN } from "@/data";
import { DOT_DARK, DOT_LIGHT } from "@/lib/patterns";
import { slugify } from "@/lib/utils";
import { getFaqPage } from "@/sanity/content";
import FAQSections from "./FAQSections";

const PAGE_URL = "https://www.aletheiaintl.com/faq";
const OG_IMAGE =
	"https://res.cloudinary.com/dqf3gmp8y/image/upload/v1777043853/BrandLogo_512x512_g28tar.png";

export async function generateMetadata(): Promise<Metadata> {
	const { seo } = await getFaqPage();
	const title = `${seo.title} | Aletheia Intelligence`;
	return {
		title: seo.title,
		description: seo.description,
		openGraph: {
			title,
			description: seo.description,
			url: PAGE_URL,
			images: [{ url: OG_IMAGE, width: 512, height: 512, alt: "Aletheia Intelligence" }],
		},
		twitter: {
			card: "summary",
			title,
			description: seo.description,
			images: [OG_IMAGE],
		},
		alternates: { canonical: PAGE_URL },
	};
}

export default async function FAQPage() {
	const { hero, sections, cta } = await getFaqPage();

	// Built from the same CMS content as the page so the two never drift apart.
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		url: PAGE_URL,
		mainEntity: sections
			.flatMap((section) => section.items)
			.map((item) => ({
				"@type": "Question",
				name: item.question,
				acceptedAnswer: {
					"@type": "Answer",
					text: [toPlainText(item.answer ?? []), item.highlight]
						.filter(Boolean)
						.join("\n\n"),
				},
			})),
	};

	return (
		<div className="min-h-screen flex flex-col bg-[#F5F0E8]">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
				}}
			/>

			{/* ─── HERO ─── */}
			<section className="relative w-full overflow-hidden bg-[#121212] pt-32 pb-20 md:pt-44 md:pb-28">
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.04]"
					style={{
						backgroundImage: DOT_DARK,
						backgroundSize: "180px 180px",
					}}
				/>
				<div
					className="about-orb-1 pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full"
					style={{
						background:
							"radial-gradient(circle, #C9981A 0%, #E8A34A 40%, transparent 70%)",
						opacity: 0.12,
					}}
				/>
				<div
					className="about-orb-2 pointer-events-none absolute -bottom-20 left-[10%] h-72 w-72 rounded-full"
					style={{
						background:
							"radial-gradient(circle, #1A7A4C 0%, transparent 70%)",
						opacity: 0.18,
					}}
				/>

				<div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
					<p
						className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em]"
						style={{ color: ACCENT_GREEN }}
					>
						{hero.eyebrow}
					</p>
					<h1 className="font-serif text-[clamp(44px,6.5vw,92px)] font-light leading-[1.20] tracking-[-0.03em] text-white">
						<Headline text={hero.headline} />
					</h1>
					<div
						className="my-10 h-px"
						style={{
							background:
								"linear-gradient(to right, #C9981A, rgba(201,152,26,0.2), transparent)",
						}}
					/>
					<p className="max-w-xl text-[16px] font-light leading-[1.8] text-white/60">
						{hero.intro}
					</p>

					{/* Section jump links */}
					<nav
						aria-label="FAQ sections"
						className="mt-10 flex flex-wrap gap-2"
					>
						{sections.map((section) => (
							<a
								key={section.title}
								href={`#${slugify(section.title)}`}
								className="rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-[12px] font-light text-white/70 transition-colors duration-200 hover:border-[#F5F0E8] hover:bg-[#F5F0E8] hover:text-[#121212]"
							>
								{section.title}
							</a>
						))}
					</nav>
				</div>
			</section>

			{/* ─── QUESTIONS ─── */}
			<section className="relative w-full overflow-clip bg-[#F5F0E8] py-20 md:py-32">
				<div className="absolute inset-0 opacity-[0.035] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
				<div
					className="absolute inset-0 opacity-[0.04] z-0"
					style={{
						backgroundImage: DOT_LIGHT,
						backgroundSize: "180px 180px",
					}}
				/>

				<div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
					<FAQSections sections={sections} />

					{/* CTA block */}
					<div className="mt-20 md:mt-28">
						<div
							className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center border border-black/[0.07] shadow-[0_4px_40px_rgba(0,0,0,0.06)]"
							style={{
								background:
									"linear-gradient(135deg, #FDFAF5 0%, #F5F0E8 60%, #FFF8F0 100%)",
							}}
						>
							<div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[radial-gradient(circle,#D4E8C2,transparent_70%)] opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
							<div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[radial-gradient(circle,#BAE6FD,transparent_70%)] opacity-40 translate-x-1/2 translate-y-1/2 pointer-events-none" />

							<div className="relative z-10">
								<p
									className="mb-4 text-[11px] tracking-[0.18em] uppercase font-medium"
									style={{ color: ACCENT_GREEN }}
								>
									{cta.eyebrow}
								</p>
								<h2 className="font-serif text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-[#121212] mb-4">
									<Headline text={cta.headline} />
								</h2>
								<p className="text-[15px] text-[#777] font-light mb-8 max-w-sm mx-auto leading-relaxed">
									{cta.body}
								</p>
								<Link
									href={cta.buttonHref}
									className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[10px] md:text-[13px] font-medium tracking-[0.04em] uppercase text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
									style={{ background: "#121212" }}
								>
									<span>{cta.buttonLabel}</span>
									<ArrowRight className="w-4 h-4" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

		</div>
	);
}
