"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
	{
		category: "Getting Started",
		items: [
			{
				q: "What happens on a discovery call?",
				a: "It's a 30–45 minute conversation — no pitch deck, no proposal push. We ask questions about your situation, your constraints, and what you've already tried. At the end, we'll tell you honestly whether we think we can help, and if so, what that would look like. If we're not the right fit, we'll say so.",
			},
			{
				q: "How do I know which service I need?",
				a: "Most clients come in unsure — that's exactly what the discovery call is for. If you're pre-revenue and validating an idea, you likely need PMF Validation. If you have traction but aren't converting or positioning well, Brand Strategy or GTM is the right entry point. If you're unsure, select \"Not sure — need a diagnosis\" on the contact form and we'll scope it together.",
			},
			{
				q: "Do you work with early-stage founders or more established companies?",
				a: "Both. Our PMF Validation and Market Intelligence services are built for founders at the idea or pre-revenue stage. Brand Strategy, GTM, and Brand Activation work best for companies with some traction — typically seed-stage and beyond — who are ready to scale with a clear strategic foundation.",
			},
		],
	},
	{
		category: "Engagements & Process",
		items: [
			{
				q: "Do all engagements follow the four-phase methodology?",
				a: "Not necessarily. The four phases — Idea Triage, Customer Discovery, Smoke Test, and Kill or Commit — represent the full PMF validation arc. Most engagements run one or two phases depending on where you are and where the uncertainty lives. We scope every project specifically to your situation, not a fixed template.",
			},
			{
				q: "How long does a typical engagement take?",
				a: "It depends on the service. PMF Validation typically runs 4–8 weeks end-to-end. Brand Strategy and GTM projects are usually 3–6 weeks. Market Intelligence reports can be delivered in as little as 2 weeks. We'll give you a realistic timeline — and stick to it — before any engagement begins.",
			},
			{
				q: "Will I be working directly with senior people, or handed off to a junior team?",
				a: "You work directly with us. Aletheia is deliberately lean — we don't use your engagement to train juniors or pad hours. Every call, analysis, and deliverable comes from the people you spoke with on your discovery call.",
			},
		],
	},
	{
		category: "Outcomes & Expectations",
		items: [
			{
				q: "What if your validation work concludes my idea won't work?",
				a: "That's a successful engagement. A definitive no-go in six weeks is worth more than 18 months building the wrong thing. We've helped founders save $200K+ in misdirected build costs by surfacing the hard truth early — before the money is spent. Clarity in either direction is the deliverable.",
			},
			{
				q: "How is Aletheia different from a typical marketing or strategy agency?",
				a: "Most agencies optimise for ongoing retainers and deliverable volume. We optimise for honest decisions. We won't recommend a service you don't need, extend an engagement beyond its useful life, or dress up inconclusive data as a confident recommendation. Our name means truth revealed — that's a standard we hold ourselves to commercially as well.",
			},
			{
				q: "Can you guarantee results like the ones in your case studies?",
				a: "No — and we'd be suspicious of anyone who does. What we can guarantee is rigorous methodology, direct communication, and a willingness to tell you what you need to hear rather than what you want to hear. The outcomes in our case studies reflect real engagements with founders who acted decisively on clear intelligence.",
			},
		],
	},
];

function AccordionItem({
	q,
	a,
	isOpen,
	onToggle,
	index,
}: {
	q: string;
	a: string;
	isOpen: boolean;
	onToggle: () => void;
	index: number;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-40px" }}
			transition={{
				duration: 0.45,
				delay: index * 0.07,
				ease: "easeOut",
			}}
			className={`group rounded-xl border transition-all duration-300 ${
				isOpen
					? "border-blue-700/30 bg-blue-950/20"
					: "border-white/6 bg-white/2 hover:border-white/10 hover:bg-white/4"
			}`}
		>
			<button
				onClick={onToggle}
				className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
				aria-expanded={isOpen}
			>
				<span
					className={`font-serif text-[15px] font-semibold leading-snug transition-colors duration-200 md:text-[16px] ${
						isOpen
							? "text-white"
							: "text-white/70 group-hover:text-white/90"
					}`}
				>
					{q}
				</span>
				<span
					className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
						isOpen
							? "border-blue-500/40 bg-blue-500/10 text-blue-400"
							: "border-white/10 bg-white/4 text-white/30 group-hover:border-white/20 group-hover:text-white/50"
					}`}
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
						<p className="px-6 pb-6 text-[14px] font-light leading-[1.85] text-white/40">
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
	const [openKey, setOpenKey] = useState<string | null>("0-0");

	const toggle = (key: string) =>
		setOpenKey((prev) => (prev === key ? null : key));

	return (
		<section
			id="faq"
			ref={ref}
			className="relative w-full overflow-hidden bg-[#020817] py-28 md:py-36"
		>
			<div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(37,99,235,0.08)_0%,transparent_70%)]" />

			<div
				className="pointer-events-none absolute inset-0 opacity-[0.022]"
				style={{
					backgroundImage:
						"linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
					backgroundSize: "64px 64px",
				}}
			/>

			<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/6 to-transparent" />
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/6 to-transparent" />

			<div className="relative mx-auto max-w-6xl px-6 lg:px-12">
				<motion.div
					className="mb-16 flex flex-col items-center text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
				>
					<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-4 py-1.5">
						<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
						<span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/40">
							FAQ
						</span>
					</div>
					<h2 className="mb-3 font-serif text-[30px] font-semibold leading-[1.2] text-white md:text-[42px]">
						Questions we get{" "}
						<em className="italic text-blue-400">asked honestly</em>
					</h2>
					<p className="max-w-sm text-[14px] font-light leading-relaxed text-white/35">
						Straightforward answers — the same ones you&apos;d get
						on a discovery call.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-[200px_1fr]">
					{faqs.map((group, gi) => (
						<>
							<motion.div
								key={`label-${gi}`}
								className="lg:pt-1"
								initial={{ opacity: 0, x: -12 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: "-40px" }}
								transition={{ duration: 0.45, delay: 0.1 }}
							>
								<div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-2">
									<span className="h-px w-6 bg-blue-500/50 lg:hidden" />
									<p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-400/60">
										{group.category}
									</p>
								</div>
							</motion.div>

							<div
								key={`items-${gi}`}
								className="flex flex-col gap-3"
							>
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
										/>
									);
								})}
							</div>
						</>
					))}
				</div>

				<motion.div
					className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-white/6 bg-white/2 px-8 py-8 text-center md:flex-row md:justify-between md:text-left"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<div>
						<p className="font-serif text-[17px] font-semibold text-white/80">
							Still have a question?
						</p>
						<p className="mt-1 text-[13px] font-light text-white/30">
							Ask it on a discovery call — no pitch, no pressure,
							just an honest conversation.
						</p>
					</div>
					<a
						href="#contact"
						className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg bg-blue-700 px-6 text-[13px] font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-blue-600"
					>
						Book a Discovery Call
					</a>
				</motion.div>
			</div>
		</section>
	);
}
