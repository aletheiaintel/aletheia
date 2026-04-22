"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ACCENT, ACCENT_GREEN, faqs } from "@/data";

function AccordionItem({
	q,
	a,
	isOpen,
	onToggle,
	index,
	accent,
}: {
	q: string;
	a: string;
	isOpen: boolean;
	onToggle: () => void;
	index: number;
	accent: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-40px" }}
			transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
			className="group rounded-[18px] border transition-all duration-300"
			style={{
				borderColor: isOpen ? `${accent}30` : "rgba(0,0,0,0.07)",
				background: isOpen ? `${accent}06` : "#FDFAF5",
				boxShadow: isOpen
					? `0 4px 24px rgba(0,0,0,0.07)`
					: "0 1px 8px rgba(0,0,0,0.04)",
			}}
		>
			<button
				onClick={onToggle}
				className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left cursor-pointer"
				aria-expanded={isOpen}
			>
				<span
					className="font-serif text-[15px] md:text-[16px] font-light leading-snug transition-colors duration-200"
					style={{ color: isOpen ? "#121212" : "#444" }}
				>
					{q}
				</span>
				<span
					className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
					style={
						isOpen
							? {
									borderColor: `${accent}40`,
									background: `${accent}12`,
									color: accent,
								}
							: {
									borderColor: "rgba(0,0,0,0.1)",
									background: "rgba(0,0,0,0.03)",
									color: "#999",
								}
					}
				>
					{isOpen ? (
						<Minus className="h-3 w-3" />
					) : (
						<Plus className="h-3 w-3" />
					)}
				</span>
			</button>

			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						key="answer"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.32, ease: "easeInOut" }}
						className="overflow-hidden"
					>
						<p className="px-6 pb-6 text-[14px] font-light leading-[1.85] text-[#555]">
							{a}
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

export default function FAQ() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-80px" });
	const [openKey, setOpenKey] = useState<string | null>(null);

	const toggle = (key: string) =>
		setOpenKey((prev) => (prev === key ? null : key));

	return (
		<section
			id="faq"
			ref={ref}
			className="relative w-full overflow-hidden bg-[#F5F0E8] py-28 md:py-40"
		>
			{/* Background textures */}
			<div className="absolute inset-0 opacity-[0.035] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
			<div
				className="absolute inset-0 opacity-[0.04] z-0"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43 7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm28-65c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm23-11c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm-6 60c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm29 15c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z' fill='%23666' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
					backgroundSize: "180px 180px",
				}}
			/>

			{/* Ambient orbs */}
			<motion.div
				animate={{ x: [0, -18, 0], y: [0, 14, 0], scale: [1, 1.07, 1] }}
				transition={{
					duration: 16,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute -top-20 right-[5%] w-96 h-96 rounded-full pointer-events-none"
				style={{
					background:
						"radial-gradient(circle, #F2C594 0%, #E8B5D4 50%, transparent 70%)",
					opacity: 0.45,
				}}
			/>
			<motion.div
				animate={{ x: [0, 20, 0], y: [0, -12, 0], scale: [1, 1.05, 1] }}
				transition={{
					duration: 18,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 2,
				}}
				className="absolute bottom-[10%] -left-16 w-80 h-80 rounded-full pointer-events-none"
				style={{
					background:
						"radial-gradient(circle, #D4E8C2 0%, #E8D5B7 45%, transparent 70%)",
					opacity: 0.5,
				}}
			/>
			<motion.div
				animate={{ x: [0, -10, 0], y: [0, 16, 0] }}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 4,
				}}
				className="absolute top-[40%] right-[2%] w-60 h-60 rounded-full pointer-events-none"
				style={{
					background:
						"radial-gradient(circle, #BAE6FD 0%, #7DD3FC 25%, transparent 70%)",
					opacity: 0.2,
				}}
			/>

			<div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
				{/* Header */}
				<motion.div
					className="mb-16 md:mb-24"
					initial={{ opacity: 0, y: 24 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<p
						className="mb-5 text-[11px] tracking-[0.15em] uppercase font-medium"
						style={{ color: ACCENT_GREEN }}
					>
						Common Questions
					</p>
					<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
						<h2 className="font-serif text-[clamp(42px,6vw,84px)] font-light leading-[0.95] tracking-[-0.025em] text-[#121212]">
							Questions, answered
							<br />
							<em style={{ color: ACCENT }}>without the spin.</em>
						</h2>
						<p className="max-w-xs text-[14px] leading-relaxed text-[#777] font-light md:text-right md:mb-1">
							Straightforward answers — the same ones you&apos;d
							get on a discovery call.
						</p>
					</div>
					<div
						className="mt-8 h-px"
						style={{
							background: `linear-gradient(to right, ${ACCENT}, rgba(18,18,18,0.1), transparent)`,
						}}
					/>
				</motion.div>

				{/* FAQ groups */}
				<div className="flex flex-col gap-16 md:gap-20">
					{faqs.map((group, gi) => (
						<div
							key={gi}
							className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-12"
						>
							{/* Category label */}
							<motion.div
								className="md:pt-1.5"
								initial={{ opacity: 0, x: -14 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: "-40px" }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								<div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
									<div
										className="h-px w-6 md:hidden"
										style={{ background: group.accent }}
									/>
									<p
										className="text-[11px] font-medium uppercase tracking-[0.12em]"
										style={{ color: `${group.accent}99` }}
									>
										{group.category}
									</p>
								</div>
							</motion.div>

							{/* Accordion items */}
							<div className="flex flex-col gap-3">
								{group.items.map((item, ii) => {
									const key = `${gi}-${ii}`;
									return (
										<AccordionItem
											key={key}
											q={item.q}
											a={item.a}
											isOpen={openKey === key}
											onToggle={() => toggle(key)}
											index={ii}
											accent={group.accent}
										/>
									);
								})}
							</div>
						</div>
					))}
				</div>

				{/* CTA block */}
				<motion.div
					className="mt-20 md:mt-28"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, ease: "easeOut" }}
				>
					<div
						className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center border border-black/[0.07] shadow-[0_4px_40px_rgba(0,0,0,0.06)]"
						style={{
							background:
								"linear-gradient(135deg, #FDFAF5 0%, #F5F0E8 60%, #FFF8F0 100%)",
						}}
					>
						<div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[radial-gradient(circle,#D4E8C2,transparent_70%)] opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
						<div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[radial-gradient(circle,#BAE6FD,transparent_70%)] opacity-40 translate-x-1/2 translate-y-1/2 pointer-events-none" />

						<div className="relative z-10">
							<p
								className="mb-4 text-[11px] tracking-[0.18em] uppercase font-medium"
								style={{ color: ACCENT_GREEN }}
							>
								Still have a question?
							</p>
							<h3 className="font-serif text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-[#121212] mb-4">
								Ask it on a call.
								<br />
								<em style={{ color: ACCENT }}>
									No pitch. No pressure.
								</em>
							</h3>
							<p className="text-[15px] text-[#777] font-light mb-8 max-w-sm mx-auto leading-relaxed">
								Every question you have is one we&apos;d rather
								answer before you commit — not after.
							</p>
							<Link
								href="#contact"
								className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[10px] md:text-[13px] font-medium tracking-[0.04em] uppercase text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
								style={{ background: "#121212" }}
							>
								<span>Book a Discovery Call</span>
								<ArrowRight className="w-4 h-4" />
							</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
