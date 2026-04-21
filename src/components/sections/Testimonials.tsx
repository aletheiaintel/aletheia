// "use client";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion } from "framer-motion";

// gsap.registerPlugin(ScrollTrigger);

// const TESTIMONIALS = [
// 	{
// 		quote: "Aletheia didn't tell us what we wanted to hear. They told us what we needed to hear. The validation report killed a £200k mistake before we made it.",
// 		author: "James Okafor",
// 		role: "Founder & CEO",
// 		company: "Helix Ventures",
// 		service: "PMF Validation",
// 		accentColor: "#C9981A",
// 		rotation: "-2deg",
// 	},
// 	{
// 		quote: "Our messaging was generic and losing deals. After the brand positioning work, our conversion rate on discovery calls went from 18% to 41% in eight weeks.",
// 		author: "Chioma Adeyemi",
// 		role: "Co-Founder",
// 		company: "Prism Analytics",
// 		service: "Brand Strategy",
// 		accentColor: "#1A7A4C",
// 		rotation: "1.5deg",
// 	},
// 	{
// 		quote: "The market intelligence report they delivered was the kind of work I'd expect from a Big Four firm at a fraction of the cost. It became our Series A cornerstone.",
// 		author: "Kwame Mensah",
// 		role: "Managing Director",
// 		company: "Nexus Capital",
// 		service: "Market Intelligence",
// 		accentColor: "#0284C7",
// 		rotation: "-1deg",
// 	},
// 	{
// 		quote: "Three months of unfocused launch planning solved in two weeks. The GTM playbook gave our team a single, clear direction. We hit our 90-day revenue target in 60.",
// 		author: "Adaeze Nwosu",
// 		role: "Head of Growth",
// 		company: "Sola Technologies",
// 		service: "Go-To-Market Strategy",
// 		accentColor: "#E5484D",
// 		rotation: "2deg",
// 	},
// 	{
// 		quote: "The Brand Activation retainer changed how we show up online. Our content finally feels like us — strategic, not performative. Pipeline influence is measurable now.",
// 		author: "Emeka Eze",
// 		role: "Chief Marketing Officer",
// 		company: "Darta Group",
// 		service: "Brand Activation",
// 		accentColor: "#C9981A",
// 		rotation: "-1.5deg",
// 	},
// 	{
// 		quote: "Aletheia's truth-first approach is rare. Most consultants validate your idea and take the money. They genuinely told us to pivot. Best advice we ever got.",
// 		author: "Fatima Al-Rashid",
// 		role: "Entrepreneur",
// 		company: "Meridian Studio",
// 		service: "PMF Validation",
// 		accentColor: "#1A7A4C",
// 		rotation: "1deg",
// 	},
// ];

// const STATS = [
// 	{ value: "48+", label: "Markets Researched" },
// 	{ value: "94%", label: "Client Satisfaction" },
// 	{ value: "2.8×", label: "Average ROI Lift" },
// 	{ value: "£4M+", label: "Mistakes Prevented" },
// ];

// export default function Testimonials() {
// 	const sectionRef = useRef<HTMLElement>(null);

// 	useEffect(() => {
// 		const section = sectionRef.current;
// 		if (!section) return;

// 		const ctx = gsap.context(() => {
// 			// Header fade + rise
// 			gsap.fromTo(
// 				".test-eyebrow",
// 				{ opacity: 0, letterSpacing: "0.5em" },
// 				{
// 					opacity: 1,
// 					letterSpacing: "0.18em",
// 					duration: 1.2,
// 					ease: "power4.out",
// 					scrollTrigger: {
// 						trigger: ".test-header",
// 						start: "top 78%",
// 					},
// 				},
// 			);
// 			gsap.fromTo(
// 				".test-headline",
// 				{ opacity: 0, y: 50 },
// 				{
// 					opacity: 1,
// 					y: 0,
// 					duration: 1.4,
// 					ease: "expo.out",
// 					delay: 0.1,
// 					scrollTrigger: {
// 						trigger: ".test-header",
// 						start: "top 78%",
// 					},
// 				},
// 			);

