"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { STATS, TEAM, VALUES } from "@/data";

gsap.registerPlugin(ScrollTrigger);

function parseStat(value: string) {
	const m = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
	if (!m) return { prefix: "", num: 0, suffix: value, decimals: 0 };
	const raw = m[2];
	return {
		prefix: m[1],
		num: parseFloat(raw),
		suffix: m[3],
		decimals: raw.includes(".") ? raw.split(".")[1].length : 0,
	};
}

export default function AboutUs() {
	const pageRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (!pageRef.current) return;

		const ctx = gsap.context(() => {
			gsap.fromTo(
				".about-eyebrow",
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "power3.out",
					delay: 0.3,
				},
			);
			gsap.fromTo(
				".about-hero-headline",
				{ clipPath: "inset(0 100% 0 0)" },
				{
					clipPath: "inset(0 0% 0 0)",
					duration: 1.4,
					ease: "expo.inOut",
					delay: 0.5,
				},
			);
			gsap.fromTo(
				".about-hero-sub",
				{ opacity: 0, y: 24 },
				{
					opacity: 1,
					y: 0,
					duration: 0.9,
					ease: "power3.out",
					delay: 0.9,
				},
			);
			gsap.fromTo(
				".about-hero-rule",
				{ scaleX: 0, transformOrigin: "left" },
				{ scaleX: 1, duration: 1.2, ease: "expo.inOut", delay: 0.7 },
			);

			gsap.fromTo(
				".about-mission-quote",
				{ opacity: 0, x: -30 },
				{
					opacity: 1,
					x: 0,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: ".about-mission",
						start: "top 75%",
					},
				},
			);
			gsap.fromTo(
				".about-mission-text",
				{ opacity: 0, y: 24 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "power3.out",
					stagger: 0.15,
					scrollTrigger: {
						trigger: ".about-mission",
						start: "top 75%",
					},
				},
			);

			gsap.fromTo(
				".about-value-card",
				{ opacity: 0, y: 32 },
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					ease: "power3.out",
					stagger: 0.12,
					scrollTrigger: {
						trigger: ".about-values",
						start: "top 75%",
					},
				},
			);

			gsap.fromTo(
				".about-team-card",
				{ opacity: 0, y: 32 },
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					ease: "power3.out",
					stagger: 0.12,
					scrollTrigger: {
						trigger: ".about-team",
						start: "top 75%",
					},
				},
			);

			document
				.querySelectorAll<HTMLElement>(".about-stat-value")
				.forEach((el) => {
					const raw = el.dataset.value ?? "0";
					const { prefix, num, suffix, decimals } = parseStat(raw);
					const obj = { val: 0 };
					gsap.to(obj, {
						val: num,
						duration: 1.8,
						ease: "power2.out",
						onUpdate() {
							el.textContent =
								prefix + obj.val.toFixed(decimals) + suffix;
						},
						onComplete() {
							el.textContent = raw;
						},
						scrollTrigger: {
							trigger: ".about-stats",
							start: "top 80%",
							once: true,
						},
					});
				});

			gsap.fromTo(
				".about-stat-item",
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					ease: "power3.out",
					stagger: 0.1,
					scrollTrigger: {
						trigger: ".about-stats",
						start: "top 80%",
					},
				},
			);

			gsap.fromTo(
				".about-cta-inner",
				{ opacity: 0, y: 40 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "power3.out",
					scrollTrigger: {
						trigger: ".about-cta",
						start: "top 80%",
					},
				},
			);
		}, pageRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={pageRef} className="min-h-screen flex flex-col bg-[#F5F0E8]">
			<Navbar />

			<section className="relative w-full overflow-hidden bg-[#121212] pt-32 pb-28 md:pt-44 md:pb-36">
				{/* Dot texture */}
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.04]"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43 7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm28-65c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm23-11c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm-6 60c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm29 15c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
						backgroundSize: "180px 180px",
					}}
				/>

				{/* Ambient orbs */}
				<motion.div
					animate={{
						x: [0, -20, 0],
						y: [0, 18, 0],
						scale: [1, 1.06, 1],
					}}
					transition={{
						duration: 16,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full"
					style={{
						background:
							"radial-gradient(circle, #C9981A 0%, #E8A34A 40%, transparent 70%)",
						opacity: 0.12,
					}}
				/>
				<motion.div
					animate={{ x: [0, 16, 0], y: [0, -14, 0] }}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 3,
					}}
					className="pointer-events-none absolute -bottom-20 left-[10%] h-72 w-72 rounded-full"
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
					<div className="about-hero-headline overflow-hidden">
						<h1 className="font-serif text-[clamp(44px,6.5vw,92px)] font-light leading-[0.92] tracking-[-0.03em] text-white">
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

			<section className="about-mission relative w-full overflow-hidden bg-[#FDFAF5] py-28 md:py-40">
				<div className="absolute inset-0 opacity-[0.035] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

				<div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
					<div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
						<div className="about-mission-quote opacity-0">
							<div
								className="mb-6 h-px w-12"
								style={{ background: "#C9981A" }}
							/>
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

			<section className="about-values relative w-full bg-[#F5F0E8] py-28 md:py-40">
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.04]"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43 7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm28-65c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm23-11c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm-6 60c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm29 15c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z' fill='%23666' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
						backgroundSize: "180px 180px",
					}}
				/>

				<div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
					<div className="mb-16 md:mb-24">
						<p
							className="mb-5 text-[11px] font-medium uppercase tracking-[0.15em]"
							style={{ color: "#1A7A4C" }}
						>
							How we work
						</p>
						<h2 className="font-serif text-[clamp(38px,5.5vw,72px)] font-light leading-[0.95] tracking-[-0.025em] text-[#121212]">
							Three principles.
							<br />
							<em className="text-[#C9981A]">No exceptions.</em>
						</h2>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{VALUES.map((v) => (
							<div
								key={v.number}
								className="about-value-card rounded-[20px] border border-black/[0.07] bg-[#FDFAF5] p-8 shadow-[0_2px_16px_rgba(0,0,0,0.05)] opacity-0"
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
										style={{
											background: `${v.accent}30`,
										}}
									/>
								</div>
								<h3 className="mb-3 font-serif text-[22px] font-light leading-tight text-[#121212]">
									{v.title}
								</h3>
								<p className="text-[14px] font-light leading-[1.8] text-[#666]">
									{v.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="about-team relative w-full bg-[#FDFAF5] py-28 md:py-40">
				<div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
					<div className="mb-16 md:mb-24">
						<p
							className="mb-5 text-[11px] font-medium uppercase tracking-[0.15em]"
							style={{ color: "#1A7A4C" }}
						>
							The people
						</p>
						<h2 className="font-serif text-[clamp(38px,5.5vw,72px)] font-light leading-[0.95] tracking-[-0.025em] text-[#121212]">
							You work with us.
							<br />
							<em className="text-[#C9981A]">Not our team.</em>
						</h2>
						<p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-[#777]">
							Aletheia is deliberately lean. Every call, analysis,
							and deliverable comes from the people below — not
							from a junior who sat in on your onboarding call.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						{TEAM.map((member) => (
							<div
								key={member.name}
								className="about-team-card group rounded-[20px] border border-black/[0.07] bg-[#F5F0E8] p-8 shadow-[0_2px_16px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_4px_28px_rgba(0,0,0,0.09)] opacity-0"
							>
								<div
									className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-[18px] font-semibold tracking-tight"
									style={{
										background: member.bg,
										color: member.accent,
									}}
								>
									{member.initials}
								</div>

								<div
									className="mb-5 h-px w-8 transition-all duration-300 group-hover:w-14"
									style={{ background: member.accent }}
								/>

								<h3 className="mb-1 text-[17px] font-medium text-[#121212]">
									{member.name}
								</h3>
								<p
									className="mb-4 text-[11px] font-medium uppercase tracking-widest"
									style={{ color: `${member.accent}CC` }}
								>
									{member.role}
								</p>
								<p className="text-[14px] font-light leading-[1.8] text-[#666]">
									{member.bio}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="about-stats relative w-full overflow-hidden bg-[#121212] py-24 md:py-32">
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.04]"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43 7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm28-65c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm23-11c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm-6 60c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm29 15c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
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

			<section className="about-cta relative w-full overflow-hidden bg-[#F5F0E8] py-28 md:py-40">
				<div className="absolute inset-0 opacity-[0.035] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

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
								className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.04em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
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
