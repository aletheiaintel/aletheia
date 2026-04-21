"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const PHASES = [
	{
		number: "01",
		phase: "Phase 1",
		title: "Idea Triage",
		description:
			"Filter signal from noise. We assess your idea against market conditions, competitive landscape, and timing to determine if it's worth pursuing before a single dollar is spent.",
		accent: "#C9981A",
		iconBg: "#FFF3E0",
		detail: "Market conditions · Competitive landscape · Timing analysis",
	},
	{
		number: "02",
		phase: "Phase 2",
		title: "Customer Discovery",
		description:
			"Interview real prospects. We conduct structured discovery interviews to uncover true pain points, buying triggers, and genuine willingness to pay — not what people say, but what they mean.",
		accent: "#1A7A4C",
		iconBg: "#E8F5EE",
		detail: "Structured interviews · Pain mapping · Buying triggers",
	},
	{
		number: "03",
		phase: "Phase 3",
		title: "Smoke Test",
		description:
			"Test demand with behavioral commitment signals. We design and run demand tests — landing pages, outreach, preorders — to gather proof of intent before full investment.",
		accent: "#0284C7",
		iconBg: "#E0F2FE",
		detail: "Landing pages · Outreach · Preorder campaigns",
	},
	{
		number: "04",
		phase: "Phase 4",
		title: "Kill or Commit",
		description:
			"Go/No-Go decision backed by structured evidence. We deliver a clear, honest recommendation: build, pivot, or abandon — with the data to defend any path forward.",
		accent: "#E5484D",
		iconBg: "#FFECEC",
		detail: "Evidence synthesis · Strategic recommendation · Risk assessment",
	},
];