// 			// Stats counter animation
// 			const statEls =
// 				section.querySelectorAll<HTMLElement>(".test-stat-num");
// 			statEls.forEach((el, i) => {
// 				gsap.fromTo(
// 					el,
// 					{ opacity: 0, y: 30, scale: 0.7 },
// 					{
// 						opacity: 1,
// 						y: 0,
// 						scale: 1,
// 						duration: 0.8,
// 						ease: "back.out(1.8)",
// 						delay: i * 0.12,
// 						scrollTrigger: {
// 							trigger: ".test-stats",
// 							start: "top 82%",
// 						},
// 					},
// 				);
// 				gsap.fromTo(
// 					el.parentElement?.querySelector(".test-stat-label"),
// 					{ opacity: 0, y: 10 },
// 					{
// 						opacity: 1,
// 						y: 0,
// 						duration: 0.6,
// 						ease: "power3.out",
// 						delay: i * 0.12 + 0.2,
// 						scrollTrigger: {
// 							trigger: ".test-stats",
// 							start: "top 82%",
// 						},
// 					},
// 				);
// 			});

// 			// Testimonial cards: staggered reveal with rotation spring
// 			const cards = section.querySelectorAll<HTMLElement>(".test-card");
// 			cards.forEach((card, i) => {
// 				const row = Math.floor(i / 3);
// 				const col = i % 3;

// 				gsap.fromTo(
// 					card,
// 					{
// 						opacity: 0,
// 						y: 60 + row * 15,
// 						rotate: parseFloat(card.dataset.rotation || "0") * 2,
// 						scale: 0.92,
// 					},
// 					{
// 						opacity: 1,
// 						y: 0,
// 						rotate: parseFloat(card.dataset.rotation || "0"),
// 						scale: 1,
// 						duration: 1.1,
// 						ease: "expo.out",
// 						delay: col * 0.12 + row * 0.2,
// 						scrollTrigger: {
// 							trigger: ".test-grid",
// 							start: "top 80%",
// 						},
// 					},
// 				);

// 				// Hover magnetic effect
// 				const handleMouseMove = (e: MouseEvent) => {
// 					const rect = card.getBoundingClientRect();
// 					const cx = rect.left + rect.width / 2;
// 					const cy = rect.top + rect.height / 2;
// 					const dx = (e.clientX - cx) / rect.width;
// 					const dy = (e.clientY - cy) / rect.height;
// 					gsap.to(card, {
// 						x: dx * 8,
// 						y: dy * 5,
// 						duration: 0.4,
// 						ease: "power2.out",
// 					});
// 				};
// 				const handleMouseLeave = () => {
// 					gsap.to(card, {
// 						x: 0,
// 						y: 0,
// 						rotate: parseFloat(card.dataset.rotation || "0"),
// 						duration: 0.6,
// 						ease: "elastic.out(1, 0.5)",
// 					});
// 				};

// 				card.addEventListener("mousemove", handleMouseMove);
// 				card.addEventListener("mouseleave", handleMouseLeave);
// 			});
// 		}, section);

// 		return () => ctx.revert();
// 	}, []);

// 	return (
// 		<section
// 			id="testimonials"
// 			ref={sectionRef}
// 			className="relative w-full bg-[#F5F0E8] overflow-hidden py-28 md:py-40"
// 		>
// 			{/* Background textures */}
// 			<div className="absolute inset-0 opacity-[0.035] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
// 			<motion.div
// 				animate={{ x: [0, -20, 0], y: [0, 18, 0], scale: [1, 1.06, 1] }}
// 				transition={{
// 					duration: 16,
// 					repeat: Infinity,
// 					ease: "easeInOut",
// 				}}
// 				className="absolute top-[-5%] right-[10%] w-[550px] h-[550px] rounded-full"
// 				style={{
// 					background:
// 						"radial-gradient(circle, #F2C594 0%, #E8B5D4 40%, transparent 70%)",
// 					opacity: 0.35,
// 				}}
// 			/>
// 			<motion.div
// 				animate={{ x: [0, 22, 0], y: [0, -14, 0], scale: [1, 1.04, 1] }}
// 				transition={{
// 					duration: 18,
// 					repeat: Infinity,
// 					ease: "easeInOut",
// 					delay: 4,
// 				}}
// 				className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] rounded-full"
// 				style={{
// 					background:
// 						"radial-gradient(circle, #D4E8C2 0%, transparent 70%)",
// 					opacity: 0.5,
// 				}}
// 			/>

