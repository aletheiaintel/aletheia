"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Globe, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { SERVICES_LIST } from "@/data";

gsap.registerPlugin(ScrollTrigger);

const validationSchema = Yup.object({
	fullName: Yup.string().required("Name is required"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	company: Yup.string(),
	service: Yup.string().required("Please select a service"),
	message: Yup.string().required("Please tell us about your situation"),
});

const fieldClass =
	"h-11 rounded-xl border-black/9 bg-white/60 text-[14px] text-[#222] placeholder:text-[#BBB] focus-visible:border-[#C9981A]/60 focus-visible:ring-[#C9981A]/20 transition-all duration-200";

const errorClass = "mt-1 text-[11px] text-red-500";

export default function Contact() {
	const sectionRef = useRef<HTMLElement>(null);
	const [submitted, setSubmitted] = useState(false);
	const [submitError, setSubmitError] = useState("");

	const formik = useFormik({
		initialValues: {
			fullName: "",
			email: "",
			company: "",
			service: "",
			message: "",
		},
		validationSchema,
		onSubmit: async (values) => {
			setSubmitError("");
			try {
				const res = await fetch("/api/contact", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(values),
				});
				const data = await res.json();
				if (data.success) {
					setSubmitted(true);
				} else {
					setSubmitError("Something went wrong. Please try again.");
				}
			} catch {
				setSubmitError("Something went wrong. Please try again.");
			}
		},
	});

	useLayoutEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		const ctx = gsap.context(() => {
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
				className="absolute -top-20 -right-20 w-125 h-125 rounded-full pointer-events-none"
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
				className="absolute bottom-[-10%] left-[5%] w-100 h-100 rounded-full pointer-events-none"
				style={{
					background:
						"radial-gradient(circle, #BAE6FD 0%, transparent 70%)",
					opacity: 0.3,
				}}
			/>

			<div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
				<div className="contact-wrapper grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
					{/* Left column */}
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
								<Link
									href="mailto:aletheiaintel@gmail.com"
									className="contact-info-item group flex items-center gap-3 text-[14px] text-[#333] hover:text-[#C9981A] transition-colors duration-200 opacity-0"
								>
									<div className="w-9 h-9 rounded-xl bg-[#FDFAF5] border border-black/[0.07] flex items-center justify-center shrink-0 group-hover:border-[#C9981A]/30 transition-colors duration-200">
										<Mail className="w-4 h-4 text-[#888] group-hover:text-[#C9981A] transition-colors duration-200" />
									</div>
									aletheiaintel@gmail.com
								</Link>
								<Link
									href="https://aletheiaintl.com"
									target="_blank"
									rel="noopener noreferrer"
									className="contact-info-item group flex items-center gap-3 text-[14px] text-[#333] hover:text-[#C9981A] transition-colors duration-200 opacity-0"
								>
									<div className="w-9 h-9 rounded-xl bg-[#FDFAF5] border border-black/[0.07] flex items-center justify-center shrink-0 group-hover:border-[#C9981A]/30 transition-colors duration-200">
										<Globe className="w-4 h-4 text-[#888] group-hover:text-[#C9981A] transition-colors duration-200" />
									</div>
									aletheiaintl.com
								</Link>
							</div>

							<div className="mt-12 pt-10 border-t border-black/6">
								<p className="text-[11px] tracking-widest uppercase text-[#AAA] font-medium mb-4">
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

					{/* Right column — form */}
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
									We&apos;ll review your message and reach out
									to schedule your discovery call within 24
									hours.
								</p>
								<div className="w-12 h-px bg-[#C9981A] mt-2" />
							</div>
						) : (
							<form onSubmit={formik.handleSubmit} noValidate>
								<div className="rounded-3xl border border-black/[0.07] bg-[#FDFAF5] p-8 md:p-10 shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
									<div className="flex flex-col gap-5">
										{/* Name + Email */}
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
											<div className="contact-field opacity-0 flex flex-col gap-1.5">
												<label
													htmlFor="fullName"
													className="text-[11px] tracking-[0.08em] uppercase text-[#888] font-medium"
												>
													Full Name
												</label>
												<Input
													id="fullName"
													name="fullName"
													placeholder="Your name"
													value={
														formik.values.fullName
													}
													onChange={
														formik.handleChange
													}
													onBlur={formik.handleBlur}
													className={fieldClass}
												/>
												{formik.touched.fullName &&
													formik.errors.fullName && (
														<p
															className={
																errorClass
															}
														>
															{
																formik.errors
																	.fullName
															}
														</p>
													)}
											</div>

											<div className="contact-field opacity-0 flex flex-col gap-1.5">
												<label
													htmlFor="email"
													className="text-[11px] tracking-[0.08em] uppercase text-[#888] font-medium"
												>
													Email Address
												</label>
												<Input
													id="email"
													name="email"
													type="email"
													placeholder="you@company.com"
													value={formik.values.email}
													onChange={
														formik.handleChange
													}
													onBlur={formik.handleBlur}
													className={fieldClass}
												/>
												{formik.touched.email &&
													formik.errors.email && (
														<p
															className={
																errorClass
															}
														>
															{
																formik.errors
																	.email
															}
														</p>
													)}
											</div>
										</div>

										{/* Company */}
										<div className="contact-field opacity-0 flex flex-col gap-1.5">
											<label
												htmlFor="company"
												className="text-[11px] tracking-[0.08em] uppercase text-[#888] font-medium"
											>
												Company / Organisation{" "}
												<span className="normal-case tracking-normal text-[#BBB]">
													(optional)
												</span>
											</label>
											<Input
												id="company"
												name="company"
												placeholder="Your company name"
												value={formik.values.company}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												className={fieldClass}
											/>
										</div>

										{/* Service Select */}
										<div className="contact-field opacity-0 flex flex-col gap-1.5">
											<label className="text-[11px] tracking-[0.08em] uppercase text-[#888] font-medium">
												I&apos;m interested in
											</label>
											<Select
												value={formik.values.service}
												onValueChange={(val) => {
													formik.setFieldValue(
														"service",
														val,
													);
													formik.setFieldTouched(
														"service",
														true,
													);
												}}
											>
												<SelectTrigger
													className="cursor-pointer w-full h-11 rounded-xl border-black/9 bg-white/60 text-[14px] text-[#222] data-placeholder:text-[#BBB] focus-visible:border-[#C9981A]/60 focus-visible:ring-[#C9981A]/20 transition-all duration-200"
													onBlur={() =>
														formik.setFieldTouched(
															"service",
															true,
														)
													}
												>
													<SelectValue placeholder="Select a service..." />
												</SelectTrigger>
												<SelectContent className="bg-[#FDFAF5] border-black/[0.07] rounded-xl">
													{SERVICES_LIST.map((s) => (
														<SelectItem
															key={s}
															value={s}
															className="text-[14px] text-[#333] focus:bg-[#FFF8E6] focus:text-[#C9981A] rounded-lg cursor-pointer"
														>
															{s}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											{formik.touched.service &&
												formik.errors.service && (
													<p className={errorClass}>
														{formik.errors.service}
													</p>
												)}
										</div>

										{/* Message */}
										<div className="contact-field opacity-0 flex flex-col gap-1.5">
											<label
												htmlFor="message"
												className="text-[11px] tracking-[0.08em] uppercase text-[#888] font-medium"
											>
												Tell us about your situation
											</label>
											<Textarea
												id="message"
												name="message"
												placeholder="What are you working on? What would you like to know the truth about?"
												rows={4}
												value={formik.values.message}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												className="rounded-xl border-black/9 bg-white/60 text-[14px] text-[#222] placeholder:text-[#BBB] focus-visible:border-[#C9981A]/60 focus-visible:ring-[#C9981A]/20 transition-all duration-200 resize-none"
											/>
											{formik.touched.message &&
												formik.errors.message && (
													<p className={errorClass}>
														{formik.errors.message}
													</p>
												)}
										</div>

										{/* Submit error */}
										{submitError && (
											<p className="text-center text-[12px] text-red-500">
												{submitError}
											</p>
										)}

										{/* Submit button */}
										<button
											type="submit"
											disabled={formik.isSubmitting}
											className="cursor-pointer contact-btn opacity-0 group mt-1 flex items-center justify-center gap-2 h-12 w-full rounded-full bg-[#121212] text-white text-xs md:text-[14px] font-medium tracking-[0.02em] shadow-lg shadow-black/10 transition-all hover:scale-[1.02] hover:bg-[#222] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
										>
											{formik.isSubmitting ? (
												<>
													<Loader2 className="w-4 h-4 animate-spin" />
													<span>Sending...</span>
												</>
											) : (
												<>
													<span>
														Book a Discovery Call
													</span>
													<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
												</>
											)}
										</button>

										<p className="text-center text-[11px] text-[#BBB] font-light">
											No pitch. No commitment. Just
											clarity.
										</p>
									</div>
								</div>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
