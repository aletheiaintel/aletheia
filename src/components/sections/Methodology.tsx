"use client";
import { motion, useInView } from "framer-motion";
import { Fragment, useRef, useState } from "react";

const phases = [
	{
		phase: "Phase 01",
		numeral: "I",
		title: "Idea Triage",
		description:
			"Filter signal from noise. Define the hypothesis. Assess market conditions, timing, and competitive landscape before investing further.",
		keyword: "Signal",
		accent: "from-blue-600/20 to-transparent",
		dot: "bg-blue-500",
		lineColor: "rgba(37,99,235,0.35)",
	},
	{
		phase: "Phase 02",
		numeral: "II",
		title: "Customer Discovery",
		description:
			"Interview real prospects. Uncover true pain points, buying triggers, and genuine willingness to pay — not polite enthusiasm.",
		keyword: "Truth",
		accent: "from-blue-500/15 to-transparent",
		dot: "bg-blue-400",
		lineColor: "rgba(59,130,246,0.35)",
	},
	{
		phase: "Phase 03",
		numeral: "III",
		title: "Smoke Test",
		description:
			"Test demand with behavioral commitment signals. Pre-orders, LOIs, sign-ups. Real signals that distinguish intent from interest.",
		keyword: "Proof",
		accent: "from-blue-400/10 to-transparent",
		dot: "bg-blue-300",
		lineColor: "rgba(96,165,250,0.35)",
	},
	{
		phase: "Phase 04",
		numeral: "IV",
		title: "Kill or Commit",
		description:
			"Go/No-Go decision backed by structured evidence. Build, pivot, or walk away — with the confidence that comes from knowing the truth.",
		keyword: "Decision",
		accent: "from-blue-300/10 to-transparent",
		dot: "bg-blue-200",
		lineColor: "rgba(147,197,253,0.35)",
	},
];

// Animated progress line between steps
const ConnectorLine = ({ index, total }: { index: number; total: number }) => {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });

	if (index >= total - 1) return null;

	return (
		<div
			ref={ref}
			className="hidden lg:flex absolute top-13 left-[calc(25%+1.5rem)] w-[calc(50%-3rem)]items-center"
			style={{ left: `calc(${(index + 1) * 25}% - 1rem)` }}
		>
			<motion.div
				className="h-px w-full bg-linear-to-r from-blue-600/40 via-blue-400/20 to-transparent"
				initial={{ scaleX: 0, originX: 0 }}
				animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
				transition={{
					duration: 0.8,
					delay: 0.3 + index * 0.15,
					ease: "easeOut",
				}}
			/>
		</div>
	);
};

// Floating roman numeral orb
const PhaseOrb = ({
	numeral,
	inView,
	delay,
}: {
	numeral: string;
	inView: boolean;
	delay: number;
}) => (
	<motion.div
		className="relative mx-auto mb-8 flex h-18 w-18 items-center justify-center"
		initial={{ scale: 0, rotate: -20 }}
		animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -20 }}
		transition={{ type: "spring", stiffness: 260, damping: 20, delay }}
	>
		{/* Outer ring pulse */}
		<motion.div
			className="absolute inset-0 rounded-full border border-blue-500/30"
			animate={
				inView ? { scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] } : {}
			}
			transition={{ duration: 2.5, repeat: Infinity, delay: delay + 0.5 }}
		/>
		{/* Main orb */}
		<div className="flex h-full w-full items-center justify-center rounded-full border border-blue-700/40 bg-linear-to-br from-blue-950 to-slate-950 shadow-[0_0_32px_rgba(37,99,235,0.2)]">
			<span className="font-serif text-[15px] font-bold italic text-blue-300">
				{numeral}
			</span>
		</div>
	</motion.div>
);

// Scanning line animation inside card
const ScanLine = ({ active }: { active: boolean }) => (
	<motion.div
		className="pointer-events-none absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-400/40 to-transparent"
		initial={{ top: "0%", opacity: 0 }}
		animate={
			active
				? {
						top: ["0%", "100%", "0%"],
						opacity: [0, 0.8, 0],
					}
				: {}
		}
		transition={{
			duration: 3,
			repeat: Infinity,
			ease: "linear",
			delay: 0.5,
		}}
	/>
);

