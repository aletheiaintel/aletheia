"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { STATS, TESTIMONIALS } from "@/data";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		const ctx = gsap.context(() => {
			// ── Header ──────────────────────────────────────────────────────
			gsap.fromTo(
				".test-eyebrow",
				{ opacity: 0, letterSpacing: "0.5em" },
				{
					opacity: 1,
					letterSpacing: "0.18em",
					duration: 1.2,
					ease: "power4.out",
					scrollTrigger: {
						trigger: ".test-header",
						start: "top 78%",
					},
				},
			);
			gsap.fromTo(
				".test-headline",
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 1.4,
					ease: "expo.out",
					delay: 0.1,
					scrollTrigger: {
						trigger: ".test-header",
						start: "top 78%",
					},
				},
			);

			// ── Stats — count-up animation ──────────────────────────────────
			// Parse a stat string like "₦4M+", "2.8×", "94%" into parts
			function parseStat(raw: string) {
				const match = raw.match(/^([^0-9]*)(\d+\.?\d*)(.*)$/);
				if (!match)
					return { prefix: "", num: 0, suffix: raw, decimals: 0 };
				const [, prefix, numStr, suffix] = match;
				const decimals = numStr.includes(".")
					? numStr.split(".")[1].length
					: 0;
				return { prefix, num: parseFloat(numStr), suffix, decimals };
			}

			section
				.querySelectorAll<HTMLElement>(".test-stat-num")
				.forEach((el, i) => {
					const raw = el.dataset.value ?? el.textContent ?? "";
					const { prefix, num, suffix, decimals } = parseStat(raw);
					const counter = { val: 0 };

					// Entrance: fade + scale up, then immediately start count
					gsap.fromTo(
						el,
						{ opacity: 0, y: 30, scale: 0.7 },
						{
							opacity: 1,
							y: 0,
							scale: 1,
							duration: 0.7,
							ease: "back.out(1.8)",
							delay: i * 0.12,
							scrollTrigger: {
								trigger: ".test-stats",
								start: "top 82%",
							},
						},
					);

					// Count-up tween — runs alongside the entrance
					gsap.to(counter, {
						val: num,
						duration: 2,
						ease: "power2.out",
						delay: i * 0.12,
						scrollTrigger: {
							trigger: ".test-stats",
							start: "top 82%",
						},
						onUpdate() {
							el.textContent =
								prefix + counter.val.toFixed(decimals) + suffix;
						},
						onComplete() {
							// Guarantee the exact final value is shown
							el.textContent =
								prefix + num.toFixed(decimals) + suffix;
						},
					});

					const label =
						el.parentElement?.querySelector<HTMLElement>(
							".test-stat-label",
						);
					if (label) {
						gsap.fromTo(
							label,
							{ opacity: 0, y: 10 },
							{
								opacity: 1,
								y: 0,
								duration: 0.6,
								ease: "power3.out",
								delay: i * 0.12 + 0.2,
								scrollTrigger: {
									trigger: ".test-stats",
									start: "top 82%",
								},
							},
						);
					}
				});

			// ── Testimonial cards ────────────────────────────────────────────
			const cards = section.querySelectorAll<HTMLElement>(".test-card");

			cards.forEach((card, i) => {
				const baseRotation = parseFloat(card.dataset.rotation || "0");
				const accentColor = card.dataset.accent || "#C9981A";
				const delay = i * 0.08;

				gsap.set(card, {
					transformPerspective: 900,
					opacity: 0,
					y: 30,
					scale: 0.97,
					rotation: baseRotation,
				});

				// ── Fade-up entrance ─────────────────────────────────────
				gsap.to(card, {
					opacity: 1,
					y: 0,
					scale: 1,
					rotation: baseRotation,
					duration: 0.65,
					ease: "power3.out",
					delay,
					scrollTrigger: {
						trigger: ".test-grid",
						start: "top 85%",
					},
					onComplete: () => {
						gsap.to(card, {
							y: `+=${4 + (i % 3) * 2}`,
							rotation: baseRotation,
							duration: 2.4 + (i % 3) * 0.5,
							ease: "sine.inOut",
							yoyo: true,
							repeat: -1,
							delay: i * 0.1,
						});
					},
				});

				// ── Quote fade ───────────────────────────────────────────
				const words = card.querySelectorAll<HTMLElement>(".test-word");
				if (words.length) {
					gsap.fromTo(
						words,
						{ opacity: 0 },
						{
							opacity: 1,
							duration: 0.5,
							ease: "power2.out",
							delay: delay + 0.18,
							scrollTrigger: {
								trigger: ".test-grid",
								start: "top 85%",
							},
						},
					);
				}

				// ── Author + badge ───────────────────────────────────────
				const author = card.querySelector<HTMLElement>(".test-author");
				const badge = card.querySelector<HTMLElement>(".test-badge");
				[author, badge].filter(Boolean).forEach((el) => {
					gsap.fromTo(
						el!,
						{ opacity: 0, y: 6 },
						{
							opacity: 1,
							y: 0,
							duration: 0.45,
							ease: "power2.out",
							delay: delay + 0.28,
							scrollTrigger: {
								trigger: ".test-grid",
								start: "top 85%",
							},
						},
					);
				});

				// ── 3D tilt hover ────────────────────────────────────────
				const inner =
					card.querySelector<HTMLElement>(".test-card-inner");

				const handleMouseMove = (e: MouseEvent) => {
					const rect = card.getBoundingClientRect();
					const dx =
						(e.clientX - (rect.left + rect.width / 2)) /
						(rect.width / 2);
					const dy =
						(e.clientY - (rect.top + rect.height / 2)) /
						(rect.height / 2);

					gsap.to(card, {
						rotateX: -dy * 13,
						rotateY: dx * 13,
						z: 40,
						scale: 1.04,
						rotation: baseRotation,
						duration: 0.35,
						ease: "power2.out",
						overwrite: "auto",
					});

					// Inner content moves opposite — creates depth
					if (inner) {
						gsap.to(inner, {
							x: dx * -10,
							y: dy * -7,
							duration: 0.35,
							ease: "power2.out",
							overwrite: "auto",
						});
					}

					// Accent glow on the card surface
					gsap.to(card.querySelector(".test-card-surface"), {
						boxShadow: `0 24px 60px rgba(0,0,0,0.5), 0 0 0 1.5px ${accentColor}40, inset 0 1px 0 rgba(255,255,255,0.08)`,
						duration: 0.35,
						ease: "power2.out",
						overwrite: "auto",
					});
				};

				const handleMouseLeave = () => {
					// Kill the running float so the elastic reset isn't
					// immediately overridden, then re-launch it after settle
					gsap.killTweensOf(card, "y,rotation");

					gsap.to(card, {
						rotateX: 0,
						rotateY: 0,
						z: 0,
						scale: 1,
						rotation: baseRotation,
						duration: 0.9,
						ease: "elastic.out(1, 0.45)",
						overwrite: "auto",
					});

					if (inner) {
						gsap.to(inner, {
							x: 0,
							y: 0,
							duration: 0.9,
							ease: "elastic.out(1, 0.45)",
							overwrite: "auto",
						});
					}

					gsap.to(card.querySelector(".test-card-surface"), {
						boxShadow: "0 2px 20px rgba(0,0,0,0.4)",
						duration: 0.5,
						ease: "power2.out",
						overwrite: "auto",
					});

					// Re-launch idle float after elastic settle
					gsap.to(card, {
						y: `+=${5 + (i % 3) * 2}`,
						rotation: baseRotation,
						duration: 2.2 + (i % 3) * 0.6,
						ease: "sine.inOut",
						yoyo: true,
						repeat: -1,
						delay: 0.6,
					});
				};

				card.addEventListener("mousemove", handleMouseMove);
				card.addEventListener("mouseleave", handleMouseLeave);
			});
		}, section);

		return () => ctx.revert();
	}, []);

	return (
		<section
			id="our-work"
			ref={sectionRef}
			className="relative w-full bg-[#0D0D0D] overflow-hidden py-28 md:py-40"
		>
			{/* Dot texture */}
			<div
				className="absolute inset-0 opacity-[0.04] pointer-events-none"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43 7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm28-65c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm23-11c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm-6 60c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm29 15c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z' fill='%23888888' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
					backgroundSize: "180px 180px",
				}}
			/>

			{/* Ambient orbs */}
			<motion.div
				animate={{ x: [0, -20, 0], y: [0, 18, 0], scale: [1, 1.06, 1] }}
				transition={{
					duration: 16,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute top-[-5%] right-[10%] w-137.5 h-137.5 rounded-full pointer-events-none"
				style={{
					background:
						"radial-gradient(circle, #C9981A 0%, #6B4E0A 40%, transparent 70%)",
					opacity: 0.22,
				}}
			/>
			<motion.div
				animate={{ x: [0, 22, 0], y: [0, -14, 0], scale: [1, 1.04, 1] }}
				transition={{
					duration: 18,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 4,
				}}
				className="absolute bottom-[5%] left-[5%] w-100 h-100 rounded-full pointer-events-none"
				style={{
					background:
						"radial-gradient(circle, #1A7A4C 0%, transparent 70%)",
					opacity: 0.28,
				}}
			/>

			<div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
				{/* Header */}
				<div className="test-header mb-16 md:mb-20">
					<p className="test-eyebrow mb-4 text-[11px] tracking-[0.18em] text-[#1A7A4C] uppercase font-medium opacity-0">
						Client Results
					</p>
					<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
						<h2 className="test-headline font-serif text-[clamp(42px,6vw,84px)] font-light leading-[0.95] tracking-[-0.025em] text-white opacity-0">
							Truth, confirmed
							<br />
							by those who{" "}
							<em className="text-[#C9981A]">acted on it.</em>
						</h2>
						<p className="max-w-xs text-[14px] leading-relaxed text-white/50 font-light md:text-right md:mb-1">
							Not testimonials we asked for. Results we were proud
							enough to share.
						</p>
					</div>
				</div>

				{/* Stats row */}
				<div className="test-stats grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden mb-16 md:mb-20">
					{STATS.map((stat, i) => (
						<div
							key={i}
							className="bg-[#1A1A1A] px-6 py-7 md:px-8 md:py-9"
						>
							<div
								className="test-stat-num font-serif text-[clamp(36px,5vw,58px)] font-light leading-none tracking-[-0.03em] text-white mb-2 opacity-0"
								data-value={stat.value}
							>
								{stat.value}
							</div>
							<div className="test-stat-label text-[11px] tracking-widest uppercase text-white/40 font-medium opacity-0">
								{stat.label}
							</div>
						</div>
					))}
				</div>

				{/* Testimonial grid */}
				<div className="test-grid grid grid-cols-1 md:grid-cols-3 gap-5">
					{TESTIMONIALS.map((t, i) => (
						<div
							key={i}
							className="test-card opacity-0 cursor-pointer"
							data-rotation={t.rotation}
							data-accent={t.accentColor}
						>
							{/* test-card-inner: receives the parallax translation on hover */}
							<div className="test-card-inner h-full">
								{/* test-card-surface: receives the box-shadow glow */}
								<div
									className="test-card-surface rounded-2xl border border-white/8 p-7 h-full flex flex-col justify-between"
									style={{
										background: "#1C1C1C",
										boxShadow: "0 2px 20px rgba(0,0,0,0.4)",
									}}
								>
									<div>
										{/* Quote — split into word spans for stagger */}
										<p className="font-serif text-[15px] leading-relaxed text-white/75 font-light mb-6">
											{`“${t.quote}”`
												.split(" ")
												.map((word, wi) => (
													<span
														key={wi}
														className="test-word inline-block mr-[0.22em]"
													>
														{word}
													</span>
												))}
										</p>
									</div>

									<div className="flex items-end justify-between">
										{/* Author */}
										<div className="test-author opacity-0">
											<p className="text-[13px] font-medium text-white">
												{t.author}
											</p>
											<p className="text-[11px] text-white/50 mt-0.5">
												{t.role}, {t.company}
											</p>
										</div>

										{/* Service badge */}
										<span
											className="test-badge opacity-0 text-[10px] tracking-[0.08em] uppercase font-medium px-2.5 py-1 rounded-full shrink-0"
											style={{
												color: t.accentColor,
												background: `${t.accentColor}14`,
												border: `1px solid ${t.accentColor}28`,
											}}
										>
											{t.service}
										</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
