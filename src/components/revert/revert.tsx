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
		<section className="relative min-h-max md:min-h-screen w-full overflow-hidden bg-[#F5F0E8] flex flex-col items-center justify-center pb-10 pt-25 md:pt-20">
			{/* ORIGINAL BLOBS */}
			<motion.div
				animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.05, 1] }}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute -top-20 -left-20 w-105 h-105 rounded-full bg-[radial-gradient(circle,#D4E8C2_0%,#E8D5B7_40%,transparent_70%)] opacity-65"
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
				className="absolute -bottom-16 -right-16 w-95 h-95 rounded-full bg-[radial-gradient(circle,#F2C594_0%,#E8B5D4_50%,transparent_70%)] opacity-55"
			/>

			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 rounded-full bg-[radial-gradient(ellipse,#FFF8F0_0%,transparent_70%)] opacity-80" />

			{/* Sky-blue ambient blobs */}
			<motion.div
				animate={{ x: [0, -20, 0], y: [0, 25, 0], scale: [1, 1.06, 1] }}
				transition={{
					duration: 16,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute -top-10 right-[5%] w-80 h-80 rounded-full bg-[radial-gradient(circle,#BAE6FD_0%,#7DD3FC_20%,transparent_70%)] opacity-30"
			/>
			<motion.div
				animate={{ x: [0, 18, 0], y: [0, -12, 0], scale: [1, 1.04, 1] }}
				transition={{
					duration: 18,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 2,
				}}
				className="absolute bottom-[10%] left-[5%] w-64 h-64 rounded-full bg-[radial-gradient(circle,#E0F2FE_0%,#BAE6FD_30%,transparent_70%)] opacity-40"
			/>
			<motion.div
				animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 4,
				}}
				className="absolute top-[40%] right-[3%] w-48 h-48 rounded-full bg-[radial-gradient(circle,#7DD3FC_0%,transparent_65%)] opacity-20"
			/>

			{/*  ORIGINAL textures  */}
			<div className="absolute inset-0 opacity-[0.035] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
			<div
				className="absolute inset-0 opacity-[0.12] z-2"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43 7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm28-65c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm23-11c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm-6 60c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm29 15c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z' fill='%230EA5E9' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
					backgroundSize: "180px 180px",
					filter: "drop-shadow(0 0 3px rgba(14, 165, 233, 0.7))",
				}}
			/>

			{/* ORIGINAL floating icons */}
			<FloatingIcon
				className="top-[25%] left-[12%]"
				delay={0}
				icon={<BarChart3 className="w-4 h-4 text-[#1A7A4C]" />}
				label="Market Share"
				value="+34.2%"
				iconBg="#E8F5EE"
				valueColor="#1A7A4C"
			/>
			<FloatingIcon
				className="top-[60%] left-[15%] scale-90"
				delay={1}
				icon={<Globe className="w-4 h-4 text-[#C9981A]" />}
				label="Coverage"
				value="48 Markets"
				iconBg="#FFF3E0"
				valueColor="#C9981A"
			/>

			<FloatingIcon
				className="top-[30%] right-[15%]"
				delay={0.5}
				icon={<ShieldCheck className="w-4 h-4 text-[#0284C7]" />}
				label="Data Accuracy"
				value="99.7%"
				iconBg="#E0F2FE"
				valueColor="#0284C7"
			/>

			<FloatingIcon
				className="top-[55%] right-[10%] scale-110"
				delay={1.5}
				icon={<Target className="w-4 h-4 text-[#E5484D]" />}
				label="Avg. ROI Lift"
				value="2.8×"
				iconBg="#FFECEC"
				valueColor="#E5484D"
			/>

			{/*  MAIN CONTENT  */}
			<motion.div
				className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
				variants={container}
				initial="hidden"
				animate="visible"
			>
				<motion.div
					variants={fadeUp}
					className="mb-6 rounded-full border border-[#1A7A4C]/20 bg-[#1A7A4C]/5 px-4 py-1.5 text-[13px] font-medium text-[#1A7A4C]"
				>
					Available for Q2 Partnerships
				</motion.div>

				<motion.h1
					variants={fadeUp}
					className="mb-6 font-serif text-[clamp(44px,7vw,82px)] font-medium leading-[1.05] tracking-[-0.03em] text-[#121212]"
				>
					Reveal the truth <br />
					of your{" "}
					{/* === CHANGED: italic word gets a sky-blue shimmer underline === */}
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
					className="mb-10 max-w-xl text-[18px] md:text-[20px] font-light leading-relaxed text-[#555]"
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
					<Link href="#services" className="cta-ghost">
						Explore All Services
					</Link>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
