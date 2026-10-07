"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import FAQAccordionItem from "@/components/shared/FAQAccordionItem";
import { FAQ_SECTIONS } from "@/data/faqPage";

export default function FAQSections() {
	const [openKey, setOpenKey] = useState<string | null>(null);

	const toggle = (key: string) =>
		setOpenKey((prev) => (prev === key ? null : key));

	return (
		<div className="flex flex-col gap-16 md:gap-24">
			{FAQ_SECTIONS.map((section) => (
				<section
					key={section.id}
					id={section.id}
					className="grid scroll-mt-28 grid-cols-1 gap-8 md:grid-cols-[240px_1fr] md:gap-12"
				>
					{/* Section label */}
					<motion.div
						className="md:pt-1.5"
						initial={{ opacity: 0, x: -14 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-40px" }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<div className="md:sticky md:top-28">
							<h2
								className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em]"
								style={{ color: section.accent }}
							>
								{section.title}
							</h2>
							<p className="text-[13px] font-light leading-relaxed text-[#777]">
								{section.intro}
							</p>
						</div>
					</motion.div>

					{/* Questions */}
					<div className="flex flex-col gap-3">
						{section.items.map((item, i) => {
							const key = `${section.id}-${i}`;
							return (
								<FAQAccordionItem
									key={key}
									q={item.q}
									a={
										<div className="space-y-4">
											{item.answer.map((paragraph) => (
												<p key={paragraph}>
													{paragraph}
												</p>
											))}
											<p
												className="border-l-2 pl-4 font-normal text-[#333]"
												style={{
													borderColor: section.accent,
												}}
											>
												{item.summary}
											</p>
										</div>
									}
									isOpen={openKey === key}
									onToggle={() => toggle(key)}
									index={i}
									accent={section.accent}
								/>
							);
						})}
					</div>
				</section>
			))}
		</div>
	);
}