const Methodology = () => {
	const sectionRef = useRef(null);
	const headingInView = useInView(sectionRef, {
		once: true,
		margin: "-80px",
	});
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<section
			id="methodology"
			ref={sectionRef}
			className="relative w-full overflow-hidden bg-[#020817] py-10  md:py-24"
		>
			{/* Background grid texture */}
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.025]"
				style={{
					backgroundImage:
						"linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)",
					backgroundSize: "60px 60px",
				}}
			/>

			{/* Ambient glow */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(37,99,235,0.06),transparent_70%)]" />
			</div>

			<div className="relative mx-auto max-w-325 px-6 lg:px-12">
				{/* ── HEADER ── */}
				<motion.div
					className="mb-20 flex flex-col items-center text-center"
					initial={{ opacity: 0, y: 24 }}
					animate={headingInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7, ease: "easeOut" }}
				>
					<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-800/30 bg-blue-900/20 px-4 py-1.5">
						<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400 shadow-[0_0_8px_#3b82f6]" />
						<span className="text-[11px] font-medium uppercase tracking-widest text-blue-300">
							How We Work
						</span>
					</div>

					<h2 className="mb-4 font-serif text-3xl font-bold leading-tight tracking-tight text-slate-50 md:text-4xl lg:text-[46px]">
						The <em className="italic text-blue-400">four-phase</em>{" "}
						intelligence framework
					</h2>

					<p className="max-w-130 text-[15px] font-light leading-relaxed text-slate-400 md:text-base">
						Every Aletheia engagement follows a structured process
						designed to eliminate guesswork at every stage.
					</p>

					{/* Animated progress track */}
					<motion.div
						className="mt-10 flex items-center gap-2"
						initial={{ opacity: 0 }}
						animate={headingInView ? { opacity: 1 } : {}}
						transition={{ delay: 0.4, duration: 0.6 }}
					>
						{phases.map((_, i) => (
							<Fragment key={`phase-group-${i}`}>
								<motion.div
									key={`dot-${i}`}
									className="h-1.5 w-1.5 rounded-full bg-blue-500"
									initial={{ scale: 0 }}
									animate={headingInView ? { scale: 1 } : {}}
									transition={{
										delay: 0.5 + i * 0.1,
										type: "spring",
									}}
								/>
								{i < phases.length - 1 && (
									<motion.div
										key={`line-${i}`}
										className="h-px bg-linear-to-r from-blue-600/60 to-blue-800/20"
										initial={{ width: 0 }}
										animate={
											headingInView ? { width: 40 } : {}
										}
										transition={{
											delay: 0.6 + i * 0.1,
											duration: 0.4,
										}}
									/>
								)}
							</Fragment>
						))}
					</motion.div>
				</motion.div>

				{/* ── PHASE CARDS ── */}
				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{phases.map((step, i) => (
						<PhaseCard
							key={step.phase}
							step={step}
							index={i}
							isHovered={hoveredIndex === i}
							onHover={() => setHoveredIndex(i)}
							onLeave={() => setHoveredIndex(null)}
						/>
					))}
				</div>

				{/* ── BOTTOM CALLOUT ── */}
				{/* <motion.div
					className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-white/5 bg-white/1.5 px-8 py-8 text-center md:flex-row md:justify-between md:text-left"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<div>
						<p className="font-serif text-[17px] font-semibold text-slate-100">
							Not every engagement runs all four phases.
						</p>
						<p className="mt-1 text-[13px] font-light text-slate-500">
							We scope each project to your exact stage — and
							where the uncertainty actually lives.
						</p>
					</div>
					<div className="flex items-center gap-2 shrink-0">
						{["I", "II", "III", "IV"].map((n, i) => (
							<motion.div
								key={n}
								className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-800/30 bg-blue-950/40 font-serif text-[11px] italic text-blue-400"
								whileHover={{
									scale: 1.15,
									borderColor: "rgba(59,130,246,0.6)",
								}}
								initial={{ opacity: 0, x: 10 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.4 + i * 0.07 }}
							>
								{n}
							</motion.div>
						))}
					</div>
				</motion.div> */}

				{/* Bottom Callout */}
				<motion.div
					className="mt-16 flex flex-col items-center gap-6 rounded-2xl border-l-2 border-blue-500 bg-gradient-to-r from-blue-900/10 to-transparent p-8 md:flex-row md:justify-between"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					<div>
						<p className="font-serif text-[17px] font-semibold text-slate-100">
							Not every engagement runs all four phases.
						</p>
						<p className="mt-1 text-[14px] font-light text-slate-400">
							We scope each project to your exact stage — and
							where the uncertainty actually lives.
						</p>
					</div>
					<div className="flex gap-2">
						{["I", "II", "III", "IV"].map((n) => (
							<div
								key={n}
								className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-800/30 bg-blue-950/40 font-serif text-[12px] italic text-blue-400"
							>
								{n}
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

// const PhaseCard = ({
// 	step,
// 	index,
// 	isHovered,
// 	onHover,
// 	onLeave,
// }: {
// 	step: (typeof phases)[0];
// 	index: number;
// 	isHovered: boolean;
// 	onHover: () => void;
// 	onLeave: () => void;
// }) => {
// 	const ref = useRef(null);
// 	const inView = useInView(ref, { once: true, margin: "-60px" });

// 	return (
// 		<motion.div
// 			ref={ref}
// 			className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/6 bg-white/2 p-7 transition-colors duration-300 hover:border-blue-800/40 cursor-default"
// 			initial={{ opacity: 0, y: 36 }}
// 			animate={inView ? { opacity: 1, y: 0 } : {}}
// 			transition={{
// 				duration: 0.65,
// 				delay: 0.1 + index * 0.12,
// 				ease: "easeOut",
// 			}}
// 			whileHover={{
// 				backgroundColor: "rgba(23,37,84,0.12)",
// 				boxShadow: "0 0 48px rgba(37,99,235,0.1)",
// 			}}
// 			onHoverStart={onHover}
// 			onHoverEnd={onLeave}
// 		>
// 			{/* Scan line effect */}
// 			<ScanLine active={isHovered} />

// 			{/* Gradient accent top-left */}
// 			<div
// 				className={`pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-linear-to-br ${step.accent} blur-2xl transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-40"}`}
// 			/>

// 			{/* Phase label */}
// 			<motion.p
// 				className="mb-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-800/70 transition-colors group-hover:text-blue-700/80"
// 				initial={{ opacity: 0 }}
// 				animate={inView ? { opacity: 1 } : {}}
// 				transition={{ delay: 0.2 + index * 0.12 }}
// 			>
// 				{step.phase}
// 			</motion.p>

// 			{/* Orb */}
// 			<PhaseOrb
// 				numeral={step.numeral}
// 				inView={inView}
// 				delay={0.25 + index * 0.12}
// 			/>

// 			{/* Keyword chip */}
// 			<motion.div
// 				className="mb-4 flex justify-center"
// 				initial={{ opacity: 0, scale: 0.8 }}
// 				animate={inView ? { opacity: 1, scale: 1 } : {}}
// 				transition={{ delay: 0.4 + index * 0.12, type: "spring" }}
// 			>
// 				<span className="inline-flex items-center gap-1.5 rounded-full border border-blue-900/40 bg-blue-950/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-blue-400/80">
// 					<span className={`h-1 w-1 rounded-full ${step.dot}`} />
// 					{step.keyword}
// 				</span>
// 			</motion.div>

// 			{/* Title */}
// 			<h3 className="mb-3 text-center font-serif text-[18px] font-semibold leading-snug text-slate-100 transition-colors group-hover:text-white">
// 				{step.title}
// 			</h3>

// 			{/* Description */}
// 			<p className="text-center text-[13px] font-light leading-[1.75] text-slate-500 transition-colors group-hover:text-slate-400">
// 				{step.description}
// 			</p>

// 			{/* Bottom step indicator */}
// 			<motion.div
// 				className="mt-6 flex justify-center"
// 				initial={{ opacity: 0 }}
// 				animate={inView ? { opacity: 1 } : {}}
// 				transition={{ delay: 0.5 + index * 0.12 }}
// 			>
// 				<div className="flex gap-1.5">
// 					{phases.map((_, j) => (
// 						<div
// 							key={j}
// 							className={`h-0.5 rounded-full transition-all duration-300 ${
// 								j <= index
// 									? "bg-blue-500 w-4"
// 									: "bg-blue-900/40 w-2"
// 							}`}
// 						/>
// 					))}
// 				</div>
// 			</motion.div>
// 		</motion.div>
// 	);
// };

const PhaseCard = ({
	step,
	index,
	isHovered,
	onHover,
	onLeave,
}: {
	step: (typeof phases)[0];
	index: number;
	isHovered: boolean;
	onHover: () => void;
	onLeave: () => void;
}) => {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-60px" });

	return (
		<motion.div
			ref={ref}
			className="
				group relative flex flex-col overflow-hidden rounded-2xl
				border border-white/10
				bg-white/[0.04]
				backdrop-blur-xl
				p-7
				cursor-pointer
			"
			initial={{ opacity: 0, y: 36 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{
				duration: 0.6,
				delay: 0.08 * index,
				ease: [0.22, 1, 0.36, 1],
			}}
			whileHover={{
				y: -6,
				scale: 1.015,
				backgroundColor: "rgba(23,37,84,0.18)",
				boxShadow: "0 20px 80px rgba(37,99,235,0.18)",
			}}
			onHoverStart={onHover}
			onHoverEnd={onLeave}
		>
			{/* Gradient overlay */}
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent opacity-60" />

			{/* Light sweep */}
			<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
				<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
			</div>

			{/* Scan line */}
			<ScanLine active={isHovered} />

			{/* Accent glow */}
			<div
				className={`
					pointer-events-none absolute -top-12 -left-12 h-48 w-48 rounded-full
					bg-linear-to-br ${step.accent}
					blur-3xl
					transition-all duration-500
					${isHovered ? "opacity-100 scale-110" : "opacity-40"}
				`}
			/>

			{/* Phase label */}
			<motion.p
				className="mb-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-400/50"
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : {}}
				transition={{ delay: 0.12 + index * 0.08 }}
			>
				{step.phase}
			</motion.p>

			{/* Orb */}
			<motion.div
				animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
				transition={{ type: "spring", stiffness: 200, damping: 15 }}
			>
				<PhaseOrb
					numeral={step.numeral}
					inView={inView}
					delay={0.2 + index * 0.08}
				/>
			</motion.div>

			{/* Keyword chip */}
			<motion.div
				className="mb-4 flex justify-center"
				initial={{ opacity: 0, scale: 0.85 }}
				animate={inView ? { opacity: 1, scale: 1 } : {}}
				transition={{
					delay: 0.28 + index * 0.08,
					type: "spring",
					stiffness: 180,
				}}
			>
				<span className="inline-flex items-center gap-1.5 rounded-full border border-blue-900/40 bg-blue-950/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-blue-400/80">
					<span className={`h-1.5 w-1.5 rounded-full ${step.dot}`} />
					{step.keyword}
				</span>
			</motion.div>

			{/* Title */}
			<h3 className="mb-3 text-center font-serif text-[20px] font-semibold tracking-tight text-white">
				{step.title}
			</h3>

			{/* Description */}
			<p className="mx-auto max-w-[260px] text-center text-[13px] leading-relaxed text-slate-400">
				{step.description}
			</p>

			{/* Bottom indicator (modern dots) */}
			<motion.div
				className="mt-6 flex justify-center"
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : {}}
				transition={{ delay: 0.4 + index * 0.08 }}
			>
				<div className="flex gap-2">
					{phases.map((_, j) => (
						<div
							key={j}
							className={`
								h-1.5 w-1.5 rounded-full transition-all duration-300
								${
									j <= index
										? "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"
										: "bg-blue-900/40"
								}
							`}
						/>
					))}
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Methodology;
