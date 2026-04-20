"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: (delay = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, delay, ease: "easeOut" },
	}),
};

export default function CTA() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<section
			ref={ref}
			className="relative w-full overflow-hidden bg-[#020817] py-28 md:py-36"
		>
			<div className="pointer-events-none absolute left-1/2 top-1/2 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(37,99,235,0.13)_0%,transparent_70%)]" />

			<div
				className="pointer-events-none absolute inset-0 opacity-[0.025]"
				style={{
					backgroundImage:
						"linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
					backgroundSize: "64px 64px",
				}}
			/>

			<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/6 to-transparent" />
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/6 to-transparent" />

			<div className="relative mx-auto max-w-2xl px-6 text-center">
				<motion.div
					className="mb-7 flex justify-center"
					custom={0}
					variants={fadeUp}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
				>
					<div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-4 py-1.5">
						<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
						<span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/40">
							Get Started
						</span>
					</div>
				</motion.div>

				<motion.h2
					className="mb-5 font-serif text-[32px] font-semibold leading-[1.15] tracking-tight text-white md:text-[48px]"
					custom={0.1}
					variants={fadeUp}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
				>
					Ready to know the{" "}
					<em className="italic text-blue-400">truth</em>
					<br />
					about your market?
				</motion.h2>

				<motion.div
					className="mx-auto mb-5 h-px w-10 bg-white/8"
					custom={0.15}
					variants={fadeUp}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
				/>

				<motion.p
					className="mx-auto mb-10 max-w-md text-[15px] font-light leading-[1.85] text-white/40"
					custom={0.2}
					variants={fadeUp}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
				>
					Book a discovery call. No pitch. No pressure. Just an honest
					conversation about your situation and whether we can help.
				</motion.p>

				<motion.div
					className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
					custom={0.28}
					variants={fadeUp}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
				>
					<a
						href="#contact"
						className="inline-flex h-11 items-center justify-center rounded-lg bg-blue-700 px-7 text-[13px] font-medium tracking-wide text-white transition-all duration-200 hover:-translate-y-px hover:bg-blue-600 active:translate-y-0 active:bg-blue-800"
					>
						Book a Discovery Call
					</a>
					<a
						href="#services"
						className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 px-7 text-[13px] font-light tracking-wide text-white/50 transition-all duration-200 hover:-translate-y-px hover:border-white/22 hover:text-white/80 active:translate-y-0"
					>
						View All Services
					</a>
				</motion.div>

				<motion.p
					className="border-t border-white/5 pt-6 font-serif text-[13px] italic leading-relaxed text-white/20"
					custom={0.36}
					variants={fadeUp}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
				>
					<span className="text-white/35">
						Aletheia means truth revealed. That&rsquo;s exactly what
						we bring to every engagement.{" "}
					</span>
				</motion.p>
			</div>
		</section>
	);
}
