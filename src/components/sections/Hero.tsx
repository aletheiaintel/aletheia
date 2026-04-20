"use client";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, Activity, Layers, BarChart2 } from "lucide-react";

const container: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
	hidden: { opacity: 0, y: 22 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const fadeIn: Variants = {
	hidden: { opacity: 0, scale: 0.95 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.8, ease: "easeOut" },
	},
};

const nodes = [
	{
		id: "top",
		label: "Research",
		Icon: Search,
		style: "top-[2%] left-1/2 -translate-x-1/2",
	},
	{
		id: "right",
		label: "Validation",
		Icon: Activity,
		style: "top-1/2 right-0 -translate-y-1/2",
	},
	{
		id: "bottom",
		label: "Positioning",
		Icon: Layers,
		style: "bottom-[2%] left-1/2 -translate-x-1/2",
	},
	{
		id: "left",
		label: "Strategy",
		Icon: BarChart2,
		style: "top-1/2 left-0 -translate-y-1/2",
	},
];

const pills = [
	{ text: "ICP Validated", style: "top-[8%] right-[6%]", delay: "0s" },
	{
		text: "Competitors Mapped",
		style: "bottom-[14%] left-[2%]",
		delay: "1.8s",
	},
	{
		text: "Go-to-market Ready",
		style: "bottom-[28%] right-[0%]",
		delay: "3.2s",
	},
];

