import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FAQLink from "@/components/shared/FAQLink";
import Headline from "@/components/shared/Headline";
import { colour } from "@/content/theme";
import { getAboutPage, getSiteSettings } from "@/sanity/content";
import { DOT_DARK, DOT_LIGHT, NOISE_BG } from "@/lib/patterns";
import AboutAnimations from "./AboutAnimations";

const PAGE_URL = "https://www.aletheiaintl.com/about-us";
const OG_IMAGE =
	"https://res.cloudinary.com/dqf3gmp8y/image/upload/v1777043853/BrandLogo_512x512_g28tar.png";

export async function generateMetadata(): Promise<Metadata> {
	const { seo } = await getAboutPage();
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

export default async function AboutUs() {
	const [about, settings] = await Promise.all([getAboutPage(), getSiteSettings()]);
	const { hero, mission, vision, story, values, commitments, expertise, cta } = about;

	return (
		<div className="min-h-screen flex flex-col bg-[#F5F0E8]">
			<AboutAnimations />

			{/* ─── HERO ─── */}
			<section className="relative w-full overflow-hidden bg-[#121212] pt-32 pb-20 md:pt-44 md:pb-36">
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
					<p className="about-eyebrow mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-[#1A7A4C] opacity-0">
						{hero.eyebrow}
					</p>
					<div className="about-hero-headline">
						<h1 className="font-serif text-[clamp(44px,6.5vw,92px)] font-light leading-[1.20] tracking-[-0.03em] text-white">
							<Headline text={hero.headline} />
						</h1>
					</div>
					<div
						className="about-hero-rule my-10 h-px origin-left"
						style={{
							background:
								"linear-gradient(to right, #C9981A, rgba(201,152,26,0.2), transparent)",
						}}
					/>
					<p className="about-hero-sub max-w-xl text-[16px] font-light leading-[1.8] text-white/60 opacity-0">
						{hero.body}
					</p>
				</div>
			</section>

			{/* ─── MARQUEE ─── */}
			<div className="relative overflow-hidden bg-[#C9981A] py-3.5">
				<div className="about-marquee-track flex shrink-0 whitespace-nowrap will-change-transform">
					{[...about.ticker, ...about.ticker].map((item, i) => (
						<span
							key={i}
							className="mx-8 inline-flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[#121212]"
						>
							{item}
							<span className="opacity-30">·</span>
						</span>
					))}
				</div>
			</div>

			{/* ─── MISSION (NEW) ─── */}
			<section className="about-mission-new relative w-full overflow-hidden bg-[#0D0D0D] py-20 md:py-44">
				<div className="about-mission-watermark pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-0">
					<span className="select-none font-serif text-[clamp(70px,14vw,200px)] font-light italic text-white/[0.028] tracking-[0.15em]">
						ALETHEIA
					</span>
				</div>
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.04]"
					style={{
						backgroundImage: DOT_DARK,
						backgroundSize: "180px 180px",
					}}
				/>
				<div
					className="about-orb-3 pointer-events-none absolute -left-32 top-[30%] h-80 w-80 rounded-full"
					style={{
						background:
							"radial-gradient(circle, #C9981A 0%, transparent 70%)",
						opacity: 0.07,
					}}
				/>

				<div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
					<div className="about-mission-eyebrow mb-10 flex items-center gap-4 opacity-0">
						<span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#C9981A]">
							{mission.eyebrow}
						</span>
					</div>

					<div className="about-mission-new-headline mb-16 overflow-hidden">
						<h2 className="font-serif text-[clamp(38px,5.5vw,82px)] font-light leading-[1.20] tracking-[-0.03em] text-white">
							<Headline text={mission.headline} />
						</h2>
					</div>

					<div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
						<div>
							<div className="about-etymology-card mb-8 rounded-2xl border border-white/[0.07] bg-white/3 p-7 opacity-0">
								<p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/30">
									{mission.etymology.label}
								</p>
								<p className="font-serif text-[24px] font-light italic text-[#C9981A]">
									{mission.etymology.word}
								</p>
								<p className="mt-1 text-[16px] font-light text-white/75">
									{mission.etymology.meaning}
								</p>
								<div className="my-4 h-px w-full bg-white/6" />
								<p className="text-[13px] font-light italic leading-relaxed text-white/40">
									{mission.etymology.definition}
								</p>
							</div>
							<p className="about-mission-new-para text-[15px] font-light leading-[1.9] text-white/55 opacity-0">
								{mission.intro}
							</p>
						</div>

						<div className="flex flex-col gap-6">
							{mission.paragraphs.map((text, i) => (
								<p
									key={i}
									className="about-mission-new-para text-[15px] font-light leading-[1.9] text-white/55 opacity-0"
								>
									{text}
								</p>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ─── VISION ─── */}
			<section className="about-vision relative w-full overflow-hidden bg-[#FDFAF5] py-15 md:py-44">
				<div
					className="absolute inset-0 opacity-[0.035]"
					style={{ backgroundImage: NOISE_BG }}
				/>
				<div
					className="about-orb-4 pointer-events-none absolute -right-24 bottom-[15%] h-72 w-72 rounded-full"
					style={{
						background:
							"radial-gradient(circle, #7DD3FC 0%, transparent 70%)",
						opacity: 0.14,
					}}
				/>

				<div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
					<div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr] md:gap-20">
						<div className="pt-1">
							<p className="about-vision-eyebrow mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#1A7A4C] opacity-0">
								{vision.eyebrow}
							</p>
							<div className="mt-5 hidden flex-col gap-4 md:flex">
								{vision.keywords.map(
									(word) => (
										<div
											key={word}
											className="about-vision-pill flex items-center gap-3 opacity-0"
										>
											<div className="h-1.5 w-1.5 rounded-full bg-[#C9981A]" />
											<span className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#aaa]">
												{word}
											</span>
										</div>
									),
								)}
							</div>
						</div>

						<div>
							<div className="about-vision-headline mb-10 overflow-hidden opacity-0">
								<h2 className="font-serif text-[clamp(32px,4.5vw,66px)] font-light leading-[1.04] tracking-[-0.025em] text-[#121212]">
									<Headline text={vision.headline} />
								</h2>
							</div>
							<div className="flex max-w-2xl flex-col gap-5">
								{vision.paragraphs.map((text, i) => (
									<p
										key={i}
										className="about-vision-para text-[15px] font-light leading-[1.9] text-[#555] opacity-0"
									>
										{text}
									</p>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ─── FOUNDING QUOTE ─── */}
			<section className="about-mission relative w-full overflow-hidden bg-[#F5F0E8] py-15 md:py-40">
				<div
					className="absolute inset-0 opacity-[0.035]"
					style={{ backgroundImage: NOISE_BG }}
				/>

				<div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
					<div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
						<div className="about-mission-quote opacity-0">
							<blockquote className="font-serif text-[clamp(24px,3.2vw,40px)] font-light leading-[1.2] tracking-[-0.02em] text-[#121212]">
								<Headline text={story.quote} />
							</blockquote>
							<p className="mt-6 text-[13px] uppercase tracking-[0.12em] text-[#999]">
								{story.attribution}
							</p>
						</div>

						<div className="flex flex-col gap-5">
							{story.paragraphs.map((text, i) => (
								<p
									key={i}
									className="about-mission-text text-[15px] font-light leading-[1.85] text-[#555] opacity-0"
								>
									<Headline
										text={text}
										accentClassName="text-[#121212]"
									/>
								</p>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ─── VALUES ─── */}
			<section className="about-values relative w-full bg-[#0D0D0D] py-15 md:py-40">
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.04]"
					style={{
						backgroundImage: DOT_DARK,
						backgroundSize: "180px 180px",
					}}
				/>
				<div
					className="about-orb-5 pointer-events-none absolute right-[5%] top-[10%] h-72 w-72 rounded-full"
					style={{
						background:
							"radial-gradient(circle, #1A7A4C 0%, transparent 70%)",
						opacity: 0.1,
					}}
				/>

				<div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
					<div className="mb-16 md:mb-24">
						<p className="about-values-eyebrow mb-5 text-[11px] font-medium uppercase tracking-[0.15em] text-[#1A7A4C] opacity-0">
							{values.eyebrow}
						</p>
						<div className="about-values-headline overflow-hidden">
							<h2 className="font-serif text-[clamp(38px,5.5vw,72px)] font-light leading-[1.20] tracking-[-0.025em] text-white">
								<Headline text={values.headline} />
							</h2>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{values.items.map((item, i) => {
							const c = colour(item.colour);
							const v = {
								...item,
								number: String(i + 1).padStart(2, "0"),
								accent: c.accent,
								bg: c.soft,
							};
							return (
							<div
								key={v.number}
								className="about-value-card group rounded-[20px] border border-white/[0.07] bg-white/3 p-8 shadow-[0_2px_16px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-white/12 hover:bg-white/5 opacity-0"
							>
								<div className="mb-6 flex items-center gap-3">
									<div
										className="flex h-10 w-10 items-center justify-center rounded-xl text-[13px] font-semibold"
										style={{
											background: v.bg,
											color: v.accent,
										}}
									>
										{v.number}
									</div>
									<div
										className="h-px flex-1"
										style={{ background: `${v.accent}25` }}
									/>
								</div>
								<h3 className="mb-3 font-serif text-[22px] font-light leading-tight text-white">
									{v.title}
								</h3>
								<p className="text-[14px] font-light leading-[1.8] text-white/50">
									{v.description}
								</p>
							</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* ─── COMMITMENTS ─── */}
			<section className="about-team relative w-full bg-[#FDFAF5] py-15 md:py-40">
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.025]"
					style={{
						backgroundImage: DOT_LIGHT,
						backgroundSize: "180px 180px",
					}}
				/>
				<div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
					<div className="mb-16 md:mb-24">
						<p className="about-team-eyebrow mb-5 text-[11px] font-medium uppercase tracking-[0.15em] text-[#1A7A4C] opacity-0">
							{commitments.eyebrow}
						</p>
						<div className="about-team-headline overflow-hidden">
							<h2 className="font-serif text-[clamp(38px,5.5vw,72px)] font-light leading-tight tracking-[-0.025em] text-[#121212]">
								<Headline text={commitments.headline} />
							</h2>
						</div>
						<p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-[#777]">
							{commitments.intro}
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						{commitments.items.map((entry, i) => {
							const c = colour(entry.colour);
							const item = {
								...entry,
								number: String(i + 1).padStart(2, "0"),
								accent: c.accent,
								bg: c.soft,
							};
							return (
							<div
								key={item.number}
								className="about-team-card group rounded-[20px] border border-black/[0.07] bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_28px_rgba(0,0,0,0.09)] opacity-0"
							>
								<div
									className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl text-[13px] font-semibold"
									style={{
										background: item.bg,
										color: item.accent,
									}}
								>
									{item.number}
								</div>

								<h3 className="mb-3 font-serif text-[22px] font-light leading-tight text-[#121212]">
									{item.title}
								</h3>
								<p className="text-[14px] font-light leading-[1.8] text-[#666]">
									{item.description}
								</p>
							</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* ─── DOMAIN EXPERTISE ─── */}
			<section className="about-domain relative w-full bg-[#FDFAF5] py-15 md:py-40">
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.025]"
					style={{
						backgroundImage: DOT_LIGHT,
						backgroundSize: "180px 180px",
					}}
				/>

				<div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
					<div className="mb-16 md:mb-24">
						<p className="about-domain-eyebrow mb-5 text-[11px] font-medium uppercase tracking-[0.15em] text-[#1A7A4C] opacity-0">
							{expertise.eyebrow}
						</p>
						<div className="about-domain-headline overflow-hidden">
							<h2 className="font-serif text-[clamp(38px,5.5vw,72px)] font-light leading-[1.20] tracking-[-0.025em] text-[#121212]">
								<Headline text={expertise.headline} />
							</h2>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						<div className="about-domain-card rounded-[20px] border border-black/[0.07] bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.05)] opacity-0">
							<h3 className="mt-5 mb-6 font-serif text-[22px] font-light text-[#121212]">
								{expertise.industriesTitle}
							</h3>
							<ul className="flex flex-col gap-3">
								{expertise.industries.map((industry) => (
									<li
										key={industry}
										className="about-domain-item flex items-start gap-3 text-[14px] font-light text-[#555] opacity-0"
									>
										<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9981A]" />
										{industry}
									</li>
								))}
								<li className="about-domain-item flex items-start gap-3 text-[14px] font-light italic text-[#999] opacity-0">
									<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9981A] opacity-40" />
									{expertise.industriesNote}
								</li>
							</ul>
						</div>

						<div className="about-domain-card rounded-[20px] border border-black/[0.07] bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.05)] opacity-0">
							<h3 className="mt-5 mb-6 font-serif text-[22px] font-light text-[#121212]">
								{expertise.methodologiesTitle}
							</h3>
							<ul className="flex flex-col gap-3">
								{expertise.methodologies.map((method) => (
									<li
										key={method}
										className="about-domain-item flex items-start gap-3 text-[14px] font-light text-[#555] opacity-0"
									>
										<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A7A4C]" />
										{method}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* ─── STATS ─── */}
			<section className="about-stats relative w-full overflow-hidden bg-[#121212] py-15 md:py-32">
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.04]"
					style={{
						backgroundImage: DOT_DARK,
						backgroundSize: "180px 180px",
					}}
				/>
				<div
					className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full"
					style={{
						background:
							"radial-gradient(ellipse, rgba(201,152,26,0.08) 0%, transparent 70%)",
					}}
				/>

				<div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
					<div className="grid grid-cols-2 gap-10 md:grid-cols-4">
						{settings.stats.map((stat) => (
							<div
								key={stat.label}
								className="about-stat-item flex flex-col gap-2 opacity-0"
							>
								<p
									className="about-stat-value font-serif text-[clamp(36px,4.5vw,60px)] font-light leading-none tracking-[-0.02em]"
									data-value={stat.value}
									style={{ color: "#C9981A" }}
								>
									{stat.value}
								</p>
								<p className="text-[12px] font-light uppercase tracking-[0.12em] text-white/50">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ─── CTA ─── */}
			<section className="about-cta relative w-full overflow-hidden bg-[#F5F0E8] py-15 md:py-40">
				<div
					className="absolute inset-0 opacity-[0.035]"
					style={{ backgroundImage: NOISE_BG }}
				/>

				<div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
					<div
						className="about-cta-inner relative overflow-hidden rounded-3xl border border-black/[0.07] p-10 text-center shadow-[0_4px_40px_rgba(0,0,0,0.06)] md:p-16 opacity-0"
						style={{
							background:
								"linear-gradient(135deg, #FDFAF5 0%, #F5F0E8 60%, #FFF8F0 100%)",
						}}
					>
						<div className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-0 left-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,#D4E8C2,transparent_70%)] opacity-50" />
						<div className="pointer-events-none absolute translate-x-1/2 translate-y-1/2 bottom-0 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,#BAE6FD,transparent_70%)] opacity-40" />

						<div className="relative z-10">
							<p
								className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em]"
								style={{ color: "#1A7A4C" }}
							>
								{cta.eyebrow}
							</p>
							<h3 className="mb-4 font-serif text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-[#121212]">
								<Headline text={cta.headline} />
							</h3>
							<p className="mx-auto mb-8 max-w-sm text-[15px] font-light leading-relaxed text-[#777]">
								{cta.body}
							</p>
							<Link
								href={cta.buttonHref}
								className="inline-flex bg-[#121212] items-center gap-2 rounded-full px-8 py-3.5 text-[10px] md:text-[13px] font-medium uppercase tracking-[0.04em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
							>
								<span>{cta.buttonLabel}</span>
								<ArrowRight className="h-4 w-4" />
							</Link>
							<FAQLink
								lead={about.faqLink.lead}
								label={about.faqLink.label}
								className="mt-8"
							/>
						</div>
					</div>
				</div>
			</section>

		</div>
	);
}
