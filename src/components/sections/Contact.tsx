"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Globe, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SERVICES_LIST = [
	"PMF Validation",
	"Brand Strategy & Positioning",
	"Market Intelligence",
	"Go-To-Market Strategy",
	"Brand Activation",
	"Not sure yet",
];

export default function Contact() {
	const sectionRef = useRef<HTMLElement>(null);
	const [submitted, setSubmitted] = useState(false);
	const [selected, setSelected] = useState<string>("");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		message: "",
	});

	const handleSubmit = (e: React.MouseEvent) => {
		e.preventDefault();
		// Animate the button
		gsap.to(".contact-btn", {
			scale: 0.96,
			duration: 0.1,
			yoyo: true,
			repeat: 1,
			onComplete: () => setSubmitted(true),
		});
	};

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		const ctx = gsap.context(() => {
			// Left panel: reveal with curtain wipe
			gsap.fromTo(
				".contact-left-inner",
				{ clipPath: "inset(0 100% 0 0)" },
				{
					clipPath: "inset(0 0% 0 0)",
					duration: 1.4,
					ease: "expo.inOut",
					scrollTrigger: {
						trigger: ".contact-wrapper",
						start: "top 75%",
					},
				},
			);

			// Eyebrow and headline stagger
			gsap.fromTo(
				".contact-eyebrow",
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "power3.out",
					delay: 0.5,
					scrollTrigger: {
						trigger: ".contact-wrapper",
						start: "top 75%",
					},
				},
			);
			gsap.fromTo(
				".contact-headline",
				{ opacity: 0, y: 40 },
				{
					opacity: 1,
					y: 0,
					duration: 1.1,
					ease: "expo.out",
					delay: 0.65,
					scrollTrigger: {
						trigger: ".contact-wrapper",
						start: "top 75%",
					},
				},
			);
			gsap.fromTo(
				".contact-sub",
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.9,
					ease: "power3.out",
					delay: 0.8,
					scrollTrigger: {
						trigger: ".contact-wrapper",
						start: "top 75%",
					},
				},
			);

			// Contact info items
			gsap.fromTo(
				".contact-info-item",
				{ opacity: 0, x: -20 },
				{
					opacity: 1,
					x: 0,
					duration: 0.7,
					ease: "power3.out",
					stagger: 0.12,
					delay: 0.95,
					scrollTrigger: {
						trigger: ".contact-wrapper",
						start: "top 75%",
					},
				},
			);

			// Right panel form: slides up from below
			gsap.fromTo(
				".contact-form-panel",
				{ opacity: 0, y: 60 },
				{
					opacity: 1,
					y: 0,
					duration: 1.2,
					ease: "expo.out",
					delay: 0.3,
					scrollTrigger: {
						trigger: ".contact-wrapper",
						start: "top 75%",
					},
				},
			);

			// Form fields stagger in
			gsap.fromTo(
				".contact-field",
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					ease: "power3.out",
					stagger: 0.1,
					delay: 0.55,
					scrollTrigger: {
						trigger: ".contact-form-panel",
						start: "top 82%",
					},
				},
			);

			// Service pills
			gsap.fromTo(
				".contact-pill",
				{ opacity: 0, scale: 0.8, y: 8 },
				{
					opacity: 1,
					scale: 1,
					y: 0,
					duration: 0.4,
					ease: "back.out(2)",
					stagger: 0.07,
					delay: 0.7,
					scrollTrigger: {
						trigger: ".contact-form-panel",
						start: "top 82%",
					},
				},
			);

			// Submit button entrance
			gsap.fromTo(
				".contact-btn",
				{ opacity: 0, y: 14 },
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					ease: "power3.out",
					delay: 0.9,
					scrollTrigger: {
						trigger: ".contact-form-panel",
						start: "top 82%",
					},
				},
			);
		}, section);

		return () => ctx.revert();
	}, []);

	return (
		<section
			id="contact"
			ref={sectionRef}
			className="relative w-full bg-[#F5F0E8] overflow-hidden py-28 md:py-40"
		>
			{/* Background */}
			<div className="absolute inset-0 opacity-[0.035] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
			<div
				className="absolute inset-0 opacity-[0.04]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43 7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm28-65c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm23-11c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm-6 60c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm29 15c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z' fill='%23666' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
					backgroundSize: "180px 180px",
				}}
			/>

			<motion.div
				animate={{ x: [0, -18, 0], y: [0, 22, 0], scale: [1, 1.07, 1] }}
				transition={{
					duration: 15,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
				style={{
					background:
						"radial-gradient(circle, #F2C594 0%, #E8B5D4 45%, transparent 70%)",
					opacity: 0.4,
				}}
			/>
			<motion.div
				animate={{ x: [0, 20, 0], y: [0, -16, 0], scale: [1, 1.05, 1] }}
				transition={{
					duration: 19,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 5,
				}}
				className="absolute bottom-[-10%] left-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
				style={{
					background:
						"radial-gradient(circle, #BAE6FD 0%, transparent 70%)",
					opacity: 0.3,
				}}
			/>

			<div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
				<div className="contact-wrapper grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
					{/* Left panel */}
					<div>
						<div className="contact-left-inner">
							<p className="contact-eyebrow mb-5 text-[11px] tracking-[0.2em] text-[#1A7A4C] uppercase font-medium opacity-0">
								Book a Discovery Call
							</p>
							<h2 className="contact-headline font-serif text-[clamp(40px,5.5vw,72px)] font-light leading-[0.95] tracking-[-0.025em] text-[#121212] mb-7 opacity-0">
								No pitch.
								<br />
								Just an honest
								<br />
								<em className="text-[#C9981A]">
									conversation.
								</em>
							</h2>
							<p className="contact-sub text-[15px] leading-relaxed text-[#666] font-light mb-10 max-w-sm opacity-0">
								Every engagement begins with a discovery call.
								We listen first, diagnose second, and recommend
								only what will genuinely move the needle for
								your specific situation.
							</p>

							<div className="flex flex-col gap-4">
								<a
									href="mailto:aletheiaintel@gmail.com"
									className="contact-info-item group flex items-center gap-3 text-[14px] text-[#333] hover:text-[#C9981A] transition-colors duration-200 opacity-0"
								>
									<div className="w-9 h-9 rounded-xl bg-[#FDFAF5] border border-black/[0.07] flex items-center justify-center shrink-0 group-hover:border-[#C9981A]/30 transition-colors duration-200">
										<Mail className="w-4 h-4 text-[#888] group-hover:text-[#C9981A] transition-colors duration-200" />
									</div>
									aletheiaintel@gmail.com
								</a>
								<a
									href="https://aletheiaintl.com"
									target="_blank"
									rel="noopener noreferrer"
									className="contact-info-item group flex items-center gap-3 text-[14px] text-[#333] hover:text-[#C9981A] transition-colors duration-200 opacity-0"
								>
									<div className="w-9 h-9 rounded-xl bg-[#FDFAF5] border border-black/[0.07] flex items-center justify-center shrink-0 group-hover:border-[#C9981A]/30 transition-colors duration-200">
										<Globe className="w-4 h-4 text-[#888] group-hover:text-[#C9981A] transition-colors duration-200" />
									</div>
									aletheiaintl.com
								</a>
							</div>

							{/* Decorative divider */}
							<div className="mt-12 pt-10 border-t border-black/[0.06]">
								<p className="text-[11px] tracking-[0.1em] uppercase text-[#AAA] font-medium mb-4">
									Available for Q2 Partnerships
								</p>
								<div className="flex gap-2 flex-wrap">
									{[
										"Advisory Model",
										"Done-For-You Model",
									].map((m) => (
										<span
											key={m}
											className="text-[11px] tracking-[0.05em] uppercase px-3 py-1.5 rounded-full font-medium text-[#1A7A4C] bg-[#1A7A4C]/8 border border-[#1A7A4C]/20"
										>
											{m}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Right panel — form */}
					<div className="contact-form-panel opacity-0">
						{submitted ? (
							<div className="rounded-3xl border border-black/[0.07] bg-[#FDFAF5] p-10 md:p-12 flex flex-col items-center text-center gap-5 shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
								<div className="w-16 h-16 rounded-full bg-[#1A7A4C]/10 flex items-center justify-center">
									<CheckCircle className="w-8 h-8 text-[#1A7A4C]" />
								</div>
								<h3 className="font-serif text-[28px] font-light text-[#121212] leading-tight">
									Message received.
								</h3>
								<p className="text-[14px] text-[#777] font-light leading-relaxed max-w-xs">
									We'll review your message and reach out to
									schedule your discovery call within 24
									hours.
								</p>
								<div className="w-12 h-px bg-[#C9981A] mt-2" />
							</div>
						) : (
							<div className="rounded-3xl border border-black/[0.07] bg-[#FDFAF5] p-8 md:p-10 shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
								<div className="flex flex-col gap-5">
									{/* Name + Email */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
										<div className="contact-field opacity-0 flex flex-col gap-1.5">
											<label className="text-[11px] tracking-[0.08em] uppercase text-[#888] font-medium">
												Full Name
											</label>
											<input
												type="text"
												placeholder="Your name"
												value={formData.name}
												onChange={(e) =>
													setFormData((p) => ({
														...p,
														name: e.target.value,
													}))
												}
												className="w-full rounded-xl border border-black/[0.09] bg-white/60 px-4 py-3 text-[14px] text-[#222] placeholder-[#BBB] outline-none focus:border-[#C9981A]/60 focus:ring-1 focus:ring-[#C9981A]/20 transition-all duration-200"
											/>
										</div>
										<div className="contact-field opacity-0 flex flex-col gap-1.5">
											<label className="text-[11px] tracking-[0.08em] uppercase text-[#888] font-medium">
												Email Address
											</label>
											<input
												type="email"
												placeholder="you@company.com"
												value={formData.email}
												onChange={(e) =>
													setFormData((p) => ({
														...p,
														email: e.target.value,
													}))
												}
												className="w-full rounded-xl border border-black/[0.09] bg-white/60 px-4 py-3 text-[14px] text-[#222] placeholder-[#BBB] outline-none focus:border-[#C9981A]/60 focus:ring-1 focus:ring-[#C9981A]/20 transition-all duration-200"
											/>
										</div>
									</div>

									{/* Company */}
									<div className="contact-field opacity-0 flex flex-col gap-1.5">
										<label className="text-[11px] tracking-[0.08em] uppercase text-[#888] font-medium">
											Company / Organisation
										</label>
										<input
											type="text"
											placeholder="Your company name"
											value={formData.company}
											onChange={(e) =>
												setFormData((p) => ({
													...p,
													company: e.target.value,
												}))
											}
											className="w-full rounded-xl border border-black/[0.09] bg-white/60 px-4 py-3 text-[14px] text-[#222] placeholder-[#BBB] outline-none focus:border-[#C9981A]/60 focus:ring-1 focus:ring-[#C9981A]/20 transition-all duration-200"
										/>
									</div>

									{/* Service interest */}
									<div className="contact-field opacity-0 flex flex-col gap-2.5">
										<label className="text-[11px] tracking-[0.08em] uppercase text-[#888] font-medium">
											I'm interested in
										</label>
										<div className="flex flex-wrap gap-2">
											{SERVICES_LIST.map((s) => (
												<button
													key={s}
													type="button"
													onClick={() =>
														setSelected(s)
													}
													className={`contact-pill text-[11px] tracking-[0.05em] uppercase px-3 py-1.5 rounded-full font-medium border transition-all duration-200 opacity-0 ${
														selected === s
															? "bg-[#C9981A] text-white border-[#C9981A] shadow-[0_4px_12px_rgba(201,152,26,0.3)]"
															: "text-[#666] bg-white/70 border-black/[0.08] hover:border-[#C9981A]/40 hover:text-[#C9981A]"
													}`}
												>
													{s}
												</button>
											))}
										</div>
									</div>

									{/* Message */}
									<div className="contact-field opacity-0 flex flex-col gap-1.5">
										<label className="text-[11px] tracking-[0.08em] uppercase text-[#888] font-medium">
											Tell us about your situation
										</label>
										<textarea
											placeholder="What are you working on? What would you like to know the truth about?"
											rows={4}
											value={formData.message}
											onChange={(e) =>
												setFormData((p) => ({
													...p,
													message: e.target.value,
												}))
											}
											className="w-full rounded-xl border border-black/[0.09] bg-white/60 px-4 py-3 text-[14px] text-[#222] placeholder-[#BBB] outline-none focus:border-[#C9981A]/60 focus:ring-1 focus:ring-[#C9981A]/20 transition-all duration-200 resize-none"
										/>
									</div>

									{/* Submit */}
									<button
										type="button"
										onClick={handleSubmit}
										className="contact-btn opacity-0 group mt-1 flex items-center justify-center gap-2 h-12 w-full rounded-full bg-[#121212] text-white text-[14px] font-medium tracking-[0.02em] shadow-lg shadow-black/10 transition-all hover:scale-[1.02] hover:bg-[#222] active:scale-[0.98]"
									>
										<span>Book a Discovery Call</span>
										<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
									</button>

									<p className="text-center text-[11px] text-[#BBB] font-light">
										No pitch. No commitment. Just clarity.
									</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
