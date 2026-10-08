"use client";
import { useId } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

// Answers stay mounted while collapsed so search engines can read every answer.
export default function FAQAccordionItem({
	q,
	a,
	isOpen,
	onToggle,
	index,
	accent,
}: {
	q: string;
	a: React.ReactNode;
	isOpen: boolean;
	onToggle: () => void;
	index: number;
	accent: string;
}) {
	const answerId = useId();

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
			<h3>
				<button
					onClick={onToggle}
					className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left cursor-pointer"
					aria-expanded={isOpen}
					aria-controls={answerId}
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
			</h3>

			<motion.div
				id={answerId}
				role="region"
				aria-hidden={!isOpen}
				initial={false}
				animate={
					isOpen
						? { height: "auto", opacity: 1 }
						: { height: 0, opacity: 0 }
				}
				transition={{ duration: 0.32, ease: "easeInOut" }}
				className="overflow-hidden"
			>
				<div className="px-6 pb-6 text-[14px] font-light leading-[1.85] text-[#555]">
					{a}
				</div>
			</motion.div>
		</motion.div>
	);
}
