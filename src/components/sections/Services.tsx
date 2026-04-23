"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
	const sectionRef = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		const ctx = gsap.context(() => {
			gsap.fromTo(
				".svc-eyebrow",
				{ opacity: 0, y: 20, letterSpacing: "0.5em" },
				{
					opacity: 1,
					y: 0,
					letterSpacing: "0.15em",
					duration: 1.1,
					ease: "power4.out",
					scrollTrigger: {
						trigger: ".svc-header",
						start: "top 75%",
					},
				},
			);

			gsap.fromTo(
				".svc-headline",
				{ opacity: 0, y: 55, skewY: 2 },
				{
					opacity: 1,
					y: 0,
					skewY: 0,
					duration: 1.4,
					ease: "expo.out",
					delay: 0.12,
					scrollTrigger: {
						trigger: ".svc-header",
						start: "top 75%",
					},
				},
			);

			gsap.fromTo(
				".svc-subtext",
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power3.out",
					delay: 0.28,
					scrollTrigger: {
						trigger: ".svc-header",
						start: "top 75%",
					},
				},
			);

			gsap.fromTo(
				".svc-rule",
				{ scaleX: 0, transformOrigin: "left center" },
				{
					scaleX: 1,
					duration: 1.6,
					ease: "expo.inOut",
					delay: 0.2,
					scrollTrigger: {
						trigger: ".svc-header",
						start: "top 75%",
					},
				},
			);

			const cards = section.querySelectorAll<HTMLElement>(".svc-card");
			const trackWrapper =
				section.querySelector<HTMLElement>(".svc-track-wrapper");
			if (!trackWrapper || cards.length === 0) return;

			gsap.set(cards, (i: number | string) => ({
				x: i === 0 ? "0%" : "100%",
				opacity: i === 0 ? 1 : 0,
				scale: i === 0 ? 1 : 0.96,
			}));

			const firstCard = cards[0];

			gsap.fromTo(
				firstCard.querySelector(".card-index"),
				{ opacity: 0, scale: 2.8, filter: "blur(10px)" },
				{
					opacity: 1,
					scale: 1,
					filter: "blur(0px)",
					duration: 0.75,
					ease: "back.out(1.5)",
					delay: 0.3,
				},
			);

			gsap.fromTo(
				firstCard.querySelector(".card-icon"),
				{ opacity: 0, rotate: -25, scale: 0.4 },
				{
					opacity: 1,
					rotate: 0,
					scale: 1,
					duration: 0.5,
					ease: "back.out(2.2)",
					delay: 0.5,
				},
			);

			gsap.fromTo(
				firstCard.querySelector(".card-title"),
				{ clipPath: "inset(0 100% 0 0)", opacity: 0 },
				{
					clipPath: "inset(0 0% 0 0)",
					opacity: 1,
					duration: 0.8,
					ease: "expo.out",
					delay: 0.55,
				},
			);

			gsap.fromTo(
				firstCard.querySelector(".card-desc"),
				{ opacity: 0, y: 14 },
				{
					opacity: 1,
					y: 0,
					duration: 0.6,
					ease: "power3.out",
					delay: 0.7,
				},
			);

			const animatedIn = new Set<number>([0]);

			function animateCardIn(card: HTMLElement) {
				gsap.fromTo(
					card.querySelector(".card-index"),
					{ opacity: 0, scale: 2.8, filter: "blur(10px)" },
					{
						opacity: 1,
						scale: 1,
						filter: "blur(0px)",
						duration: 0.75,
						ease: "back.out(1.5)",
					},
				);

				gsap.fromTo(
					card.querySelector(".card-icon"),
					{ opacity: 0, rotate: -25, scale: 0.4 },
					{
						opacity: 1,
						rotate: 0,
						scale: 1,
						duration: 0.5,
						ease: "back.out(2.2)",
						delay: 0.1,
					},
				);
				gsap.fromTo(
					card.querySelector(".card-title"),
					{ clipPath: "inset(0 100% 0 0)", opacity: 0 },
					{
						clipPath: "inset(0 0% 0 0)",
						opacity: 1,
						duration: 0.8,
						ease: "expo.out",
						delay: 0.12,
					},
				);
				gsap.fromTo(
					card.querySelector(".card-divider"),
					{ scaleX: 0, transformOrigin: "left" },
					{
						scaleX: 1,
						duration: 0.75,
						ease: "expo.inOut",
						delay: 0.2,
					},
				);
				gsap.fromTo(
					card.querySelector(".card-desc"),
					{ opacity: 0, y: 14 },
					{
						opacity: 1,
						y: 0,
						duration: 0.6,
						ease: "power3.out",
						delay: 0.25,
					},
				);
				gsap.fromTo(
					card.querySelectorAll(".card-tag"),
					{ opacity: 0, scale: 0.55, y: 10 },
					{
						opacity: 1,
						scale: 1,
						y: 0,
						duration: 0.35,
						ease: "back.out(2.2)",
						stagger: 0.065,
						delay: 0.3,
					},
				);
				gsap.fromTo(
					card.querySelector(".card-right"),
					{ opacity: 0, x: 28 },
					{
						opacity: 1,
						x: 0,
						duration: 0.55,
						ease: "power3.out",
						delay: 0.35,
					},
				);
			}

			const dots = section.querySelectorAll<HTMLElement>(".svc-dot");

			function updateDots(index: number) {
				dots.forEach((dot, i) => {
					if (i === index) {
						gsap.to(dot, {
							scale: 1.4,
							opacity: 1,
							duration: 0.3,
							ease: "back.out(2)",
						});
						dot.style.background = "var(--dot-accent, #C9981A)";
					} else if (i < index) {
						gsap.to(dot, { scale: 1, opacity: 0.5, duration: 0.3 });
						dot.style.background = "#121212";
					} else {
						gsap.to(dot, {
							scale: 1,
							opacity: 0.25,
							duration: 0.3,
						});
						dot.style.background = "#121212";
					}
				});
			}

			updateDots(0);

			ScrollTrigger.create({
				trigger: trackWrapper,
				start: "center center",
				end: () => `+=${(cards.length - 1) * window.innerHeight}`,
				invalidateOnRefresh: true,
				pin: true,
				pinSpacing: true,
				anticipatePin: 1,
				scrub: 0.6,
				onUpdate: (self) => {
					const rawProgress = self.progress * (cards.length - 1);
					const activeIndex = Math.min(
						Math.floor(rawProgress),
						cards.length - 2,
					);
					const cardProgress = rawProgress - activeIndex;

					const dotIndex = Math.round(rawProgress);
					updateDots(Math.min(dotIndex, cards.length - 1));

					const incomingIndex = activeIndex + 1;
					if (
						cardProgress > 0.5 &&
						!animatedIn.has(incomingIndex) &&
						incomingIndex < cards.length
					) {
						animatedIn.add(incomingIndex);
						animateCardIn(cards[incomingIndex]);
					}

					cards.forEach((card, i) => {
						if (i < activeIndex) {
							gsap.set(card, {
								x: "0%",
								opacity: 1,
								scale: 1,
								zIndex: i,
							});
						} else if (i === activeIndex) {
							gsap.set(card, {
								x: `${-cardProgress * 5}%`,
								opacity: 1,
								scale: 1 - cardProgress * 0.02,
								zIndex: cards.length - i,
							});
						} else if (i === activeIndex + 1) {
							gsap.set(card, {
								x: `${(1 - cardProgress) * 100}%`,
								opacity: 1,
								scale: 1,
								zIndex: cards.length - i + 1,
							});
						} else {
							gsap.set(card, {
								x: "100%",
								opacity: 1,
								scale: 1,
								zIndex: 0,
							});
						}
					});
				},
			});

			gsap.fromTo(
				".svc-cta-block",
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 1.2,
					ease: "expo.out",
					scrollTrigger: {
						trigger: ".svc-cta-block",
						start: "top 88%",
					},
				},
			);
		}, section);

		return () => ctx.revert();
	}, []);

	return (
		<section
			id="services"
			ref={sectionRef}
			className="relative w-full bg-[#F5F0E8] overflow-hidden py-28 md:py-36"
		>
			{/* Background orbs */}
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
			<motion.div
				animate={{ x: [0, -8, 0], y: [0, 12, 0] }}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 2,
				}}
				className="absolute top-[60%] left-[45%] w-50 h-50 rounded-full bg-[radial-gradient(circle,#FFF8F0_0%,transparent_70%)] opacity-60"
			/>

			<div className="absolute inset-0 opacity-[0.035] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
			<div
				className="absolute inset-0 opacity-[0.05] z-2"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43 7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm28-65c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm23-11c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm-6 60c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm29 15c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z' fill='%23666' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
					backgroundSize: "180px 180px",
				}}
			/>

			<div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
				<div className="svc-header mb-16 md:mb-24">
					<p className="svc-eyebrow mb-4 text-[11px] tracking-[0.15em] text-[#1A7A4C] uppercase font-medium opacity-0">
						Intelligence Framework
					</p>
					<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
						<h2 className="svc-headline font-display text-[clamp(44px,6vw,88px)] font-light leading-[0.95] tracking-[-0.025em] text-[#121212] opacity-0">
							Five ways <em className="text-[#C9981A]">truth</em>
							<br />
							becomes your edge.
						</h2>
						<p className="svc-subtext max-w-sm text-[14px] leading-relaxed text-[#777] font-light opacity-0 md:text-right md:mb-1">
							Every engagement is built on rigorous methodology.
							No guesswork. No comfort. Only clarity backed by
							evidence.
						</p>
					</div>
					<div className="svc-rule mt-8 h-px bg-linear-to-r from-[#C9981A] via-[#121212]/15 to-transparent" />
				</div>
			</div>

			<div className="relative z-10 w-full">
				<div
					className="svc-track-wrapper w-full overflow-hidden"
					style={{ height: "clamp(420px, 55vh, 520px)" }}
				>
					{SERVICES.map((svc, i) => {
						const Icon = svc.icon;
						return (
							<div
								key={svc.index}
								className="svc-card absolute inset-0 will-change-transform"
								style={{
									zIndex: SERVICES.length - i,
								}}
							>
								<div className="absolute inset-y-4 left-6 right-6 md:left-10 md:right-10 bg-[#FDFAF5] border border-black/[0.07] rounded-[20px] shadow-[0_2px_16px_rgba(0,0,0,0.05)] overflow-hidden">
									<div className="max-w-6xl mx-auto px-6 md:px-10 h-full">
										<div className="grid grid-cols-1 md:grid-cols-[88px_1fr_190px] gap-2 md:gap-10 items-start h-full pt-6 md:pt-8">
											<div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2">
												<span
													className="card-index font-display text-[58px] md:text-[70px] font-thin leading-none tracking-[-0.04em]"
													style={{
														color: svc.accent,
													}}
												>
													{svc.index}
												</span>
												<div
													className="card-icon w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
													style={{
														background: svc.iconBg,
													}}
												>
													<Icon
														className="w-5 h-5"
														style={{
															color: svc.accent,
														}}
													/>
												</div>
											</div>

											<div className="min-w-0 ">
												<h3 className="card-title font-display text-[clamp(24px,3vw,40px)] font-light leading-tight text-[#121212] mb-1.5 tracking-[-0.01em]">
													{svc.title}
												</h3>
												<p
													className="text-[12px] tracking-[0.08em] uppercase font-medium mb-2"
													style={{
														color: svc.accent,
													}}
												>
													{svc.subtitle}
												</p>
												<div
													className="card-divider h-px mb-2"
													style={{
														background: `linear-gradient(to right, ${svc.accent}55, transparent)`,
													}}
												/>
												<p className="card-desc text-[15px] leading-relaxed text-[#555] font-light mb-5 max-w-xl">
													{svc.description}
												</p>
												<div className="hidden md:flex flex-row flex-wrap gap-2">
													{svc.tags.map((tag) => (
														<span
															key={tag}
															className="card-tag text-[11px] tracking-[0.05em] uppercase px-2 md:px-3 py-1.5 rounded-full font-medium transition-[transform,box-shadow] duration-220 ease-[ease] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
															style={{
																background:
																	svc.tagBg,
																color: svc.accent,
															}}
														>
															{tag}
														</span>
													))}
												</div>
											</div>

											<div className="hidden card-right md:flex flex-row md:flex-col items-start md:items-end justify-between md:justify-start gap-4 md:gap-6">
												<div className="md:text-right">
													<p className="text-[10px] tracking-[0.12em] uppercase text-[#AAA] mb-1 font-medium">
														Deliverable
													</p>
													<p className="text-[13px] leading-snug text-[#333] font-light md:text-right max-w-40">
														{svc.deliverable}
													</p>
												</div>
												<a
													href="#contact"
													className="group flex items-center gap-1.5 text-[12px] tracking-[0.06em] uppercase font-medium text-[#AAA] hover:text-[#121212] transition-colors duration-300 whitespace-nowrap"
												>
													Learn more
													<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
				<div className="flex items-center justify-center gap-2.5 mt-8">
					{SERVICES.map((svc, i) => (
						<div
							key={i}
							className="svc-dot w-1.5 h-1.5 rounded-full bg-[#121212] opacity-25 will-change-transform"
							style={
								{
									"--dot-accent": svc.accent,
								} as React.CSSProperties
							}
						/>
					))}
				</div>

				<p className="text-center text-[11px] tracking-widest uppercase text-[#AAA] mt-4 font-medium">
					Scroll to explore
				</p>

				<div className="svc-cta-block mt-20 md:mt-28 opacity-0">
					<div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center border border-black/[0.07] bg-linear-[135deg,#FDFAF5_0%,#F5F0E8_60%,#FFF8F0_100%] shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
						<div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[radial-gradient(circle,#D4E8C2,transparent_70%)] opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
						<div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[radial-gradient(circle,#BAE6FD,transparent_70%)] opacity-40 translate-x-1/2 translate-y-1/2 pointer-events-none" />
						<div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

						<div className="relative z-10">
							<p className="mb-4 text-[11px] tracking-[0.18em] uppercase text-[#1A7A4C] font-medium">
								Ready to know the truth?
							</p>
							<h3 className="font-display text-[clamp(32px,4.5vw,64px)] font-light leading-[1.05] tracking-[-0.02em] text-[#121212] mb-5">
								No pitch. Just an honest
								<br />
								<em className="text-[#C9981A]">
									conversation.
								</em>
							</h3>
							<p className="text-[15px] text-[#777] font-light mb-10 max-w-md mx-auto leading-relaxed">
								Every engagement begins with a discovery call.
								We listen first, diagnose second, and recommend
								only what will genuinely move the needle.
							</p>
							<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
								<Link href="#contact" className="cta-primary">
									<span>Book a Discovery Call</span>
									<ArrowRight className="w-4 h-4" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
