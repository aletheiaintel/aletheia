"use client";
import { useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Mail,
	Globe,
	Clock,
	ArrowRight,
	CheckCircle2,
	Loader2,
} from "lucide-react";

const contactDetails = [
	{
		icon: Mail,
		label: "Email",
		value: "hello@aletheiaintelligence.com",
		href: "mailto:hello@aletheiaintelligence.com",
	},
	{
		icon: Globe,
		label: "Website",
		value: "aletheiaintelligence.com",
		href: "https://aletheiaintelligence.com",
	},
	{
		icon: Clock,
		label: "Response time",
		value: "Within 24 hours",
		href: null,
	},
];

const services = [
	"PMF Validation",
	"Brand Strategy & Positioning",
	"Market Intelligence",
	"Go-To-Market Strategy",
	"Brand Activation",
	"Not sure — need a diagnosis",
];

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: (delay = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, delay, ease: "easeOut" },
	}),
};

export default function Contact() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-80px" });

	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [service, setService] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		await new Promise((r) => setTimeout(r, 1400));
		setLoading(false);
		setSubmitted(true);
	};

	return (
		<section
			id="contact"
			ref={ref}
			className="relative w-full overflow-hidden bg-[#020817] py-28 md:py-36"
		>
			<div className="pointer-events-none absolute left-1/2 top-1/2 h-150 w-225 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(37,99,235,0.09)_0%,transparent_70%)]" />

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
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
					<div className="flex flex-col">
						<motion.div
							className="mb-6"
							custom={0}
							variants={fadeUp}
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
						>
							<div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-4 py-1.5">
								<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
								<span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/40">
									Get In Touch
								</span>
							</div>
						</motion.div>

						<motion.h2
							className="mb-5 font-serif text-[30px] font-semibold leading-[1.2] text-white md:text-[38px]"
							custom={0.1}
							variants={fadeUp}
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
						>
							Let&rsquo;s start with an{" "}
							<em className="italic text-blue-400">honest</em>{" "}
							conversation
						</motion.h2>

						<motion.p
							className="mb-10 text-[14px] font-light leading-[1.9] text-white/35"
							custom={0.18}
							variants={fadeUp}
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
						>
							Every engagement begins with a no-pitch discovery
							call. We listen first, diagnose second, and
							recommend only what will genuinely move the needle
							for your specific situation.
						</motion.p>

						<motion.div
							className="mb-10 space-y-1"
							custom={0.26}
							variants={fadeUp}
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
						>
							{contactDetails.map(
								({ icon: Icon, label, value, href }) => (
									<div
										key={label}
										className="group flex items-center gap-4 rounded-xl border border-transparent px-4 py-3.5 transition-colors duration-200 hover:border-white/6 hover:bg-white/3"
									>
										<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/4">
											<Icon className="h-4 w-4 text-blue-400/70" />
										</div>
										<div className="min-w-0 flex-1">
											<p className="mb-0.5 text-[10px] font-medium uppercase tracking-widest text-white/25">
												{label}
											</p>
											{href ? (
												<a
													href={href}
													className="truncate text-[13px] text-white/55 transition-colors duration-150 hover:text-white/80"
												>
													{value}
												</a>
											) : (
												<p className="truncate text-[13px] text-white/55">
													{value}
												</p>
											)}
										</div>
									</div>
								),
							)}
						</motion.div>

						<motion.p
							className="mt-auto border-t border-white/5 pt-6 font-serif text-[13px] italic leading-relaxed text-white/20"
							custom={0.34}
							variants={fadeUp}
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
						>
							<span className="text-white/35">
								Aletheia means truth revealed. That&rsquo;s
								exactly what we bring to every engagement.{" "}
							</span>
						</motion.p>
					</div>

					<motion.div
						custom={0.2}
						variants={fadeUp}
						initial="hidden"
						animate={inView ? "visible" : "hidden"}
					>
						<div className="relative overflow-hidden rounded-2xl border border-white/7 bg-white/2.5 px-8 py-10 backdrop-blur-sm ">
							<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />

							{submitted ? (
								<div className="flex min-h-120 flex-col items-center justify-center text-center">
									<div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
										<CheckCircle2 className="h-7 w-7 text-emerald-400" />
									</div>
									<h3 className="mb-3 font-serif text-[22px] font-semibold text-white">
										Message received
									</h3>
									<p className="max-w-xs text-[14px] font-light leading-relaxed text-white/40">
										We&rsquo;ll review your situation and be
										in touch within 24 hours. Expect an
										honest reply, not a sales pitch.
									</p>
								</div>
							) : (
								<form
									onSubmit={handleSubmit}
									className="space-y-5"
								>
									{/* Name + Email — side by side on md+ */}
									<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
										<div className="space-y-2">
											<Label className="text-[11px] font-medium uppercase tracking-[0.08em] text-white/35">
												Full Name
											</Label>
											<Input
												type="text"
												placeholder="Your name"
												required
												className="h-10 border-white/8 bg-white/4 text-[13px] text-white placeholder:text-white/20 focus-visible:border-blue-500/50 focus-visible:ring-blue-500/20"
											/>
										</div>
										<div className="space-y-2">
											<Label className="text-[11px] font-medium uppercase tracking-[0.08em] text-white/35">
												Email Address
											</Label>
											<Input
												type="email"
												placeholder="you@company.com"
												required
												className="h-10 border-white/8 bg-white/4 text-[13px] text-white placeholder:text-white/20 focus-visible:border-blue-500/50 focus-visible:ring-blue-500/20"
											/>
										</div>
									</div>

									<div className="space-y-2">
										<Label className="text-[11px] font-medium uppercase tracking-[0.08em] text-white/35">
											Company / Organisation
										</Label>
										<Input
											type="text"
											placeholder="Your company"
											className="h-10 border-white/8 bg-white/4 text-[13px] text-white placeholder:text-white/20 focus-visible:border-blue-500/50 focus-visible:ring-blue-500/20"
										/>
									</div>

									<div className="space-y-2">
										<Label className="text-[11px] font-medium uppercase tracking-[0.08em] text-white/35">
											I need help with
										</Label>
										<Select
											value={service}
											onValueChange={setService}
										>
											<SelectTrigger className="h-10 w-full border-white/8 bg-white/4 text-[13px] text-white/50 focus:border-blue-500/50 focus:ring-blue-500/20 data-placeholder:text-white/20">
												<SelectValue placeholder="Select a service…" />
											</SelectTrigger>
											<SelectContent className="border-white/8 bg-[#0f1120] text-white">
												{services.map((s) => (
													<SelectItem
														key={s}
														value={s}
														className="text-[13px] text-white/60  focus:text-white"
													>
														{s}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</div>

									<div className="space-y-2">
										<Label className="text-[11px] font-medium uppercase tracking-[0.08em] text-white/35">
											Tell us about your situation
										</Label>
										<Textarea
											rows={4}
											placeholder="What are you trying to solve? What have you already tried?"
											className="resize-none border-white/8 bg-white/4 text-[13px] text-white placeholder:text-white/20 focus-visible:border-blue-500/50 focus-visible:ring-blue-500/20"
										/>
									</div>

									<Button
										type="submit"
										disabled={loading}
										className="h-10 mt-4 cursor-pointer group w-full bg-blue-700 text-[13px] font-medium tracking-wide text-white transition-all duration-200 hover:bg-blue-600 disabled:opacity-60"
									>
										{loading ? (
											<span className="flex items-center gap-2">
												<Loader2 className="h-4 w-4 animate-spin" />
												Sending…
											</span>
										) : (
											<span className="flex items-center gap-2">
												Send Message
												<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
											</span>
										)}
									</Button>

									<p className="text-center text-[11px] text-white/20">
										No pitch. No pressure. We reply within
										24 hours.
									</p>
								</form>
							)}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
