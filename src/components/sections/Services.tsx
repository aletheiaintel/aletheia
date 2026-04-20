"use client";
import { services } from "@/data";
import { motion, Variants } from "framer-motion";

const container = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariant: Variants = {
	hidden: { opacity: 0, y: 28 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const headerVariant: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: "easeOut" },
	},
};

const Services = () => {
	return (
		<section
			id="services"
			className="relative w-full overflow-hidden bg-[#020817] py-24 md:py-32"
		>
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(37,99,235,0.08),transparent_70%)]" />
			</div>

			<div className="relative mx-auto max-w-325 px-6 lg:px-12">
				<motion.div
					className="mb-16 flex flex-col items-center text-center"
					variants={headerVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-80px" }}
				>
					<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-800/30 bg-blue-900/20 px-4 py-1.5">
						<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400 shadow-[0_0_8px_#3b82f6]" />
						<span className="text-[11px] font-medium uppercase tracking-widest text-blue-300">
							What We Do
						</span>
					</div>

					<h2 className="mb-4 font-serif text-3xl font-bold leading-tight tracking-tight text-slate-50 md:text-4xl lg:text-[46px]">
						Five ways we deliver{" "}
						<em className="italic text-blue-400">intelligence</em>
					</h2>

					<p className="max-w-140 text-[15px] font-light leading-relaxed text-slate-400 md:text-base">
						Each service is designed to answer a specific strategic
						question — and give you the clarity to act decisively.
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
					variants={container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
				>
					{services.map((service, i) => (
						<motion.div
							key={service.num}
							variants={cardVariant}
							className={`group relative flex flex-col gap-5 rounded-2xl border border-white/6 bg-white/2 p-7 transition-all duration-300 hover:border-blue-800/40 hover:bg-blue-950/20 hover:shadow-[0_0_40px_rgba(37,99,235,0.08)] ${
								// Make the 5th card span wider on large screens if it's the last solo card
								i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
							}`}
						>
							{/* Top row: number + icon */}
							<div className="flex items-start justify-between">
								<span className="font-serif text-[11px] font-bold tracking-[0.15em] text-blue-900/80 group-hover:text-blue-700/60 transition-colors">
									{service.num}
								</span>
								<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-800/20 bg-blue-950/30 transition-all duration-300 group-hover:border-blue-700/40 group-hover:bg-blue-900/30 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.15)]">
									{service.icon}
								</div>
							</div>

							{/* Title */}
							<h3 className="font-serif text-[19px] font-semibold leading-snug text-slate-100 transition-colors group-hover:text-white">
								{service.title}
							</h3>

							{/* Description */}
							<p className="flex-1 text-[14px] font-light leading-[1.75] text-slate-500 transition-colors group-hover:text-slate-400">
								{service.description}
							</p>

							{/* Tags */}
							<div className="flex flex-wrap gap-2">
								{service.tags.map((tag) => (
									<span
										key={tag}
										className="rounded-full border border-blue-900/30 bg-blue-950/40 px-3 py-1 text-[11px] font-medium tracking-[0.04em] text-blue-400/70 transition-colors group-hover:border-blue-800/40 group-hover:text-blue-400"
									>
										{tag}
									</span>
								))}
							</div>

							{/* Subtle bottom-left corner accent */}
							<div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-blue-500/50 to-transparent transition-all duration-500 group-hover:w-full rounded-b-2xl" />
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