export default function Methodology() {
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		const ctx = gsap.context(() => {
			const prefersReducedMotion = window.matchMedia(
				"(prefers-reduced-motion: reduce)",
			).matches;
			if (prefersReducedMotion) {
				gsap.set(
					[
						".meth-eyebrow",
						".meth-headline",
						".meth-card-inner",
						".meth-num",
						".meth-detail",
						".meth-dot",
						".meth-bottom",
					],
					{
						opacity: 1,
						x: 0,
						y: 0,
						scale: 1,
						filter: "none",
						clearProps: "all",
					},
				);
				return;
			}

			// Header: staggered character-by-character reveal using clip-path
			gsap.fromTo(
				".meth-eyebrow",
				{ opacity: 0, x: -30 },
				{
					opacity: 1,
					x: 0,
					duration: 0.9,
					ease: "power3.out",
					scrollTrigger: {
						trigger: ".meth-header",
						start: "top 78%",
						toggleActions: "play none none reverse",
					},
				},
			);

			gsap.fromTo(
				".meth-headline",
				{ opacity: 0, y: 60 },
				{
					opacity: 1,
					y: 0,
					duration: 1.4,
					ease: "expo.out",
					delay: 0.1,
					scrollTrigger: {
						trigger: ".meth-header",
						start: "top 78%",
						toggleActions: "play none none reverse",
					},
				},
			);

			// SVG path draw animation for the connecting line
			const pathEl = section.querySelector<SVGPathElement>(
				".meth-connector-path",
			);
			if (pathEl) {
				const length = pathEl.getTotalLength();
				gsap.set(pathEl, {
					strokeDasharray: length,
					opacity: 1,
				});
				gsap.fromTo(
					pathEl,
					{ strokeDashoffset: length },
					{
						strokeDashoffset: 0,
						duration: 2.5,
						ease: "power2.inOut",
						scrollTrigger: {
							trigger: ".meth-phases",
							start: "top 70%",
							toggleActions: "play none none reverse",
						},
					},
				);
			}

			// Each phase card: staggered entrance from alternating sides
			const cards = section.querySelectorAll<HTMLElement>(".meth-card");
			cards.forEach((card, i) => {
				const isLeft = i % 2 === 0;

				// Number burst
				gsap.fromTo(
					card.querySelector(".meth-num"),
					{ opacity: 0, scale: 3, filter: "blur(12px)" },
					{
						opacity: 1,
						scale: 1,
						filter: "blur(0px)",
						duration: 0.9,
						ease: "back.out(1.7)",
						scrollTrigger: {
							trigger: card,
							start: "top 82%",
							toggleActions: "play none none reverse",
						},
					},
				);

				// Card slide in
				gsap.fromTo(
					card.querySelector(".meth-card-inner"),
					{ opacity: 0, x: isLeft ? -50 : 50 },
					{
						opacity: 1,
						x: 0,
						duration: 1,
						ease: "expo.out",
						delay: 0.15,
						scrollTrigger: {
							trigger: card,
							start: "top 82%",
							toggleActions: "play none none reverse",
						},
					},
				);

				// Detail line reveal
				gsap.fromTo(
					card.querySelector(".meth-detail"),
					{ opacity: 0, y: 14 },
					{
						opacity: 1,
						y: 0,
						duration: 0.7,
						ease: "power3.out",
						delay: 0.35,
						scrollTrigger: {
							trigger: card,
							start: "top 82%",
							toggleActions: "play none none reverse",
						},
					},
				);

				// Dot pulse
				gsap.fromTo(
					card.querySelector(".meth-dot"),
					{ scale: 0, opacity: 0 },
					{
						scale: 1,
						opacity: 1,
						duration: 0.5,
						ease: "back.out(2.5)",
						delay: 0.2,
						scrollTrigger: {
							trigger: card,
							start: "top 82%",
							toggleActions: "play none none reverse",
						},
					},
				);
			});

			// Bottom statement
			gsap.fromTo(
				".meth-bottom",
				{ opacity: 0, y: 40 },
				{
					opacity: 1,
					y: 0,
					duration: 1.1,
					ease: "expo.out",
					scrollTrigger: {
						trigger: ".meth-bottom",
						start: "top 88%",
					},
				},
			);
		}, section);

		return () => ctx.revert();
	}, []);

	return (
		<section
			id="methodology"
			ref={sectionRef}
			className="relative w-full bg-[#F5F0E8] overflow-hidden py-28 md:py-40"
		>
			{/* Ambient pastel blobs */}
			<motion.div
				animate={{
					x: [0, -25, 0],
					y: [0, -15, 0],
					scale: [1, 1.08, 1],
				}}
				transition={{
					duration: 14,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute -top-24 right-[8%] w-105 h-105 rounded-full bg-[radial-gradient(circle,#F2C594_0%,#E8B5D4_50%,transparent_70%)] opacity-50"
			/>
			<motion.div
				animate={{ x: [0, 22, 0], y: [0, 18, 0], scale: [1, 1.05, 1] }}
				transition={{
					duration: 16,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1,
				}}
				className="absolute top-[30%] -left-24 w-85 h-85 rounded-full bg-[radial-gradient(circle,#D4E8C2_0%,#E8D5B7_45%,transparent_70%)] opacity-45"
			/>
			<motion.div
				animate={{ x: [0, -18, 0], y: [0, 20, 0], scale: [1, 1.06, 1] }}
				transition={{
					duration: 18,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 3,
				}}
				className="absolute bottom-[15%] right-[2%] w-70 h-70 rounded-full bg-[radial-gradient(circle,#BAE6FD_0%,#7DD3FC_25%,transparent_70%)] opacity-25"
			/>
			<motion.div
				animate={{ x: [0, 14, 0], y: [0, -10, 0] }}
				transition={{
					duration: 22,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 5,
				}}
				className="absolute -bottom-20 left-[20%] w-95 h-95 rounded-full bg-[radial-gradient(circle,#E0F2FE_0%,#BAE6FD_30%,transparent_70%)] opacity-35"
			/>

			{/* Background textures */}
			<div className="absolute inset-0 opacity-[0.035] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
			<div
				className="absolute inset-0 opacity-[0.05] z-2"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43 7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm28-65c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm23-11c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm-6 60c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm29 15c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z' fill='%23666' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
					backgroundSize: "180px 180px",
				}}
			/>

			<div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
				{/* Header */}
				<div className="meth-header mb-20 md:mb-28">
					<p className="meth-eyebrow mb-5 text-[11px] tracking-[0.15em] text-[#1A7A4C] uppercase font-medium opacity-0">
						Our Four-Phase Framework
					</p>
					<h2 className="meth-headline font-serif text-[clamp(42px,6vw,84px)] font-light leading-[0.95] tracking-[-0.025em] text-[#121212] opacity-0">
						Structured precision.
						<br />
						<em className="text-[#C9981A]">No guesswork.</em>
					</h2>
					<div className="mt-8 h-px bg-linear-to-r from-[#C9981A] via-[#121212]/15 to-transparent" />
				</div>

				{/* Phases */}
				<div className="meth-phases relative">
					{/* Vertical SVG connector line — desktop only */}
					<div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block w-px pointer-events-none">
						<svg
							className="w-full h-full"
							viewBox="0 0 2 800"
							preserveAspectRatio="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								className="meth-connector-path"
								d="M1,0 L1,800"
								stroke="rgba(18,18,18,0.18)"
								strokeWidth="1.5"
								fill="none"
								strokeDasharray="6 6"
							/>
						</svg>
					</div>

					<div className="flex flex-col gap-16 md:gap-24">
						{PHASES.map((phase, i) => {
							const isLeft = i % 2 === 0;
							return (
								<div
									key={phase.number}
									className="meth-card relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
								>
									{/* Dot on connector */}
									<div
										className="meth-dot absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block w-3 h-3 rounded-full border-2 border-[#C9981A] z-10"
										style={{ background: "#FDFAF5" }}
									/>

									{/* Number — always left on mobile, alternates on desktop */}
									<div
										className={`flex items-center gap-6 ${
											!isLeft ? "md:order-2" : ""
										}`}
									>
										<div
											className="meth-num font-serif text-[clamp(100px,14vw,160px)] font-thin leading-none tracking-[-0.04em] opacity-0"
											style={{
												color: `${phase.accent}40`,
											}}
										>
											{phase.number}
										</div>
									</div>

									{/* Card */}
									<div
										className={`meth-card-inner opacity-0 ${
											!isLeft ? "md:order-1" : ""
										}`}
									>
										<div
											className="rounded-[20px] border p-7 md:p-9 bg-[#FDFAF5] shadow-[0_2px_16px_rgba(0,0,0,0.05)] transition-[border-color,box-shadow,transform] duration-350 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
											style={{
												borderColor: `${phase.accent}33`,
											}}
										>
											<div className="flex items-center gap-3 mb-4">
												<span
													className="text-[11px] tracking-[0.08em] uppercase font-medium px-3 py-1.5 rounded-full"
													style={{
														color: phase.accent,
														background:
															phase.iconBg,
														border: `1px solid ${phase.accent}33`,
													}}
												>
													{phase.phase}
												</span>
											</div>
											<h3 className="font-serif text-[clamp(26px,3.5vw,42px)] font-light leading-tight text-[#121212] mb-3 tracking-[-0.01em]">
												{phase.title}
											</h3>
											<div
												className="h-px mb-5 w-16"
												style={{
													background: `linear-gradient(to right, ${phase.accent}, transparent)`,
												}}
											/>
											<p className="text-[15px] leading-relaxed text-[#555] font-light mb-5">
												{phase.description}
											</p>
											<p
												className="meth-detail text-[11px] tracking-[0.08em] uppercase font-medium opacity-0"
												style={{ color: phase.accent }}
											>
												{phase.detail}
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Bottom statement */}
				<div className="meth-bottom mt-24 md:mt-36 opacity-0">
					<div className="relative rounded-3xl overflow-hidden px-8 py-10 md:px-16 md:py-14 text-center border border-black/[0.07] bg-linear-[135deg,#FDFAF5_0%,#F5F0E8_60%,#FFF8F0_100%] shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
						<div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[radial-gradient(circle,#D4E8C2,transparent_70%)] opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
						<div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[radial-gradient(circle,#BAE6FD,transparent_70%)] opacity-40 translate-x-1/2 translate-y-1/2 pointer-events-none" />
						<div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

						<div className="relative z-10">
							<p className="font-serif text-[clamp(20px,3vw,34px)] font-light text-[#121212] leading-relaxed tracking-[-0.01em]">
								&ldquo;Positive feedback is not validation.
								<br />
								<em className="text-[#C9981A]">
									Commitment signals are.&rdquo;
								</em>
							</p>
							<p className="mt-6 text-[12px] tracking-[0.12em] uppercase text-[#AAA] font-medium">
								Aletheia Intelligence Philosophy
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