const Hero = () => {
	return (
		<section className="relative min-h-screen w-full overflow-hidden bg-[#020817] flex items-center">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_10%_50%,rgba(37,99,235,0.12),transparent_60%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_90%_50%,rgba(37,99,235,0.07),transparent_60%)]" />
			</div>

			<div className="container relative mx-auto grid grid-cols-1 gap-10 px-6 pt-28 pb-16 md:grid-cols-2 md:gap-10 md:pt-32 md:pb-20 lg:px-12">
				<motion.div
					className="flex flex-col items-center text-center md:items-start md:text-left"
					variants={container}
					initial="hidden"
					animate="visible"
				>
					<motion.div
						variants={item}
						className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-800/30 bg-blue-900/20 px-4 py-1.5"
					>
						<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400 shadow-[0_0_8px_#3b82f6]" />
						<span className="text-[11px] font-medium uppercase tracking-widest text-blue-300">
							Truth · Strategy · Intelligence
						</span>
					</motion.div>

					<motion.h1
						variants={item}
						className="mb-5 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-slate-50 md:text-5xl lg:text-[58px] text-balance"
					>
						We reveal the{" "}
						<em className="italic text-blue-400">truth</em>
						<br />
						of your market
						<br />
						before you commit.
					</motion.h1>

					<motion.p
						variants={item}
						className="mb-9 max-w-120 text-base font-light leading-[1.75] text-slate-400 md:text-[17px]"
					>
						Most businesses fail not because of bad products — but
						because they skipped validation, misread their market,
						or launched without a clear position. We exist to change
						that.
					</motion.p>

					<motion.div
						variants={item}
						className="mb-12 flex flex-col md:flex-row items-center gap-3"
					>
						<Button
							asChild
							className="h-12 rounded-[10px] bg-blue-600 px-6 text-[15px] font-medium shadow-[0_0_0_1px_rgba(37,99,235,0.4),0_8px_24px_rgba(37,99,235,0.25)] transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_0_0_1px_rgba(37,99,235,0.6),0_12px_32px_rgba(37,99,235,0.35)]"
						>
							<Link href="#contact">Book a Strategy Call →</Link>
						</Button>

						<Button
							asChild
							variant="outline"
							className="h-12 rounded-[10px] border-white/10 bg-white/4 px-6 text-[15px] font-normal text-slate-300 transition-all hover:-translate-y-0.5 hover:bg-white/8 hover:text-slate-100"
						>
							<Link href="#services">See How We Work</Link>
						</Button>
					</motion.div>

					<motion.div
						variants={item}
						className="flex items-center gap-8"
					>
						{[
							{ value: "10+", label: "Years Experience" },
							{ value: "4", label: "Core Services" },
							{ value: "B2B+", label: "Clients Served" },
						].map((stat, i) => (
							<div
								key={stat.label}
								className="flex items-center gap-8"
							>
								{i > 0 && (
									<div className="h-8 w-px bg-white/8" />
								)}
								<div className="flex flex-col gap-0.5">
									<span className="font-serif text-2xl font-bold leading-none text-slate-100">
										{stat.value}
									</span>
									<span className="text-[11px] uppercase tracking-[0.08em] text-slate-500">
										{stat.label}
									</span>
								</div>
							</div>
						))}
					</motion.div>
				</motion.div>

				<motion.div
					variants={fadeIn}
					initial="hidden"
					animate="visible"
					className="relative flex items-center justify-center"
				>
					<div className="relative h-105 w-full max-w-115 md:h-125">
						{[340, 260].map((size, i) => (
							<div
								key={size}
								className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-800/20 animate-[ring-pulse_4s_ease-in-out_infinite]"
								style={{
									width: size,
									height: size,
									animationDelay: i === 1 ? "0.6s" : "0s",
									opacity: i === 1 ? 0.8 : 0.5,
								}}
							/>
						))}

						<svg
							className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
							viewBox="0 0 460 500"
							xmlns="http://www.w3.org/2000/svg"
						>
							{[
								[230, 250, 230, 20],
								[230, 250, 450, 250],
								[230, 250, 230, 480],
								[230, 250, 10, 250],
							].map(([x1, y1, x2, y2], i) => (
								<line
									key={i}
									x1={x1}
									y1={y1}
									x2={x2}
									y2={y2}
									stroke="rgba(37,99,235,0.2)"
									strokeWidth="1"
									strokeDasharray="4 6"
								/>
							))}
						</svg>

						{nodes.map(({ label, Icon, style }) => (
							<div
								key={label}
								className={`absolute flex flex-col items-center gap-1.5 ${style}`}
							>
								<div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-700/40 bg-slate-900/95 shadow-[0_0_16px_rgba(37,99,235,0.15)] transition-all hover:border-blue-400 hover:shadow-[0_0_24px_rgba(37,99,235,0.35)]">
									<Icon
										size={18}
										className="text-blue-400"
										strokeWidth={1.8}
									/>
								</div>
								<span className="text-[10px] font-medium uppercase tracking-[0.07em] text-slate-500">
									{label}
								</span>
							</div>
						))}

						<div
							className="absolute left-[67%] top-[63%] md:left-[62%] md:top-[62%] z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 animate-[orb-float_6s_ease-in-out_infinite] items-center justify-center rounded-full shadow-[0_0_60px_rgba(37,99,235,0.4),0_0_120px_rgba(37,99,235,0.15)]"
							style={{
								background:
									"radial-gradient(circle at 35% 35%, #3b82f6, #1e3a8a)",
							}}
						>
							<span className="px-2 text-center font-serif text-[13px] italic leading-snug text-blue-200">
								Market
								<br />
								Truth
							</span>
						</div>

						<div className="absolute bottom-[6%] left-[6%] rounded-[10px] border border-blue-900/30 bg-slate-950/85 p-3">
							<p className="mb-2 text-[9px] uppercase tracking-[0.08em] text-slate-500">
								Market Clarity
							</p>
							<div className="flex h-11 items-end gap-1">
								{[40, 65, 50, 80, 55, 100].map((h, i) => (
									<div
										key={i}
										className={`flex-1 rounded-t-sm ${i === 5 ? "bg-blue-500" : "bg-blue-900"}`}
										style={{
											height: `${h}%`,
											animation: `bar-grow 1.5s ease-out ${0.2 + i * 0.15}s both`,
										}}
									/>
								))}
							</div>
						</div>

						<div className="absolute left-[6%] top-[5%] rounded-[10px] border border-blue-900/30 bg-slate-950/85 p-3 min-w-25">
							<p className="mb-1 text-[9px] uppercase tracking-[0.08em] text-slate-500">
								Insight Score
							</p>
							<p className="font-serif text-[26px] font-bold leading-none text-blue-400">
								94
							</p>
							<p className="mt-0.5 text-[10px] text-slate-600">
								▲ 12 pts this quarter
							</p>
						</div>

						{pills.map(({ text, style, delay }) => (
							<div
								key={text}
								className={`absolute flex items-center gap-1.5 rounded-full border border-blue-900/30 bg-slate-950/90 px-3 py-1.5 text-[11px] font-medium text-blue-300 ${style}`}
								style={{
									animation: `pill-float 5s ease-in-out ${delay} infinite`,
								}}
							>
								<span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
								{text}
							</div>
						))}
					</div>
				</motion.div>
			</div>

			<style>
				{`
					@keyframes ring-pulse {
					0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
					50%       { opacity: 1;   transform: translate(-50%, -50%) scale(1.03); }
					}
					@keyframes orb-float {
					0%, 100% { transform: translate(-50%, -50%) translateY(0); }
					50%       { transform: translate(-50%, -50%) translateY(-10px); }
					}
					@keyframes bar-grow {
					from { transform: scaleY(0); }
					to   { transform: scaleY(1); }
					}
					@keyframes pill-float {
					0%, 100% { transform: translateY(0); }
					50%       { transform: translateY(-7px); }
					}

				`}
			</style>
		</section>
	);
};

export default Hero;