// 			<div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
// 				{/* Header */}
// 				<div className="test-header mb-16 md:mb-20">
// 					<p className="test-eyebrow mb-4 text-[11px] tracking-[0.18em] text-[#1A7A4C] uppercase font-medium opacity-0">
// 						Client Results
// 					</p>
// 					<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
// 						<h2 className="test-headline font-serif text-[clamp(42px,6vw,84px)] font-light leading-[0.95] tracking-[-0.025em] text-[#121212] opacity-0">
// 							Truth, confirmed
// 							<br />
// 							by those who{" "}
// 							<em className="text-[#C9981A]">acted on it.</em>
// 						</h2>
// 						<p className="max-w-xs text-[14px] leading-relaxed text-[#777] font-light md:text-right md:mb-1">
// 							Not testimonials we asked for. Results we were proud
// 							enough to share.
// 						</p>
// 					</div>
// 				</div>

// 				{/* Stats row */}
// 				<div className="test-stats grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10 rounded-2xl overflow-hidden mb-16 md:mb-20">
// 					{STATS.map((stat, i) => (
// 						<div
// 							key={i}
// 							className="bg-[#F5F0E8] px-6 py-7 md:px-8 md:py-9"
// 						>
// 							<div className="test-stat-num font-serif text-[clamp(36px,5vw,58px)] font-light leading-none tracking-[-0.03em] text-[#121212] mb-2 opacity-0">
// 								{stat.value}
// 							</div>
// 							<div className="test-stat-label text-[11px] tracking-[0.1em] uppercase text-[#888] font-medium opacity-0">
// 								{stat.label}
// 							</div>
// 						</div>
// 					))}
// 				</div>

// 				{/* Testimonial grid */}
// 				<div className="test-grid grid grid-cols-1 md:grid-cols-3 gap-5">
// 					{TESTIMONIALS.map((t, i) => (
// 						<div
// 							key={i}
// 							className="test-card opacity-0 cursor-default"
// 							data-rotation={t.rotation}
// 							style={{ transform: `rotate(${t.rotation})` }}
// 						>
// 							<div
// 								className="rounded-2xl border border-black/[0.07] p-7 h-full flex flex-col justify-between"
// 								style={{
// 									background: "#FDFAF5",
// 									boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
// 								}}
// 							>
// 								<div>
// 									<div
// 										className="w-8 h-0.5 mb-5 rounded-full"
// 										style={{
// 											background: t.accentColor,
// 										}}
// 									/>
// 									<p className="font-serif text-[15px] leading-relaxed text-[#333] font-light mb-6">
// 										"{t.quote}"
// 									</p>
// 								</div>
// 								<div className="flex items-end justify-between">
// 									<div>
// 										<p className="text-[13px] font-medium text-[#121212]">
// 											{t.author}
// 										</p>
// 										<p className="text-[11px] text-[#888] mt-0.5">
// 											{t.role}, {t.company}
// 										</p>
// 									</div>
// 									<span
// 										className="text-[10px] tracking-[0.08em] uppercase font-medium px-2.5 py-1 rounded-full shrink-0"
// 										style={{
// 											color: t.accentColor,
// 											background: `${t.accentColor}14`,
// 											border: `1px solid ${t.accentColor}28`,
// 										}}
// 									>
// 										{t.service}
// 									</span>
// 								</div>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

import React from "react";

const Testimonials = () => {
	return <div>Testimonials</div>;
};

export default Testimonials;
