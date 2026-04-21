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
					strokeDashoffset: length,
					opacity: 1,
				});
				gsap.to(pathEl, {
					strokeDashoffset: 0,
					duration: 2.5,
					ease: "power2.inOut",
					scrollTrigger: {
						trigger: ".meth-phases",
						start: "top 70%",
					},
				});
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
			className="relative w-full bg-[#0F1A2E] overflow-hidden py-28 md:py-40"
		>
			{/* Background texture */}
			<div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
			<div
				className="absolute inset-0 opacity-[0.04]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					backgroundSize: "60px 60px",
				}}
			/>

			{/* Ambient glows */}
			<motion.div
				animate={{ scale: [1, 1.12, 1], opacity: [0.12, 0.18, 0.12] }}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full"
				style={{
					background:
						"radial-gradient(circle, #C9981A 0%, transparent 70%)",
				}}
			/>
			<motion.div
				animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.14, 0.08] }}
				transition={{
					duration: 14,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 3,
				}}
				className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full"
				style={{
					background:
						"radial-gradient(circle, #1A7A4C 0%, transparent 70%)",
				}}
			/>

			<div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
				{/* Header */}
				<div className="meth-header mb-20 md:mb-28">
					<p className="meth-eyebrow mb-5 text-[11px] tracking-[0.2em] text-[#C9981A] uppercase font-medium opacity-0">
						Our Four-Phase Framework
					</p>
					<h2 className="meth-headline font-serif text-[clamp(42px,6vw,84px)] font-light leading-[0.95] tracking-[-0.025em] text-white opacity-0">
						Structured precision.
						<br />
						<em className="text-[#C9981A]">No guesswork.</em>
					</h2>
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
								stroke="rgba(201,152,26,0.25)"
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
										style={{ background: "#0F1A2E" }}
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
												color: `${phase.accent}22`,
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
											className="rounded-2xl border p-7 md:p-9"
											style={{
												background:
													"rgba(255,255,255,0.03)",
												borderColor: `${phase.accent}22`,
											}}
										>
											<div className="flex items-center gap-3 mb-4">
												<span
													className="text-[10px] tracking-[0.14em] uppercase font-medium px-2.5 py-1 rounded-full"
													style={{
														color: phase.accent,
														background:
															phase.iconBg + "18",
														border: `1px solid ${phase.accent}33`,
													}}
												>
													{phase.phase}
												</span>
											</div>
											<h3 className="font-serif text-[clamp(26px,3.5vw,42px)] font-light leading-tight text-white mb-3 tracking-[-0.01em]">
												{phase.title}
											</h3>
											<div
												className="h-px mb-5 w-16"
												style={{
													background: `linear-gradient(to right, ${phase.accent}, transparent)`,
												}}
											/>
											<p className="text-[15px] leading-relaxed text-white/55 font-light mb-5">
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
				<div className="meth-bottom mt-24 md:mt-36 opacity-0 text-center">
					<div
						className="inline-block border border-white/10 rounded-2xl px-8 py-7 md:px-14 md:py-10"
						style={{ background: "rgba(255,255,255,0.025)" }}
					>
						<p className="font-serif text-[clamp(20px,3vw,34px)] font-light text-white leading-relaxed tracking-[-0.01em]">
							"Positive feedback is not validation.
							<br />
							<em className="text-[#C9981A]">
								Commitment signals are."
							</em>
						</p>
						<p className="mt-4 text-[12px] tracking-[0.12em] uppercase text-white/30 font-medium">
							Aletheia Intelligence Philosophy
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
