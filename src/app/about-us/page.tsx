import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { STATS, VALUES } from "@/data";
import AboutAnimations from "./AboutAnimations";

const NOISE_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

const DOT_LIGHT = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43 7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm28-65c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm23-11c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm-6 60c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm29 15c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z' fill='%23666' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`;
const DOT_DARK = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43 7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm28-65c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm23-11c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm-6 60c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm29 15c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`;

const INDUSTRIES = [
	"Health Tech & Digital Health",
	"SaaS & Software Products",
	"Real Estate & Prop Tech",
	"Hardware & Equipment",
	"Women's Health & Wellness",
	"B2B Professional Services",
	"Consumer Products",
	"E-Commerce & DTC Brands",
];

const METHODOLOGIES = [
	"Steve Blank Customer Development",
	"Sean Ellis PMF Testing",
	"Jobs To Be Done (JTBD)",
	"Lean Startup Validation",
	"ICP / ICA Definition",
	"Conversion Psychology",
	"Brand Positioning Frameworks",
	"Competitive Intelligence",
];

const TICKER = [
	"Truth Revealed",
	"Market Intelligence",
	"Strategic Clarity",
	"Competitive Advantage",
	"Data-Driven Decisions",
	"Radical Honesty",
	"Full-Spectrum Strategy",
	"Validated Insights",
];

export default function AboutUs() {
	return (
		<div className="min-h-screen flex flex-col bg-[#F5F0E8]">
			<AboutAnimations />
			<Navbar variant="dark" />

			{/* ─── HERO ─── */}
			<section className="relative w-full overflow-hidden bg-[#121212] pt-32 pb-28 md:pt-44 md:pb-36">
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
						Our Story
					</p>
					<div className="about-hero-headline">
						<h1 className="font-serif text-[clamp(44px,6.5vw,92px)] font-light leading-[1.20] tracking-[-0.03em] text-white">
							We exist to tell you
							<br />
							what you{" "}
							<em className="text-[#C9981A]">need to hear.</em>
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
						Aletheia was built on a simple conviction: the most
						expensive thing a founder can do is make a high-stakes
						decision based on intelligence that has been softened to
						protect someone&apos;s feelings. We fix that.
					</p>
				</div>
			</section>

			{/* ─── MARQUEE ─── */}
			<div className="relative overflow-hidden bg-[#C9981A] py-3.5">
				<div className="about-marquee-track flex shrink-0 whitespace-nowrap will-change-transform">
					{[...TICKER, ...TICKER].map((item, i) => (
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
			<section className="about-mission-new relative w-full overflow-hidden bg-[#0D0D0D] py-28 md:py-44">
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
							Our Mission
						</span>
					</div>

					<div className="about-mission-new-headline mb-16 overflow-hidden">
						<h2 className="font-serif text-[clamp(38px,5.5vw,82px)] font-light leading-[1.20] tracking-[-0.03em] text-white">
							Uncover the truth
							<br />
							<em className="text-[#C9981A]">
								before you commit.
							</em>
						</h2>
					</div>

					<div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
						<div>
							<div className="about-etymology-card mb-8 rounded-2xl border border-white/[0.07] bg-white/3 p-7 opacity-0">
								<p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/30">
									Ancient Greek · ἀλήθεια · noun
								</p>
								<p className="font-serif text-[24px] font-light italic text-[#C9981A]">
									ἀ-λή-θεια
								</p>
								<p className="mt-1 text-[16px] font-light text-white/75">
									truth revealed
								</p>
								<div className="my-4 h-px w-full bg-white/6" />
								<p className="text-[13px] font-light italic leading-relaxed text-white/40">
									The state of not being hidden. The condition
									of full disclosure — where nothing is
									obscured or softened.
								</p>
							</div>
							<p className="about-mission-new-para text-[15px] font-light leading-[1.9] text-white/55 opacity-0">
								We exist to uncover the truth of your market
								before you build, launch, or commit.
							</p>
						</div>

						<div className="flex flex-col gap-6">
							<p className="about-mission-new-para text-[15px] font-light leading-[1.9] text-white/55 opacity-0">
								Most businesses don&apos;t fail because of bad
								products. They fail because they skipped
								validation, misread their market, or launched
								without a clear position. Aletheia Intelligence
								exists to prevent that.
							</p>
							<p className="about-mission-new-para text-[15px] font-light leading-[1.9] text-white/55 opacity-0">
								We are a full-spectrum strategy and intelligence
								firm serving both B2B and B2C clients. We
								combine rigorous methodology with practical
								execution to deliver clarity, confidence, and
								competitive advantage.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ─── VISION ─── */}
			<section className="about-vision relative w-full overflow-hidden bg-[#FDFAF5] py-28 md:py-44">
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
								Our Vision
							</p>
							<div className="mt-5 hidden flex-col gap-4 md:flex">
								{["Clarity", "Conviction", "Advantage"].map(
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
									A world where every
									<br />
									major decision is made
									<br />
									from a position of{" "}
									<em className="text-[#C9981A]">clarity.</em>
								</h2>
							</div>
							<div className="flex max-w-2xl flex-col gap-5">
								<p className="about-vision-para text-[15px] font-light leading-[1.9] text-[#555] opacity-0">
									We envision a future where founders and
									executives are empowered with intelligence
									that was once reserved for companies with
									enormous research budgets — delivered with
									the honesty and rigour that actually changes
									outcomes.
								</p>
								<p className="about-vision-para text-[15px] font-light leading-[1.9] text-[#555] opacity-0">
									Where market truth is accessible,
									actionable, and honest. Where the most
									consequential decisions are also the most
									informed. Where clarity precedes every
									commitment — not just the lucky ones.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ─── FOUNDING QUOTE ─── */}
			<section className="about-mission relative w-full overflow-hidden bg-[#F5F0E8] py-28 md:py-40">
				<div
					className="absolute inset-0 opacity-[0.035]"
					style={{ backgroundImage: NOISE_BG }}
				/>

				<div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
					<div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
						<div className="about-mission-quote opacity-0">
							<blockquote className="font-serif text-[clamp(24px,3.2vw,40px)] font-light leading-[1.2] tracking-[-0.02em] text-[#121212]">
								&ldquo;Most consultants optimise for the
								retainer. We optimise for the{" "}
								<em className="text-[#C9981A]">decision.</em>
								&rdquo;
							</blockquote>
							<p className="mt-6 text-[13px] uppercase tracking-[0.12em] text-[#999]">
								— Founding principle
							</p>
						</div>

						<div className="flex flex-col gap-5">
							<p className="about-mission-text text-[15px] font-light leading-[1.85] text-[#555] opacity-0">
								Aletheia started as a direct response to a
								pattern we kept seeing: smart founders, capable
								teams, and real ambition — consistently undone
								by research that had been filtered through
								optimism bias, sycophantic consultants, or
								simply a lack of methodological rigour.
							</p>
							<p className="about-mission-text text-[15px] font-light leading-[1.85] text-[#555] opacity-0">
								We set out to build the kind of intelligence
								firm we would have wanted to hire — one that
								treats honesty as a commercial asset, not a
								liability. One that measures success by the
								quality of decisions made, not the volume of
								deliverables produced.
							</p>
							<p className="about-mission-text text-[15px] font-light leading-[1.85] text-[#555] opacity-0">
								Our name means{" "}
								<em className="text-[#121212]">
									truth revealed
								</em>
								. That&apos;s not a tagline — it&apos;s the
								standard we hold every engagement to.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ─── VALUES ─── */}
			<section className="about-values relative w-full bg-[#0D0D0D] py-28 md:py-40">
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
							How we work
						</p>
						<div className="about-values-headline overflow-hidden">
							<h2 className="font-serif text-[clamp(38px,5.5vw,72px)] font-light leading-[1.20] tracking-[-0.025em] text-white">
								Three principles.
								<br />
								<em className="text-[#C9981A]">
									No exceptions.
								</em>
							</h2>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{VALUES.map((v) => (
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
						))}
					</div>
				</div>
			</section>

			{/* ─── COMMITMENTS ─── */}
			<section className="about-team relative w-full bg-[#FDFAF5] py-28 md:py-40">
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
							Our commitments
						</p>
						<div className="about-team-headline overflow-hidden">
							<h2 className="font-serif text-[clamp(38px,5.5vw,72px)] font-light leading-tight tracking-[-0.025em] text-[#121212]">
								Senior-only.
								<br />
								<em className="text-[#C9981A]">By design.</em>
							</h2>
						</div>
						<p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-[#777]">
							Aletheia is deliberately lean. These are the three
							commitments every client gets — built into how we
							work, not stated as aspiration.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						{[
							{
								number: "01",
								title: "Senior-only delivery",
								description:
									"Every call, every analysis, and every deliverable comes directly from the people who scoped your engagement. No handoffs. No juniors learning on your time.",
								accent: "#1A7A4C",
								bg: "#E8F5EE",
							},
							{
								number: "02",
								title: "Truth over comfort",
								description:
									"We optimise for the decision, not the relationship. When the data points one way, we say so clearly — with evidence to back it, however uncomfortable.",
								accent: "#C9981A",
								bg: "#FFF8E6",
							},
							{
								number: "03",
								title: "Lean by design",
								description:
									"We don't scale headcount ahead of quality. Aletheia stays deliberately small so every engagement stays sharp, personal, and fully accountable.",
								accent: "#0284C7",
								bg: "#E0F2FE",
							},
						].map((item) => (
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
						))}
					</div>
				</div>
			</section>

			{/* ─── DOMAIN EXPERTISE ─── */}
			<section className="about-domain relative w-full bg-[#FDFAF5] py-28 md:py-40">
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
							Domain Expertise
						</p>
						<div className="about-domain-headline overflow-hidden">
							<h2 className="font-serif text-[clamp(38px,5.5vw,72px)] font-light leading-[1.20] tracking-[-0.025em] text-[#121212]">
								Industries &amp; Methodologies.
							</h2>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						<div className="about-domain-card rounded-[20px] border border-black/[0.07] bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.05)] opacity-0">
							<h3 className="mt-5 mb-6 font-serif text-[22px] font-light text-[#121212]">
								Industries We Serve
							</h3>
							<ul className="flex flex-col gap-3">
								{INDUSTRIES.map((industry) => (
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
									and many more.
								</li>
							</ul>
						</div>

						<div className="about-domain-card rounded-[20px] border border-black/[0.07] bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.05)] opacity-0">
							<h3 className="mt-5 mb-6 font-serif text-[22px] font-light text-[#121212]">
								Methodologies &amp; Frameworks
							</h3>
							<ul className="flex flex-col gap-3">
								{METHODOLOGIES.map((method) => (
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
			<section className="about-stats relative w-full overflow-hidden bg-[#121212] py-24 md:py-32">
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
						{STATS.map((stat) => (
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
			<section className="about-cta relative w-full overflow-hidden bg-[#F5F0E8] py-28 md:py-40">
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
								Start a conversation
							</p>
							<h3 className="mb-4 font-serif text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-[#121212]">
								Every engagement starts
								<br />
								<em style={{ color: "#C9981A" }}>
									with one honest call.
								</em>
							</h3>
							<p className="mx-auto mb-8 max-w-sm text-[15px] font-light leading-relaxed text-[#777]">
								No pitch deck. No proposal push. Just a direct
								conversation about your situation and whether we
								can genuinely help.
							</p>
							<Link
								href="/#contact"
								className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[10px] md:text-[13px] font-medium uppercase tracking-[0.04em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
								style={{ background: "#121212" }}
							>
								<span>Book a Discovery Call</span>
								<ArrowRight className="h-4 w-4" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
