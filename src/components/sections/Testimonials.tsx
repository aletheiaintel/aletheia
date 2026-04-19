"use client";

import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
	{
		tag: "PMF Validation",
		tagColor: "text-sky-400 bg-sky-400/10 ring-sky-400/20",
		accentColor: "from-sky-500/20 via-transparent",
		metric: "6wks",
		metricLabel: "to a definitive no-go decision",
		quote: "The framework gave us something we couldn't get from any discovery call — a clear, honest answer.",
		author: "B2B SaaS Founder",
		initials: "JK",
	},
	{
		tag: "Brand Strategy",
		tagColor: "text-violet-400 bg-violet-400/10 ring-violet-400/20",
		accentColor: "from-violet-500/20 via-transparent",
		metric: "3×",
		metricLabel: "conversion rate improvement",
		quote: "They didn't just fix our messaging — they changed how we think about our market entirely.",
		author: "Health Tech Founder",
		initials: "AM",
	},
	{
		tag: "Go-To-Market",
		tagColor: "text-amber-400 bg-amber-400/10 ring-amber-400/20",
		accentColor: "from-amber-500/20 via-transparent",
		metric: "45d",
		metricLabel: "from strategy to signed contract",
		quote: "The outreach strategy was unlike anything I'd seen. The response rate was 10× what we expected.",
		author: "B2B Consultancy CEO",
		initials: "RL",
	},
	{
		tag: "Fundraising",
		tagColor: "text-emerald-400 bg-emerald-400/10 ring-emerald-400/20",
		accentColor: "from-emerald-500/20 via-transparent",
		metric: "$2M",
		metricLabel: "pre-seed raised in first round",
		quote: "They reframed our entire narrative. Investors who previously passed came back to the table.",
		author: "Fintech Founder",
		initials: "TO",
	},
];

const AUTOPLAY_DELAY = 4000;

export default function Testimonials() {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	const autoplay = React.useRef(
		Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false }),
	);

	const onSelect = useCallback(() => {
		if (!api) return;
		setCurrent(api.selectedScrollSnap());
	}, [api]);

	useEffect(() => {
		if (!api) return;
		onSelect();
		api.on("select", onSelect);
		return () => {
			api.off("select", onSelect);
		};
	}, [api, onSelect]);

	const goTo = (index: number) => {
		api?.scrollTo(index);
	};

	const t = testimonials[current];

	return (
		<section
			id="testimonials"
			className="relative w-full overflow-hidden bg-[#020817] py-24 md:py-32"
		>
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(37,99,235,0.08),transparent_70%)]" />
			</div>

			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<AnimatePresence mode="wait">
					<motion.div
						key={current}
						className={`absolute -top-20 left-1/2 h-100 w-150 -translate-x-1/2 rounded-full bg-gradient-radial ${t.accentColor} to-transparent blur-[100px]`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.8 }}
					/>
				</AnimatePresence>
				<div
					className="absolute inset-0 opacity-[0.02]"
					style={{
						backgroundImage:
							"linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
						backgroundSize: "64px 64px",
					}}
				/>
			</div>

			<div className="relative mx-auto max-w-6xl px-6 lg:px-10">
				<motion.div
					className="mb-12 flex flex-col items-center text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
						<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
						<span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/50">
							Proof of Work
						</span>
					</div>
					<h2 className="mb-3 font-serif text-3xl font-semibold leading-tight text-white md:text-[40px]">
						Results that{" "}
						<em className="italic text-blue-400">speak</em> for
						themselves
					</h2>
					<p className="max-w-xs text-sm font-light leading-relaxed text-white/35">
						Real engagements. Real outcomes — not polished case
						study prose.
					</p>
				</motion.div>

				<div className="relative">
					<Carousel
						setApi={setApi}
						plugins={[autoplay.current]}
						opts={{ loop: true, align: "start" }}
						className="w-full"
					>
						<CarouselContent className="-ml-4">
							{testimonials.map((item, i) => (
								<CarouselItem
									key={i}
									className="pl-8 basis-full sm:basis-1/2 lg:basis-1/3"
								>
									<motion.div
										// animate={{
										// 	opacity: current === i ? 1 : 0.45,
										// 	scale: current === i ? 1 : 0.97,
										// }}
										transition={{ duration: 0.3 }}
										className="relative h-full overflow-hidden rounded-xl border border-white/[0.07] bg-white/3 backdrop-blur-sm"
									>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5" />

										<div className="flex h-full flex-col p-6">
											<span
												className={`mb-5 inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest ring-1 ring-inset ${item.tagColor}`}
											>
												{item.tag}
											</span>

											{/* Metric */}
											<div className="mb-4 border-b border-white/6 pb-4">
												<span className="font-serif text-[44px] font-semibold leading-none text-white">
													{item.metric}
												</span>
												<p className="mt-1.5 text-[12px] font-light leading-snug text-white/30">
													{item.metricLabel}
												</p>
											</div>

											{/* Quote */}
											<p className="mb-5 flex-1 font-serif text-[14px] italic leading-relaxed text-white/55">
												&ldquo;{item.quote}&rdquo;
											</p>

											{/* Author */}
											<div className="flex items-center gap-2.5">
												<div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/6 text-[10px] font-semibold text-white/50">
													{item.initials}
												</div>
												<span className="text-[11px] text-white/30">
													{item.author}
												</span>
											</div>
										</div>

										<div className="h-px w-full overflow-hidden bg-white/5">
											{current === i && (
												<motion.div
													className="h-full bg-white/25"
													initial={{ width: "0%" }}
													animate={{ width: "100%" }}
													transition={{
														duration:
															AUTOPLAY_DELAY /
															1000,
														ease: "linear",
													}}
													key={current}
												/>
											)}
										</div>
									</motion.div>
								</CarouselItem>
							))}
						</CarouselContent>

						<CarouselPrevious className="absolute -left-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur-sm hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200 disabled:opacity-20" />
						<CarouselNext className="absolute -right-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur-sm hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200 disabled:opacity-20" />
					</Carousel>
				</div>

				<div className="mt-8 flex items-center justify-center gap-5">
					<div className="flex items-center gap-2">
						{testimonials.map((_, i) => (
							<button
								key={i}
								onClick={() => goTo(i)}
								aria-label={`Go to slide ${i + 1}`}
								className={`rounded-full transition-all duration-300 ${
									current === i
										? "h-1.5 w-6 bg-white/60"
										: "h-1.5 w-1.5 bg-white/15 hover:bg-white/30"
								}`}
							/>
						))}
					</div>
					<span className="text-[11px] tabular-nums text-white/20">
						{String(current + 1).padStart(2, "0")} /{" "}
						{String(testimonials.length).padStart(2, "0")}
					</span>
				</div>
			</div>
		</section>
	);
}
