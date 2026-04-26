"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
	BarChart3,
	ShieldCheck,
	Globe,
	Target,
	ArrowRight,
} from "lucide-react";
import FloatingIcon from "../shared/FloatingIcon";
import { TypeAnimation } from "react-type-animation";

const container: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
	},
};

const Hero = () => {
	return (
		<section className="relative min-h-max md:min-h-screen w-full overflow-hidden bg-[#121212] flex flex-col items-center justify-center pb-10 pt-25 md:pt-20">
			{/* Ambient orbs */}
			<motion.div
				animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.05, 1] }}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute -top-20 -left-20 w-105 h-105 rounded-full pointer-events-none"
				style={{
					background:
						"radial-gradient(circle, #C9981A 0%, #6B4E0A 40%, transparent 70%)",
					opacity: 0.28,
				}}
			/>
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
				className="absolute -bottom-16 -right-16 w-95 h-95 rounded-full pointer-events-none"
				style={{
					background:
						"radial-gradient(circle, #1A7A4C 0%, #0A3D26 45%, transparent 70%)",
					opacity: 0.35,
				}}
			/>
			<motion.div
				animate={{ x: [0, -20, 0], y: [0, 25, 0], scale: [1, 1.06, 1] }}
				transition={{
					duration: 16,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute -top-10 right-[5%] w-80 h-80 rounded-full pointer-events-none"
				style={{
					background:
						"radial-gradient(circle, #F59E0B 0%, #C9981A 25%, transparent 70%)",
					opacity: 0.12,
				}}
			/>
			<motion.div
				animate={{ x: [0, 18, 0], y: [0, -12, 0], scale: [1, 1.04, 1] }}
				transition={{
					duration: 18,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 2,
				}}
				className="absolute bottom-[10%] left-[5%] w-64 h-64 rounded-full pointer-events-none"
				style={{
					background:
						"radial-gradient(circle, #1A7A4C 0%, transparent 70%)",
					opacity: 0.22,
				}}
			/>

			{/* Dot texture */}
			<div
				className="absolute inset-0 opacity-[0.05] z-0 pointer-events-none"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43 7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm28-65c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm23-11c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm-6 60c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm29 15c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z' fill='%23C9981A' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
					backgroundSize: "180px 180px",
				}}
			/>

			{/* Floating icons */}
			<FloatingIcon
				className="top-[25%] left-[12%]"
				delay={0}
				icon={<BarChart3 className="w-4 h-4 text-[#4ADE80]" />}
				label="Years of Experience"
				value="10+"
				iconBg="rgba(26, 122, 76, 0.2)"
				valueColor="#4ADE80"
				dark
			/>
			<FloatingIcon
				className="top-[65%] left-[10%]"
				delay={1}
				icon={<Globe className="w-4 h-4 text-[#F59E0B]" />}
				label="Industries Served"
				value="18"
				iconBg="rgba(201, 152, 26, 0.2)"
				valueColor="#F59E0B"
				dark
			/>
			<FloatingIcon
				className="top-[25%] right-[10%]"
				delay={0.5}
				icon={<ShieldCheck className="w-4 h-4 text-[#38BDF8]" />}
				label="Proven Framework"
				value="4-Phase"
				iconBg="rgba(14, 165, 233, 0.2)"
				valueColor="#38BDF8"
				dark
			/>
			<FloatingIcon
				className="top-[60%] right-[6%]"
				delay={1.5}
				icon={<Target className="w-4 h-4 text-[#F87171]" />}
				label="Go/No-Go Verdicts Delivered"
				value="100%"
				iconBg="rgba(239, 68, 68, 0.2)"
				valueColor="#F87171"
				dark
			/>

			{/* Main content */}
			<motion.div
				className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
				variants={container}
				initial="hidden"
				animate="visible"
			>
				<motion.div
					variants={fadeUp}
					className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#1A7A4C]/40 bg-[#1A7A4C]/10 px-4 py-1.5 text-[13px] font-medium text-[#4ADE80]"
				>
					<span className="relative flex h-2 w-2 shrink-0">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1A7A4C] opacity-60" />
						<span className="relative inline-flex h-2 w-2 rounded-full bg-[#1A7A4C]" />
					</span>
					Truth
					<span className="text-[#C9981A]">·</span>
					Strategy
					<span className="text-[#C9981A]">·</span>
					Intelligence
				</motion.div>

				<motion.h1
					variants={fadeUp}
					className="mb-6 font-serif text-[clamp(44px,7vw,82px)] font-medium leading-[1.05] tracking-[-0.03em] text-white"
				>
					Reveal the truth <br />
					of your{" "}
					<span className="relative inline-block italic font-light text-[#C9981A]">
						<TypeAnimation
							sequence={[
								"Market.",
								2000,
								"Industry.",
								2000,
								"Audience.",
								2000,
								"Future.",
								2000,
								"Competitors.",
								2000,
							]}
							wrapper="span"
							cursor={true}
							repeat={Infinity}
						/>
					</span>
				</motion.h1>

				<motion.p
					variants={fadeUp}
					className="mb-10 max-w-xl text-[18px] md:text-[20px] font-light leading-relaxed text-white/60"
				>
					We provide the data-driven clarity needed to outpace
					competitors and launch with absolute certainty.
				</motion.p>

				<motion.div
					variants={fadeUp}
					className="flex flex-col sm:flex-row items-center gap-4"
				>
					<Link href="#contact" className="cta-primary">
						<span>Book a Discovery Call</span>
						<ArrowRight className="w-4 h-4" />
					</Link>
					<Link href="#services" className="cta-ghost-dark">
						Explore All Services
					</Link>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
